

var arr = ["Brendan", "Eich"];
arr.doSomething = function() {
  return "Hello " + this[0];
}

arr.push(method = function() {
  return 10;
});
arr.push(1);

console.log(arr.doSomething());
console.log(typeof(arr[2]));
console.log(typeof(arr[2])());
console.log(typeof(arr[3]));
