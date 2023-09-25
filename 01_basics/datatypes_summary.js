// PRIMITIVE 
// 7 TYPES : String,Number,Boolean,null,undefined,Symbol,BigInt


// NON-PRIMITIVE or REFERENCE 
// Array,Objects,Functions


//Js is dynamically and weakly typed language

/*
The code you write is usually converted into some other form that a computer knows how to run. This process is called compilation, and the period of time this happens is called "compile time".

After compilation is over, the program is launched, and the period it's running is called "runtime".

Statically typed languages check the types and look for type errors during compile time.

Dynamically typed languages check the types and look for type errors during runtime.

Another way to think about it: static typing means checking the types before running the program; dynamic typing means checking the types while running the program.
*/

/*
JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

*/

/*
JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421


*/


const heros=["shaktiman","nagaraja","doga"]
let myObj={
    name:"hammad",
    age:22
}
const myFunction=function(){
    console.log("hello js");
}
myFunction()
console.log(typeof myFunction);
//object function it is usually called

// reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null


///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Stack(primitive),Heap(Non-primitive)


In Stack memory a copy of data is given.
In Heap memory original reference of data is given
*/