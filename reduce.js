let arr = [1, 2, 5, [6, [7, 8, [99, 88, 23], 9, 10, [45, 65, 95], 77], 8], 4, 5];
let arr2;

function flatten(arr1) {
  return arr1.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), 
  []);
}

arr2 = flatten(arr);
console.log(arr2); // [1, 2, 5, 6, 7, 8, 99, 88, 23, 9, 10, 45, 65, 95, 77, 8, 4, 5]
