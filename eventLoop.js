console.log("Start"); //1st

setTimeout(() => {
  console.log("TimeOut callback"); //4th
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Resolved"); //2nd
});

console.log("End"); //3rd
