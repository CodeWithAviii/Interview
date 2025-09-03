console.log(name)
var name = "Arvind"

//output will be undefined or empty string



//Clousure 
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  };
}
const count = outer();
console.log(count()); // 1
console.log(count()); // 2
