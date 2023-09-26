// higher order loops
// useful links-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// for of
 
const myArray=[1,2,"superman",true,null]
//for (const iterable of object) {} //object-> here means iterable
    

for (const val of myArray) {
    console.log(val);
}

const greetings="Hello world"
for (const greeting of greetings) {
    console.log(greeting);
    
}

// Maps
// 1) Key value pairs
// 2) Order is maintained
// 3) no duplicate values

const map=new Map()
/* set-> Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated. */
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
console.log(map);

for (const [key,value] of map) {
    console.log(`key:- ${key} value:- ${value}`);
}

// object iteration
// generally used forin loop for objects
const newObj={
    js:'javascript',
    cpp:'c++',
    py:'python',
    rb:'ruby'
}
for (const key in newObj) {
    console.log(`${key} shortcut is for ${newObj[key]}`);
}

const newArr=['a','b','c','d','e']
for (const key in newArr) {
   console.log(key,newArr[key]);
  

}

const coding=["js","ruby","java","python","c"]
/*
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

coding.forEach(element => {
    console.log(element);
});
coding.forEach(function(value,index,coding){
    console.log(value,index,coding)
})
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach