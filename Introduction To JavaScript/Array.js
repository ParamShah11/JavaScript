// Array

let arr = [1,2,3,4,5]
console.log(arr)

const arr1 = new Array(1,2,3,4)
console.log(arr1)

// let arr1 = arr;

// console.log(arr1[0] = 2);
// console.log(arr1);
// console.log(arr)


// Array Methods

const myArr = [1,2,3,4,5]

console.log(myArr.push(6));
console.log(myArr);
console.log(myArr.pop())
console.log(myArr);
console.log(myArr.unshift(9))
console.log(myArr);
console.log(myArr.shift())
console.log(myArr);

let myarr2 = [1,2,3,4,5,9]

console.log(myarr2.includes(9))
console.log(myarr2.indexOf(20)) // gives -1
console.log(myarr2.indexOf(2))

// Join
myarr2 = myArr.join();
console.log(myarr2) // returns a String datatype


// Slice And Splice

const narr = [1, 2, 3, 4, 5];
console.log("Slice :- " + narr.slice(0, 2));

const narr1 = [1, 2, 3, 4, 5];
console.log(narr1);
console.log("Splice :- " + narr1.splice(0, 2));
console.log(narr1);

