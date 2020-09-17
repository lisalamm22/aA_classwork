Array.prototype.uniq = function () {
    let uniqueArr = [];
    this.forEach(function(ele){
        if (uniqueArr.includes(ele) === false) {
            uniqueArr.push(ele);
        }
    }) 
    // console.log(uniqueArr);
    return uniqueArr;
}
// let a = [1, 2, 2, 3, 3, 3];
// [1, 2, 2, 3, 3, 3].uniq();

Array.prototype.twoSum = function () {
    let zeroSum = [];
    for(let i = 0; i < this.length - 1; i++) {
        for(let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                zeroSum.push([i, j]);
            }
        }
    }
    // console.log(zeroSum);
    return zeroSum;
}

// let b = [1, 0, 3, -3];
// b.twoSum();
// [[1,2,3],[4,5,6],[7,8,9]] => [[1,4,7],[2,5,8],[3,6,9]]
Array.prototype.transpose = function () {
    let transposedArr = [];
    for(let i=0; i<this.length; i++){
        let row = [];
        for(let j=0; j<this[i].length; j++){
            row.push(this[j][i]);
        }
        transposedArr.push(row);
    }
    return transposedArr;
}

// [1, 2, 3]
Array.prototype.myEach = function (callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
// doubler(ele) = ele*2;
Array.prototype.myMap = function (callback) {
    let mapped = [];
    // for(let i=0; i<this.length; i++){
    //     mapped.push(callback(this[i]));
    // }
    this.myEach(function(ele){ 
        mapped.push(callback(ele))
    })
    return mapped;
    // console.log(mapped);
}
// [1,2,3]

Array.prototype.myReduce = function (callback,initialValue) {
    // debugger
    if (initialValue === undefined) {
        let acc = this[0]; //1
        this.slice(1).myEach((ele) => acc = callback(acc, ele));
        return acc;
    } else {
        let acc = initialValue
        this.myEach((ele) => acc = callback(acc,ele));
        return acc;
    }
}

let a = [1,2,3];
a.myReduce(function(acc, el) {
  return acc + el;
},25);


