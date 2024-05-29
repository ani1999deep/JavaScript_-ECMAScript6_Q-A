//It is a caching technique to store expensive function calls results and avoid unnecessary recalculation in JS.
const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
};

//Example function to be memoized
const fibonnaci = (n) => {
  if (n <= 1) return n;
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

//Memorized the function
const memoizedFibonacci = memoize(fibonnaci);

//MemoizedFibonacci with the same argument, it will return the cached result
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
