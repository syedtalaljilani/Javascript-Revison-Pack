//array
const student = ['Talal','Abdul Rehman','Ahsan'];
// array call
console.log(student); // array
// length 
console.log(student.length) // 3

// indexing  

console.log(student[0]);
// update array 
student[0] = 'bilal'
console.log(student) // first is bilal

// insert in array

student.push('wasay');
console.log(student)
// delete in array 

student.pop() // last remove
console.log(student)

// javascript have hetrogenous array
// can store multi type of values
const exparr = ['string',1,'😂',true,{name:'talal'}];
console.log(exparr)

// question of indexof missing 

const friend = ['Talal','Bilal','John'];

console.log(friend.indexOf('Talal')) // 0

console.log(friend.indexOf('Fatima')); // -1 because not exist


console.log(friend.reverse()); // reverse of array
