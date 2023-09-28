const btnEl=document.getElementById("btn")
const birhtdayEl=document.getElementById("birthday")
const resultEl=document.getElementById("result")
btnEl.addEventListener('click',calculateAge)
//
function getAge(birthdayValue){
    const currentDate=new Date();
    const birthdayDate=new Date(birthdayValue);
    const age=currentDate.getFullYear()-birthdayDate.getFullYear();
    if(age>0){
    return age;
    }
    else{
        alert("Please enter a valid year")
    }
}
function calculateAge(){
    const birthdayValue=birhtdayEl.value;
    if(birthdayValue===''){
        alert("Please enter your birthday")
    }
    else{
        const age=getAge(birthdayValue)
        resultEl.innerText=`Your age is ${age} ${age>1?"years":"year"} old`
    }

}
//