var fs = require("fs");
var argv = require('minimist')(process.argv.slice(2));

var Words = require("../");

var w = new Words();

if ( argv.src ){
  w.loadJSONModel(argv.src);
}else{
  w.loadJSONModel( require("./words.json") );
}

console.log( w.generate( { start:argv.start } ).toString() );
