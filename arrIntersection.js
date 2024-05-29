// JavaScript Array Intersection
let arr1 = ["A", "B", "C", "D", "E", "F", "G"];
let arr2 = ["D", "E", "A", "X"];
let arrIntersection = arr2.filter((interArr) => arr1.includes(interArr));
console.log(arrIntersection);
