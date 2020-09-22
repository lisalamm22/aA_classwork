// Write a curriedSum function that takes an integer(how many numbers to sum) 
// and returns a function that can be successively called with single arguments 
// until it finally returns a sum.

function curriedSum(numArgs){
    let numbers = [];
    return function _curriedSum(num) {
        numbers.push(num);
        if(numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach((num) => sum += num);
            return sum;
        }
        return _curriedSum;
    }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56  


Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;    // function calling curry
    return function _curry(arg) {
        args.push(arg);
        if (args.length < numArgs) {
            return _curry;
        } else {
            return that(...args);
            // return that.apply(null, args);
            // return that.apply(that, args);
        }
    }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

const sumProto = sumThree.curry(3);
console.log(sumProto(5)(30)(20)); // => 56  