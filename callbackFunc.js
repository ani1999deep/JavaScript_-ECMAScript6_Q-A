//Js Callback Function
const sum = (a, b) => {
  return a + b;
};

const callbackFun = (x, y, operation) => {
  return operation(x, y);
};

console.log(callbackFun(10, 100, sum));
