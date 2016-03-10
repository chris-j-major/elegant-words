var re = new RegExp("\\[([A-Z]+)([0-9]+)?\\]");

function Generator( model , opts ){
  this.model = model;
  this.opts = opts;
  this.string = null;
}
Generator.prototype.generate = function( s ){
  s = s || "[S]";
  var backrefs = {};
  var done = false;
  while( !done ){
    var m = re.exec(s);
    if ( m ){
      var len = m[0].length;
      var backref = false;
      var n = null;
      if ( m[2] ){
        // backref
        backref = parseInt(m[2]);
      }
      if ( backref && backrefs[backref] ){
        n = backrefs[backref];
      }else{
        n = this.model.fetch(m[1]);
        // now we fetch recursivly
        if ( ! n ){
          n = "{"+m[1]+"}";
        }else{
          n = this.generate(n); // we generate recursivly, just to speed things up
        }
        if ( backref ){
          backrefs[backref] = n;
        }
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
