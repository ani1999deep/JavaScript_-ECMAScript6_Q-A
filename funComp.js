//Add a number
const addNumber = (x) => x + 1;
//Multiply a number
const multiplyNum = (x) => x * 2;
// Function composition
const compoFun = (x) => multiplyNum(addNumber(x));
//Test
console.log(compoFun(10));
