var Model = require("./model");
var Generator = require("./generator");

function Words(){
  this.model = new Model();
}
Words.prototype.loadJSONModel = function( src ){
  this.model.loadJSON(src);
  return this;
}
Words.prototype.extendModel = function( key , f ){
  this.model.extend(key,f);
  return this;
}
Words.prototype.generate = function( opts ){
  return new Generator( this.model , opts );
}

module.exports = Words;
