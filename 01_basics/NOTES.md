# Difference between Methods and Functions in JavaScript

## Table of Contents
- [Introduction](#introduction)
- [JavaScript Functions](#javascript-functions)
  - [Syntax](#syntax)
  - [Features](#features)
  - [Example](#example)
- [JavaScript Methods](#javascript-methods)
  - [Syntax](#syntax-1)
  - [Features](#features-1)
  - [Example](#example-1)
- [Difference Between Function and Method](#difference-between-function-and-method)

## Introduction
In this article, we will explore the distinction between JavaScript Methods and Functions. Both methods and functions are essential components of JavaScript programming, but they serve different purposes and have unique characteristics.

## JavaScript Functions
A JavaScript function is a block of code written to perform specific tasks. Functions are defined using the `function` keyword, followed by a name and optional parameters. The body of the function is enclosed in curly braces.

### Syntax
```javascript
function functionName(parameters) {
    // Content
}
```

### Features
- Functions are executed when they are called or invoked.
- The function name can contain letters, digits, dollar signs, and underscores.
- Parameters are listed inside round parentheses after the function name.
- Arguments are the values a function receives when it is invoked.
- When the control reaches the `return` statement, JavaScript stops executing, and the value is returned to the caller.

### Example
Below is an example of a function that adds two numbers:

```javascript
function add(a, b) {
    let sum = a + b;
    return sum;
}
console.log(add(1, 2)); // Output: 3
```

## JavaScript Methods
A JavaScript method is a property of an object that contains a function definition. Methods are functions stored as object properties and can be accessed using dot notation.

### Syntax
```javascript
object = {
    methodName: function() {
        // Content
    }
};

object.methodName()
```

### Features
- Methods are actions that can be performed on objects.
- Objects can be called without using parentheses when invoking their methods.
- The `this` keyword refers to the owner object within a method.

### Example
The following example demonstrates a method invoked on an object called `employee`:

```javascript
let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works in the " +
            this.department + " department.";
    }
};
console.log(employee.details()); // Output: Rahul works in the sales department.
```

## Difference Between Function and Method
| Function                                  | Method                                    |
| ---------------------------------------- | ----------------------------------------- |
| A JavaScript function is a block of code designed to perform a particular task. | The JavaScript method is an object property that has a function value. |
| Syntax of Function: <br> `function functionName(parameters) { // Content }` | Syntax of Method: <br> `object = { methodName: function() { // Content } }; object.methodName()` |
| A function can process data and may return data as a result. | A method operates on the data contained within a class or object. |
| Data passed to a function is explicit and passed as parameters. | A method implicitly operates on the object it belongs to. |
| A function exists independently. | A method is a function associated with an object property. |
| Functions are called directly by their name. | Methods are called using the object's name and the method name, using dot notation or square bracket notation. |
| Functions promote code reusability. | JavaScript includes some built-in methods, such as `parseInt()`. |
| Functions are invoked using the `()` operator. | Methods are invoked using the `objectName.methodName()` syntax. |

Understanding the difference between functions and methods is crucial for effective JavaScript programming, as it influences how you structure and use code in various contexts.