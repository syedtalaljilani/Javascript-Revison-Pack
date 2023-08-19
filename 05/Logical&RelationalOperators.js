// logical operators
// And(&&), Or(||) , Not(!)
var age =10;
var fname = 'Talal';
// add operator
if(age=10 && fname=='Talal'){
    console.log('User Exist')
}
// == is used to check value as string,boolean
// = is used in number datatype
if(age=10&&fname=='Ahmed'){
    console.log('Ahmed is User');
}else{
    console.log('both condition not true');
}
// in add case both condition is true.

//or operator
if(age=10||fname=='Ahmed'){
    console.log('age 10 is exist');
}
// one condition true if execute 
//Not with add operator
if(!(age==10)&&fname=='Talal'){
    console.log('User exist')
}
else{
    console.log('both condition is not correct');
}// both condition is not correct because not operator in this case means age not equal to 10 and fname = talal 
// not is used for reverse condition 
let number = prompt('Enter Your Number');
if(number%2==0){
    console.log('Even Number');
}
// this is reverse condition
if(!(number%2==0)){
    console.log('Odd Number');
}

// Relational Operators
// greater than(>) , less than(<) 
// find greater or less number
var number1,number2,options;
number1 = prompt('Enter First Number');
number2 = prompt('Enter Second Number');

//options = 1; greater number
options = 2; // lowest number
switch(options){
    case 1:{
        if(number1>number2){
            console.log(number1 +' '+ 'is greater');
        }
        else{
            console.log(number2 +' '+ 'is greater');
        }
    }
    break;
    case 2:{
        // number 1 and number 2 is not null
        if(number1<number2 && number1!=='' && number2!==''){
            console.log(number1 +' '+' is lowest number');
        }
        if(!(number1<number2 && number1!=='' && number2!=='')){
            console.log(number2+' '+' is lowest number');
        }
    }
    break;
}

// greater than equal to(>=) , less than  (<)
// age criteria
var userage = 20;

if(age>=10){
console.log('age is greater than 10');
}
if(age<=10){
    console.log('age is less than equal to 10');
}
