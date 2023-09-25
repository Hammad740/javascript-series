// array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArr1=[22,34,546,77,1,8];
console.log(myArr1);

//Array methods
const myArr2=new Array(1,2,3,4,5);
console.log(myArr2);
myArr2.push(6)/*
Appends new elements to the end of an array, and returns the new length of the array.

@param items — New elements to add to the array. */
console.log(myArr2);
myArr2.push(7)
console.log(myArr2);
myArr2.pop() /* Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.*/
console.log(myArr2);
myArr2.unshift(0);//Elements to insert at the start of the array.
console.log(myArr2);
myArr2.shift();//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr2);


console.log(myArr2.includes(9));//The element to search for.
//Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(myArr2.indexOf(4));/*he value to locate in the array.


Returns the index of the first occurrence of a value in an array, or -1 if it is not present. */

const newArr=myArr1.join()
/*Adds all the elements of an array into a string, separated by the specified separator string.

@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. */
console.log(newArr);

console.log('A',myArr1);
const myn1=myArr1.slice(1,3)//end is exclusive
console.log(myn1);
/*
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

@param start
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

@param end
The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
*/

console.log("B",myArr2);
const myn2=myArr2.splice(2,5);
console.log(myn2);
/*
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted. */


