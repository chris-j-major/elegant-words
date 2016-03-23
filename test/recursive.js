var Words = require("../");

var w = new Words();

w.loadJSONModel( {
  "S":[
    "[base-[A]]"
  ],
  "A":[
    "A","B","C"
  ],
  "BASE-A":[
    "Ardvark"
  ],
  "BASE-B":[
    "Bear"
  ],
  "BASE-C":[
    "Cheater"
  ]
} );

console.log( w.generate().toString() );
