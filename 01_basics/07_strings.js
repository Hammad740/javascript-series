// old way of concatenating
const firstName="Mohammad";
const secondName="Hammad";
const thirdName="Ansari";
console.log(firstName+" "+secondName+" "+thirdName);

// modern way
//using backticks ``
console.log(` Hello my name is ${firstName} ${secondName} ${thirdName}`);

// see differnt methods in console,basically a string object is created using this way
const idName=new String("Hammad");
console.log(idName);
console.log(idName[0]);
console.log(idName.__proto__);
console.log(idName.length);
console.log(idName.toLocaleLowerCase());
console.log(idName.toLocaleUpperCase());
console.log(idName.charAt(3));
//these methods doesnot change the original string because they are created int  the stack memory
console.log(idName.substring(0,3));
console.log(idName.slice(0,4));
console.log(idName.slice(-1,0));
const newString="  hammad  ";
console.log(newString.trim());
// reference for strings
//+++++ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods






