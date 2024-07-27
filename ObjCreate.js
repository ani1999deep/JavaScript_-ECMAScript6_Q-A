// Object literal syntax:

// The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

var object = {
  name: "Sudheer",
  age: 34,
};

//  Object constructor:

// The simplest way to create an empty object is using the Object constructor.

var object = new Object();

// Object's create method:

// The create method of Object is used to create a new object by passing the specificied prototype object and properties as arguments.

var object = Object.create(null);

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
console.log(car);

// Function constructor:

// In this approach, create any function and apply the new operator to create object instances.

function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Sudheer");

//     Object's assign method:

// The Object.assign method is used to copy all the properties from one or more source objects and stores them into a target object.

const orgObject = { company: "XYZ Corp" };
const carObject = { name: "Toyota" };
const staff = Object.assign({}, orgObject, carObject);

// ES6 Class syntax:

// ES6 introduces class feature to create objects.

class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");

// Singleton pattern:

// A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance. This way one can ensure that they don't accidentally create multiple instances.

var object = new (function () {
  this.name = "Sudheer";
})();
