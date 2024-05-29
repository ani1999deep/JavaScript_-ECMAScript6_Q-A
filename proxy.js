// Proxy Objects in JavaScript
const target = {
  message1: "hello",
  message2: "world!",
};

const handler1 = {};
const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1);
console.log(proxy1.message2);
