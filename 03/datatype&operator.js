// datatype of javascript
let num = 10; // number 
console.log(typeof (num));
let float = 120.97;
console.log(typeof (float)); // number

let data = true;
console.log(typeof (data)); // boolean

let string = 'HelloWorld7898278#';
console.log(typeof (string)); // string

let unknowndata = undefined;
console.log(typeof (unknowndata)); // undefined
let empty = null;
console.log(typeof (empty)); // null is object
// no existance which is undefined and existance but no value is null
const person = {
    'name': 'Syed Talal Jilani',
    'role': 'Web Developer',
    "phone":1234567890,
    "islogin":false,
};

console.log(typeof (person)); // object

// lets play with object
console.log(person); // return object (json)

console.log(person.name) // Syed Talal Jilani

// update value of object 

person.name = 'New Name';
console.log(person) // name = New Name

// Destructuring

// const [name,role] = person;


// console.log(name); object is not iterable which means destructuring is not possible

// Operators 

// + (add)
// - (substract)
// * (Multiply)
// / (Integer Divide)   20/10 -> 2  20/6 -> 3.3
// % (Modulus Reminder) 20%10 -> 0  20%6 -> 2

// simple use of operators

console.log(10+10); // add

console.log(10-20); // sub

console.log(20*10); // multiplication

console.log(20/6); // Division 3.3 

console.log(20%6) // Modulus  -> 2

// interview question 

console.log(2+2) // 4

console.log('3'+'3'); // concat

console.log(3 + '3'); // 3 is int and 3 is concat as string

console.log(3 - '3'); // but in minus case string convert into integer

console.log('3' - '3'); // in this case 3 is convert into int

console.log(3 * '3'); // in multiply 3 string is convert into int -> 9

console.log('3'*'3'); // both convert into int -> 9

console.log(3 / '3'); // convert into int -> 1

console.log('3'/'3'); // convert into int -> 1

console.log('20'%6); // string convert into int ->2 

console.log('20'%'6'); // convert into int -> 2


// js -> 1 -> true 0 -> false
// proof of true and false 
console.log(true + 10); // 11

console.log(false +10); // 10 

console.log(true+true); // 2

console.log(false + false); // 0

console.log(true && true); // true and true = true

console.log(true && false ) // true and false = false

console.log(false && false); // false and false = false

console.log(true || true); // true or true = true 

console.log(true || false); //true or false = true