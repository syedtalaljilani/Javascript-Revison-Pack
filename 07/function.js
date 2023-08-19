// function 
// block of code

function sayHello(){
    console.log('Function hello');
}
// calling of function
sayHello();

// add two numbers
// parameters & argument

function add(num1,num2)// argument
{
  return num1+num2;
}
let sum = add(5,10);// parameters
console.log(sum); 

// unlimited arguments 

function addnumber(){
    let ans = 0;
    for(let i=0; i<arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans
}

let result = addnumber(10,65,54,65,230,56);
console.log(result);

// spread operator

function addnumberV2(...numbers){
    let ans = 0;
    for(let i=0; i< numbers.length; i++){
        ans = ans + numbers[i];
    }
    return ans
}
let calcadd = addnumberV2(10,10,65,54);
console.log(calcadd);