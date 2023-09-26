function sayHello() {
    console.log("HAMMAD");
    console.log("HAMMAD");
    console.log("HAMMAD");
    console.log("HAMMAD");
    console.log("HAMMAD");
}

sayHello()
sayHello()

function sum1(n1,n2) { // parameters
    console.log(n1+n2);
}
const result1=sum1(34,56) ///arguments
console.log("Result",result1)


function sum2(n1,n2) { // parameters
    return n1+n2;
}
const result2=sum2(34,56) ///arguments
console.log("Result",result2)

function isLoggedIn(username="abc") {
    if (username===undefined) {
        console.log(`Please enter a valid username in argument`)
    }
    return `${username} just logged in`
}
// console.log(isLoggedIn("Hammad"));
console.log(isLoggedIn());

function calculateCartPrice(...num1) { //rest operator
    return num1;
}
console.log(calculateCartPrice(200,345,69,100));

const user={
    name:"Hammad",
    age:22
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and his age is ${anyobject.age}`);
    
}
handleObject(user)