// variable is used to store data 
var age = 12; // int type
// var is variable value 
var age='12 Year'; // String Type

var answer = true; // boolean type

// let is not initialize again for example 

let score = 10;

// let score = 20; // cannot redeclared and let is block level 
if(true){
    let letdata = 300;
}
//console.log(letdata) // letdata is not defined
const data = 'unchange';
console.log(data);
// data = 'change'; // cannot change value

// javascript is datatype loose language ha 
// in other language we assign int age = 10; but in javascript we use var age =10;


// name conversion 
// firstname (lowercase)
// first_name (snakecase)
// FirstName (Pascal Case) (Used for Classes)
// firstName (cammel Case) (Used For Variables)7


// var -> global -> changeable
// let -> local (block level) -> not reassign same name
// const -> local -> fixed value