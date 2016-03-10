var Words = require("../");

var w = new Words();

w.loadJSONModel( require("./custom-words.json") );
w.extendModel( 'NOW' , function(){
  return new Date().toString();
});

console.log( w.generate().toString() );
