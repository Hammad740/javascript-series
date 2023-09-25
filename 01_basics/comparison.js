// basic conversion
// console.log(2>1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<1);
// console.log(2!=1);

console.log("2">1);
// these type of conversion gives irregular results,it's better to avoid them

console.log(null>0);
console.log(null==0);
console.log(null>=0);

/*the reason is that eqaulity check== and comparisons >< >=<= work differently 
comparison convert null to a number treating it as 0
that's why 0>=null  is true and null>0 is false
*/

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

/* === strictly check the data type also */
console.log("2"===2);