// Arrow Function
// syntax

const sayHello = ()=>{
    console.log('Arrow Function');
}
const addNumber=(a,b)=>{
    return a+b;
}
const addNumberV2=(a,b)=>a+b; // single statement

// const argument = () =>{
//     console.log(arguments);
// } // arguments is not defined in arrow function
const argument = (...nums) =>{
    // spread operator
    console.log(nums); // array of argument
}
// calling
const result1=addNumber(120,80);
const result2=addNumberV2(120,80);
console.log(result1);
console.log(result2);
sayHello();
argument(10,12,45,43,76);


// hoisting  -> for simple function not for arrow function
// simple function 
hello(); // you can call before function initialize
function hello(){
    console.log('hello');
}

// arrow function
// helloarrow() // lexical declaration can access before initialize
// const helloarrow = () =>{
//     console.log('hello')
// }

// this keyword

const obj = {
    value:20,
    myfunction:function(){
        console.log(this) // object
        console.log('value is '+this.value); // this scope is local and access obj
    }
}
obj.myfunction()

const obj2 ={
    'value':20,
     'myfunction': ()=>{
        console.log('value is' +this.value);
        console.log(this) // window
     }
}
obj2.myfunction() // undefined in this case this keyword scope is global and access full browser(windows)