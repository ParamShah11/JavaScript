/*
    All Primitive Datatypes follow (stack) Data Structure
    All Non-Primitive Datatypes follows (Heap) Data Structure
*/

let name1 = "Param"


let name2 = name1 // In Doesn't Passes the original value
name2 = "Param Shah" 

console.log(name1)
console.log(name2)


let obj = {
    name:"Param Shah",
    age:17
}

console.log(obj.age)

let obj1 = obj; // It Passes The Original Value

obj1.age = 22;

console.log(obj.age)
console.log(obj1.age)