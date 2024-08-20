/*There are 2 types of DataTypes
    1:- Primitive DataTypes
    2:- Non-Primitive DataTypes

    1:- Primitive DataTypes

    Null ==> null
    Number ==> 123
    Boolean ==> true,false
    BigInt ==> 123485186506587846n
    Symbol ==> symbol("I am Symbol")
    String ==> " "
    Undefined ==> undefined


    2:- Non - Primitive DataTypes
    Array ==> []
    Object ==> {}
    Function ==> function()       
*/


               //*************Primitive DataTypes***************/
let a = 5;
console.log(a, typeof(a))

let b = true;
console.log(b, typeof(b))

let c = 5548452353274n;
console.log(c, typeof(c))

let d = null;
console.log(d, typeof(d)) // object

let e;
console.log(e, typeof(e))

let f = "I am a String"
console.log(f, typeof(f))

let g = Symbol("I am a symbol") // Stores Unique Values
let h = Symbol("I am a Symbol")

console.log(g, typeof(g))
console.log(h, typeof(h))

                //*************Non - Primitive DataTypes***************/

let arr = [1,"Param",true,5.66]               
console.log(arr);
console.log(typeof arr);

let obj = {
    name:"Param Shah",
    age : 17
}

console.log(obj)
console.log(obj.name)
console.log(typeof obj)

const f1 = function(){
    console.log("Namaste Duniyaa")
}

f1()
console.log(typeof f1)
