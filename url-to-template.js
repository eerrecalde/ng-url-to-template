"use strict";
var assert = require('assert');

module.exports = {
  getTemplateUrl: getTemplateUrls,
  getStyleUrls:   getStyleUrls
}

/**
 * parse contents and returns templateUrls in contents 
 * e.g. [{templateUrl: 'templateUrl: "A"', templatePath: 'A'}, ...]
 * It also handles multiple occurences
 */
function getTemplateUrls(contents) {
  let TEMPLATE_URL_RE = /templateUrl\s*:\s*['"`](.*?)['"`]/gm;
  let matches, templateUrls = [];

  while(matches = TEMPLATE_URL_RE.exec(contents) ) {
    templateUrls.push({
      templateUrl: matches[0],
      templatePath: matches[1]
    })
  }
  return templateUrls;
}

/**
 * parse contents and returns styleUrls in contents 
 * e.g. [{styleUrls: 'styleUrls: ["A"]', stylePaths: ['A']}, ...]
 * It also handles multiple occurences
 */
function getStyleUrls(contents) {
  let STYLE_URLS_RE = /styleUrls\s*:\s*(\[[^](.[^]*?)\])/gm;
  let matches, styleUrls = [];

  while(matches = STYLE_URLS_RE.exec(contents) ) {
    styleUrls.push({
      styleUrls: matches[0],
      stylePaths: matches[1]
        .replace(/^\[/,'')
        .replace(/\]$/,'')
        .replace(/\s/g,'')
        .replace(/['"`](.*?)['"`]/g, '$1')
        .split(',')
    })
  }
  return styleUrls;
}

//
// test follows
//
var templateUrls = getTemplateUrls(`
  ...
  templateUrl: "A",
  ...
  templateUrl: \`B\`,
  ...
  templateUrl:
    'C'
  ...
`);
assert(templateUrls[0].templateUrl,  'templateUrl: "A"');
assert(templateUrls[0].templatePath, 'A');
assert(templateUrls[1].templateUrl,  'templateUrl: \`B\`');
assert(templateUrls[1].templatePath, 'B');
assert(templateUrls[2].templateUrl,  'templateUrl: \n    \'D\'');
assert(templateUrls[2].templatePath, 'C');

var styleUrls = getStyleUrls(`
  ...
  styleUrls: ["A",'b',\`C\`],
  ...
  styleUrls  :  [
    "D",
    'E',
    \`F\`
  ]
  ...
`);
assert(styleUrls[0].styleUrls,  'styleUrls: ["A",\'b\',\`C\`]');
assert(styleUrls[0].stylePaths, ['A', 'b', 'C']);
assert(styleUrls[0].styleUrls,  'styleUrls  :  [\n    "D",\n    \'E\',\n    `F`\n  ]');
assert(styleUrls[1].stylePaths, ['D', 'E', 'F']);
