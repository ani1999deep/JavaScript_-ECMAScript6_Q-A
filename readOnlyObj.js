//Create Read-Only Properties in JavaScript Objects
const Person = {};

Object.defineProperty(Person, "name", {
  value: "Anideep",
  writable: false,
});

console.log(Person.name);

Person.name = "Deep";

console.log(Person.name);
