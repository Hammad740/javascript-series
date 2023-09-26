//singleto
//Object.create

/*The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

Description */
//object literals
const mySym=Symbol("key1")
const jsUser={
    id:1,
    [mySym]:"key1",
    name:"Hammad",
    age:22,
    location:"Amroha",
    isLoggedIn:true,
    "email":"hammadtest@gamil.com"
}
// square notaion and dot operator method for objects
console.log(jsUser.name);
console.log(jsUser["isLoggedIn"]);
console.log(jsUser[mySym]); //symbol syntax
jsUser.email="hammadchatgpt@gmail.com"
console.log(jsUser);
// Object.freeze(jsUser);/*Object on which to lock the attributes.
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties. */
console.log(jsUser);
jsUser.greeting=function () {
    console.log(`hello jsUser,${this.name} good morning`);
    
}
console.log(jsUser);
console.log(jsUser.greeting());