// DeepCopy of an obj
let obj = { a: 1, b: { c: 6 } };
let deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 9;
console.log(obj.b.c);
