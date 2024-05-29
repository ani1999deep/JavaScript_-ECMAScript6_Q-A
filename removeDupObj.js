// Remove Duplicates from Array using Object Keys in JavaScript
function removeDup(array) {
  return Object.keys(array.reduce((obj, value) => ((obj[value] = true), obj)));
}

let arr = [1, 2, 3, 1, 2, 5, 6, 4, 5, 6];

console.log(removeDup(arr));
