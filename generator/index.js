var re = new RegExp("\\[([A-Z][a-z]*)\\]");

function Generator( model , opts ){
  this.model = model;
  this.opts = opts;
  this.string = null;
}
Generator.prototype.generate = function( s ){
  s = s || "[S]";
  var done = false;
  while( !done ){
    var m = re.exec(s);
    if ( m ){
      var len = m[0].length;
      var n = this.model.fetch(m[1]);
      // now we fetch recursivly
      if ( ! n ){
        n = "{"+m[1]+"}";
      }else{
        n = this.generate(n); // we generate recursivly, just to speed things up
      }
      var pre = s.substring(0,m.index);
      var post = s.substring(m.index+len);
      s = pre+n+post;
    }else{
      done = true;
    }
  }
  return s;
}
Generator.prototype.toString = function(){
  if ( ! this.string ){
    this.string = this.generate();
  }
  return this.string;
}

module.exports = Generator;
