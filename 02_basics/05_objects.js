// object destructuring
/*The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. */
const course={
    coursename:"js in hind",
    price:999,
    courseinstructor:"Hitesh Choudhary"
}
// const {courseinstructor}=course
// console.log(courseinstructor)
const {courseinstructor:teacher}=course
console.log(teacher)

///++++++++++++++++++for learing JSON refer this++++++++++++++++++
// https://www.w3schools.com/js/js_json_intro.asp