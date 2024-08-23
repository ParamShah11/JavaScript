const name = "Param"
const age = 17

// Use Of Tempelate Literals
console.log(`Hello my name is ${name} and i am ${age} years old`)

let name1 = "Param"
let sname = " Shah"
console.log(name1[0])
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.concat(sname));
console.log(name1.repeat(5));
console.log(name1.slice(0,4)); // doesn't include last number i.e character. We can't include negative values
console.log(name1.substring(-1,5)) // We can include negative values

let name2 = "      Hiii      "
console.log(name2.trim())

const text = "Hello Duniyaa!!"
console.log(text.replace('Duniyaa','World'));

const num = 1;
const Padded = num.toString().padStart(2, "1");
console.log(Padded); 

const text1 = "My Name Is Param Shah";
console.log(text1.split(" ").join("-"));


