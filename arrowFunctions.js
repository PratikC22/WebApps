var array = [1, 2, 3, 4];

const sum = (acc, value) => acc + value;
const product = (acc, value) => acc * value;

var sumOfArrayElements = array.reduce(sum, 0);
var productOfArrayElements = array.reduce(product, 1);

console.log("The sum of array elements is " + sumOfArrayElements);
console.log("The product of array elements is " + productOfArrayElements);