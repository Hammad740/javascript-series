/* Earier whenever there was a necessity of iterating over arrays, 6eveopers majority use6 for oops. But,
using oops can sometimes be sow and error-prone when we dea with arge compex arrays. So, forEach
was standardized with the reease of ECMAScript o (ESo) in w009.


The introduction of the forEach() method in ESo provided a more convenient and efficient way to iterate
over the eements of an array. It aowed deveopers to perform a specific function on each eement of an
array without having to manuay write for a loop. One more thing to note is that within forEach we cannot
use the oop contro statements such as break, and continue.
 
Syntax>
The following are the parameters of forEach() in Javascript
 callbackFunction: This argument contains the method that wi be caed for each array eement. It is
a mandatory parameter=
 item: the array item on iteration=
 index: This parameter is optiona and contains the index number of each eement=
 array: This parameter is optiona and contains the entire array on which the method is being appied.


The return vaue of this method is aways undefined  */
const coding=['js','python','css','cf+','ruby']

const values=coding.forEach(function(item,index) {
    console.log(item,index);
    // return item
    
});
console.log(values);

// foreach does not return anything whether you want or not


//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.




/*filter


As the name suggests the filter method is used to filter the data present in an array. On a daily basis in
every application, we use filtering. We filter the products in a shopping site based on criteria, we filter
the posts on any social media based on the date posted or based on the keywords. So, filtering the
data is one of the important task.


The filter method is used to create a new array whose items are the result of the filtering criteria o+ the
original array. Only those values which satisfy the given criteria are added to a new array, and that
array is returned. The original array does not get changed. 


Whenever the filter method is applied to an array, we pass a filter function to it. The filter function
iterates over all the elements of the given array and passes each element to the callback function. If
the callback function returns true, then the element is added to the result array otherwise it is ignored. */

const myNums=[1,2,3,4,5,6,7,8,9,10]
const ans=myNums.filter((item)=>item>4)
console.log(ans);

const books=[  {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "year": 1960
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "year": 1949
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Classic",
      "year": 1813
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Fiction",
      "year": 1920
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Coming-of-Age",
      "year": 1901
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "year": 1937
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "year": 1997
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "year": 1904
    },
    {
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "genre": "Dystopian",
      "year": 1932
    },
    {
      "title": "The Hunger Games",
      "author": "Suzanne Collins",
      "genre": "Dystopian",
      "year": 2008
    },
    {
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "genre": "Mystery",
      "year": 2003
    },
    {
      "title": "The Road",
      "author": "Cormac McCarthy",
      "genre": "Post-Apocalyptic",
      "year": 2006
    },
    {
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "genre": "Gothic",
      "year": 1818
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Adventure",
      "year": 1988
    },
    {
      "title": "A Game of Thrones",
      "author": "George R.R. Martin",
      "genre": "Fantasy",
      "year": 1996
    }]


  const userBooks1=books.filter((item)=>item.genre==='Fantasy')
  console.log(userBooks1);
  const userBooks2=books.filter((item)=>item.year>=1900 && item.genre=="Fantasy")
  console.log(userBooks2);

  const newArr=['cat','dog',true,1]
  let answer=newArr.map((item,index)=>{
   const val=`the value at ${index} is ${item}`
   return val;
  }
  )
  console.log(answer);

// https://www.w3schools.com/jsref/jsref_map.asp
//A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
//Calls a defined callback function on each element of an array, and returns an array that contains the results.

//// chaining
// whenever chaining is there the result is passed into another function

const newNums=[10,11,12,13,14,1,16,17]
const ans2=newNums.map((value)=>value*10).map((value)=>value+1).filter((value)=>value>140)
console.log(ans2);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/*
As the name suggests the reduce method reduces the array values to a single value
 The reduce() method runs a reducer function on each array item and returns a single output result7 The input array can have
numbers, strings, or an ob9ect7
Featres of redcex
> The reducer function passed aill be applied to all the items in the array8
> The result will be a single value accumulated on passing all the array items to the reducer function8
> The reduce method is not valid for empty arrays.
> The reduce method doesn’t change the original array on ahich the reduce method is appliedf
Syntax:
The parameters accepted
> accumulator It accumulates the initial value and reducer function’s return values.
> currentValue It is a required parameter and is used to specify the value of the current element.
> currentIndex It is an optional parameter and is used to specify the array index of the current element.
> array It is an optional parameter and is used to specify the array the current element belongs to.
. initialValue It is used to specify the value to be passed to the function as the initial valuef
Let’s lok at the implementation of reduce method7 The simplest example to demonstrate the use of reduce
function is by finding the sum of all elements in an array7
// Syntax

array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
// Find the sum of all elements in an array?

// Given Array


let arr = [1, 2, 44, 67, 89]
// Find the sum of all elements in an array?


// Given Array

let arr = [1, 2, 44, 67, 89];


// Apply reduce method

let result = arr.reduce((acc, curr) => acc + curr, 0);


// Print the result to the console.console.log(result);
Full Stack Web Development
We are passing in a callback function as the reduce function (acc, curr) => acc + curr, which takes in the
accumulator and current value as arguments, and adds the current value to the accumulator. We have also
passed in the initial value as 0, which is the starting value of the accumulator.


Note: If the initial value is not passed to the reduce method, the first item in the sequence is used as the initial
value and the operation starts from the second item in the sequence. If the sequence is empty, a TypeError is
raised. 


The reduce method iterates through the array and for each element, it applies the callback function and
updates the accumulator, adding the current value to the accumulator and storing the result in the
accumulator


After iterating through the entire array, the final value of the accumulator is returned, which is the sum of all
elements in the array */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10
