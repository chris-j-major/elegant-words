function Model(){
  this.keys = [];
  this.details = {};
  this.random = Math.random;
}
Model.prototype.loadJSON = function(j){
  for ( var n in j ){
    this.addArray( n , j[n] );
  }
}
Model.prototype.addArray = function(key,array){
  var opts = this.details[key];
  if ( ! opts ){
    // missing opts
    this.details[key] = array;
    this.keys.push(key);
  }else{
    // already exists
    opts.splice(0,0,array);
  }
}
Model.prototype.fetch = function(key){
  var options = this.details[key];
  if ( ! options ) return false;
  var n = this.random();
  var index = Math.floor(n * options.length);
  return options[index];
}

module.exports = Model;
