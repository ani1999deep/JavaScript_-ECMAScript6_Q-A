//map() vs flatMap()

//map()
const number = [1, 2, 3, 4, 5, 6];
const mapNum = number.map((x) => x * 2);
console.log(mapNum);

//flatMap()
const arr = [1, 2, 3, 4, 5, 6];
const flatMapArr = arr.flatMap((y) => [y]);
const MapArr = arr.map((y) => [y]);
console.log(flatMapArr);
console.log(MapArr);
