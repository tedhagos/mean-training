
var util = require("util");

var x = new Array(1,2,3,4,5);
var y = new Array(1,2,3,4,5);

for (i in x) {
  for (j in y) {
    util.print(i * j, "\t");
    //var str = str + (i * j) + "\t"
  }
  //str += "\n";
  //console.log();
  util.print("\n");
}
//console.log(str);

