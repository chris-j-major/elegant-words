var Words = require("../");

var w = new Words();

w.loadJSONModel( {
  "S":[
    "[L][L] [NONE]",
    "[L][L] [N]",
    "[L][L] [N]",
    "[L][L] [N]",
    "[L][L] [NONE]",
    "[L][L] [NONE]",
    "[L][L] [L]",
  ],
  "NONE":[],
  "L":[
    "A","B","C","D","E","F","G"
  ],
  "N":[
    "[L][L] [NONE]",
    "[L][L] [NONE]",
    "[L][L] [NONE]",
    "[L][L] [NONE]"
  ],
} );

console.log( w.generate().toString() );
