const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to the website`)
       // this refers to the current context
       console.log(this);
    },
    age:22
}

user.welcomeMessage()
console.log(this); //empty object we will get in node environment
user.username="Hammad" //context is changed here
console.log(this); //empty object we will get in node environment
user.welcomeMessage()

// in browser we will get window object  

function chai1(){
    let username="hammad"
    console.log(this);
}
chai1()

const chai2=()=>{
    let username="hammad";
    console.log(this);
}
chai2()

const addTwo=(x,y)=>{
    return x+y //explicit return
}
console.log(addTwo(4,5));
const addThree=(q,w,e)=>(q+w+e) //implicit return 
console.log(addThree(34,56,88));

const obj=(n1,n2)=>({sum:n1+n2,difference:n1-n2}) // to return an object we need to put parenthesis
console.log(obj);

//+++++++++++++++++++IIFE+++++++++++++++++++
(function name () { //named iife
    console.log(`hello from iife`);
})();
/// to avoid global scope pollution we use iife

( // unnamed iife 
    (name)=> console.log(`DB connected to ${name} `)
)("Node.js");

//// important -> between any two iife always use ;