# ng-url-to-template

Forked from [jsvalley/ng2-inline-template](https://github.com/jsvalley/ng2-inline-template) and added support for adding component's content one by one like as follow:

```
...
comp.template = './test';
comp.restrict = 'E';
...
```

Replaces `templateUrl` and `styleUrls` in Angular1 or Angular2 components/directives `template` and `styles`.

## Install

    $ npm install --save ng-url-to-template

 Or install globally to use `ngUrl2Template` in command line

    $ npm install --g ng-url-to-template

## Usage

### In a node module

    var ngUrl2Template = require('ng-url-to-template');
    var output = ng2Inline('./my.compnent.ts');

### In command line

    $ ngUrl2Template --outDir=dist "src/**/*.ts"

## License
MIT
