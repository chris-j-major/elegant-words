function Model(){
  this.keys = [];
  this.details = {};
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
Model.prototype.fetch = function(key,random){
  var options = this.details[key];
  if ( ! options ) return false;
  if ( typeof options == 'function' ){
    // function - execute it.
    var n = options();
    if ( !n.push ){
       return n;
    }else{
      options = n; // use this array...
    }
  }
  // assume array
  var n = random();
  var index = Math.floor(n * options.length);
  return options[index];
}

module.exports = Model;
