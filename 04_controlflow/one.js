// if
const isLoggedIn=true
if (isLoggedIn) {
    console.log("this is if statement");
    
}
// < > <= >= !=
/*
Triple equals (===), also referred to as "strict equality", works similarly to how double equals (==) works, with one important difference: it does not convert the types of the operands before comparing.
While comparing the variables, it first checks if the types differ. If they do, it returns false. If the types match, then it checks for the value. If the values are same and are not numbers, it returns true.
*/
/*
Double equals (==) is often referred to as 'loose equality' because it performs type coercion before making any comparison.
This means that if the datatypes of the operands we are comparing are different, then the JavaScript Engine automatically converts one of the operands to be the same as the other one in order to make the comparison possible.
*/
if (2=="2") {
    console.log("executed");
    
}
if (2==='2') {
    console.log("executed");
    
}
else{
    console.log("not executed");
}

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
    
}

///+++++++++important++++++++

//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing