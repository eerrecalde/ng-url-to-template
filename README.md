# ng2-inline-template

Replace `templateUrl` and `styleUrls` in Angular2 components `template` and `styles`.

## Install

    $ npm install --save ng2-inline-template
    
 Or install globally to use `ng2inline` in command line
 
    $ npm install --g ng2-inline-template

## Usage

### In a node module

    var ng2inline = require('ng2-inline-template');
    var output = ng2Inline('./my.compnent.ts');
        
### In command line
    
    $ ng2inline --outDir=dist "src/**/*.ts"

## License
MIT
