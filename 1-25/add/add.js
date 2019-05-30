
//simple addition
function add(param1, param2) {
    return param1 + param2;
}

//additon using rest operator
function add2(...param1) {
    let sum = 0;
    param1.forEach((num) => {
        sum += num;

    });
    return sum;
}
console.log(add2(1,3,5,7,9));
console.log(add2(4,4));


//Sum of Array
function arrSum (arr1) {

    return arr1.reduce(function (a ,b) {
        return a + b;
    }, 0);
}
console.log(`\n\nThe sum of the array is: ${arrSum([1,1,1,1])}`);