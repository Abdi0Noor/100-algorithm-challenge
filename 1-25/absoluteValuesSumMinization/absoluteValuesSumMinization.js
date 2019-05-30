
function absoluteValuesSumMinimization(arr) {
    const isEven = arr.length % 2 === 0;
    return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
}

console.log(absoluteValuesSumMinimization([1,2,3,4,5,6,7,8,9]));
console.log(absoluteValuesSumMinimization([1,2,3,3,4,5,6,7,8,9]));
console.log(absoluteValuesSumMinimization([1,2,3,3,4,4,5,5,6,7,8,9]));