var Words = require("../");

var w = new Words();

w.loadJSONModel( {
  "S":[
    "abba [L1] [L2] [L2] [L1] - [NESTED]",
    "abcba [L1] [L2] [L3] [L2] [L1] - [NESTED]",
    "abccba [L1] [L2] [L3] [L3] [L2] [L1] - [NESTED]"
  ],
  "L":[
    "A","B","C","D","E","F","G"
  ],
  "NESTED":[
    "(nested [L1] [L1])"
  ]
} );

console.log( w.generate().toString() );
