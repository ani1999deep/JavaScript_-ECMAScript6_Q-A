//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

//Normal Function with multiple arguments
const add = (x, y, z) => {
  return x + y + z;
};

console.log(add(1, 2, 3));

//Curried
function addCur(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = addCur(12)(13)(14);
console.log(result);
