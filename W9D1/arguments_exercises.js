function sum(){
    let sum = 0;
    const argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach((num) => sum += num );
    return sum;
}

// function sum(...args){
//     let sum = 0;
//     args.forEach((num) => sum += num );
//     return sum;
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// line 19 has to be defined as function style b/c of how we access this
// can't use arrow-style 
Function.prototype.myBind = function() {    
    const bindtimeArgs = Array.from(arguments); 
    console.log(arguments)
    let context = bindtimeArgs[0];
    let that = this;
    return function() {         // can write anon fxn using arrow or fxn-style
        
        const calltimeArgs = Array.from(arguments); 
        // that.apply(context, bindtimeArgs.slice(1).concat(calltimeArgs))
        let args = bindtimeArgs.slice(1).concat(calltimeArgs)
        that.call(context, ...args)
    }
}

// return anon function for later use .call/.apply
// rewrite using: spread operator, .call, .apply,  =>, function def style

// Array.prototype.addStuff = function() {
    //     let result = this[0]
    //     Array.from(arguments).forEach( (el) => result += el );
    //     return result;
    // }
    

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says.myBind(pavlov, "meow")("Markov");
markov.says.bind(pavlov, "meow")("Markov");
console.log(markov.says("meow"))

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");    //arguments = [["pavlov","meow"],["Markov"]]
// Pavlov says meow to Markov!
// true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true