
/*
function foo(a,b,c) {
  return a + b;
}

var x = foo(1,2,"this is hello", true, false);
console.log(x);
*/

/*
function foobar(bar) {
  console.log(bar);
  bar = "Hello";
  console.log(bar);
}

function baz() {
  return 10;
}

foobar(baz);
*/

var person = {
  lastname : "Eich",
  firstname : "Brendan",
  occupation: "Creator of JS",
  doWork : function() {
    return (this.lastname +  " is doing work");
  }
}

console.log(person.firstname);
console.log(person.doWork());

var i = ["Brendan", "Eich", function() {
  return "doing work"
}];

//console.log(i);
//console.log(i[2]());

var j = new Array();
j.push(1);

for (i = 2; i < 10; i++) {
  j.push(i);
}

//console.log(j);

/*
for (i = 2; i < 10; i++) {
  console.log(j.pop(i));
}

for (c in j) {
  console.log(c);
}

*/






















