// Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate=new Date()
console.log(myDate);
console.log(myDate.getMonth());
console.log(myDate.getDay());

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
// month is started from 0 in js
let myCreatedDate=new Date(2023,0,25)
console.log(myCreatedDate);
console.log(myCreatedDate.toString());
//"yy-dd-mm"
let myCreatedDate1=new Date("2023-03-21");
console.log(myCreatedDate1.toLocaleString());

// In india we follow "mm-dd-yy"

let myTimeStamp=Date.now()
console.log(myTimeStamp);// we get current date in ms
console.log(Math.floor(myTimeStamp/1000));//in s






