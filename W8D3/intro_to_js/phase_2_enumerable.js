// [1, 2, 3]
Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
// doubler(ele) = ele*2;
Array.prototype.myMap = function (callback) {
    let mapped = [];
    // for(let i=0; i<this.length; i++){
    //     mapped.push(callback(this[i]));
    // }
    this.myEach(function (ele) {
        mapped.push(callback(ele))
    })
    return mapped;
    // console.log(mapped);
}
// [1,2,3]

Array.prototype.myReduce = function (callback, initialValue) {
    // debugger
    if (initialValue === undefined) {
        let acc = this[0]; //1
        this.slice(1).myEach((ele) => acc = callback(acc, ele));
        return acc;
    } else {
        let acc = initialValue
        this.myEach((ele) => acc = callback(acc, ele));
        return acc;
    }
}

let a = [1, 2, 3];
a.myReduce(function (acc, el) {
    return acc + el;
}, 25);