// Global Namespace
var main = main || {};

const arr1 = [10, 20, 30];

// make a copy of arr1
const copy = [...arr1];

console.log(copy);    // → [10, 20, 30]

const arr2 = [40, 50];

// merge arr2 with arr1
const merge = [...arr1, ...arr2];

console.log(merge);    // → [10, 20, 30, 40, 50]
