const marvelHeros=["thor","ironman","antman"];
const dcHeros=["superman","greenlanter","batman"];
// marvelHeros.push(dcHeros);
//console.log(marvelHeros);// we get array inside an array in this case and not both get merged arrays

console.log(marvelHeros.concat(dcHeros));
/*Combines two or more arrays. This method returns a new array without modifying any existing arrays.

@param items — Additional arrays and/or items to add to the end of the array. */
console.log((marvelHeros));

// spread operator
/*
The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list
*/
const allSuperheros=[...dcHeros,...marvelHeros]
console.log(allSuperheros);

const another_array=[1,2,4,[45,66,[34,10]],[6,8,9]];
console.log(another_array.flat(Infinity));
/*Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

@param depth — The maximum recursion depth */

console.log(Array.isArray("hammad"));
console.log(Array.from("hammad"));
console.log(Array.from({name:"hammad"}));
// interesting
/*
The Array.from() method in JavaScript is typically used to create a new array from an iterable object or an array-like object. However, the object you provided, {name: "hammad"}, is not iterable, so using Array.from() on it will not result in an array.

Here's an example of how Array.from() can be used with an iterable, such as a string or an array:

javascript
Copy code
// Creating an array from a string (iterable)
const str = "Hello";
const strArray = Array.from(str);
console.log(strArray); // Output: [ "H", "e", "l", "l", "o" ]

// Creating an array from an array-like object (e.g., NodeList)
const nodeList = document.querySelectorAll("p");
const nodeArray = Array.from(nodeList);
console.log(nodeArray); // Output: [ <p>...</p>, <p>...</p>, ... ]
If you want to create an array from the object {name: "hammad"}, you would need to specify how you want to extract the values from the object, as it doesn't have a built-in iterable structure. For example:

javascript
Copy code
const obj = { name: "hammad" };
const arr = Array.from(Object.values(obj));
console.log(arr); // Output: [ "hammad" ]
In this case, we used Object.values(obj) to extract the values from the object and create an array containing those values.




 */


let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3));
/*Returns a new array from a set of elements.

@param items — A set of elements to include in the new array object. */