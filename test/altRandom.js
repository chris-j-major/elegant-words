var Words = require("../");
var randomSeed = require('random-seed');

var w = new Words();
w.loadJSONModel( require("./words.json") );
var r = new randomSeed(12);

console.log( w.generate( { random:r.random } ).toString() );
