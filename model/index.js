function Model(){
  this.keys = [];
  this.details = {};
  this.random = Math.random;
}
Model.prototype.loadJSON = function(j){
  for ( var n in j ){
    this.addKeySet( n , j[n] );
  }
}
Model.prototype.addKeySet = function(key,array){
  var opts = this.details[key];
  if ( ! opts ){
    // missing opts
    this.details[key] = array;
    this.keys.push(key);
  }else{
    // already exists
    this.details[key] = opts.concat(array);
  }
}
Model.prototype.extend = function(key,f){
  if ( this.details[key] ){
    throw "Unable to extend ["+key+"] as it already exists."
  }
  this.details[key] = f;
  this.keys.push(key);
}
Model.prototype.fetch = function(key){
  var options = this.details[key];
  if ( ! options ) return false;
  if ( typeof options == 'function' ){
    // function - execute it.
    return options();
  }else{
    // assume array
    var n = this.random();
    var index = Math.floor(n * options.length);
    return options[index];
  }
}

module.exports = Model;
