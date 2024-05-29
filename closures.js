//Clousers are function that remember the enviroment when they created in js

const createCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
