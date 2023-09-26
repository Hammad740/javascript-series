const tinderUser1=new Object()
const tinderUser2={}
console.log(tinderUser1,tinderUser2);//empty objects

tinderUser2.id=1;
tinderUser2.name="John";
tinderUser2.isLoggedIn=false;
// console.log(tinderUser2)
const regularUser={
    email:"some@gmail.com",
    fullname:{
        firstname:"Mohammad",
        middlename:"Hammad",
        lastname:"Ansari"
    },
    id:2
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.middlename);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const newobj1={obj1,obj2}
console.log(newobj1);
const newobj2=Object.assign({},obj1,obj2) //{} is target, rest all are source from which data is copying to the empty object target
/*Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. */
console.log(newobj2);
const newobj3={...obj1,...obj2}
console.log(newobj3);





console.log(tinderUser2);
console.log(Object.keys(tinderUser2)); //returns an array
console.log(Object.values(tinderUser2));//returns an array
console.log(Object.entries(tinderUser2)); //Returns an array of key/values of the enumerable properties of an object
console.log(Object.hasOwnProperty("isLoggenIn"));
