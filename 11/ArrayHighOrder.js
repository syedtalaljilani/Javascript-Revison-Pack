// Array High Order Function

// For Each -> reference callback

const student = ['Syed Talal Jilani','Ahmed','Bilal','Abdullah'];

for (let i=0; i<student.length; i++){
    console.log(student[i]);
} // print array

function printarray(n){
    console.log(n);
}
student.forEach(printarray); // we give callback function to for each
//for each is like for loop
// display array 

// one liner function 

student.forEach((n)=>{
    console.log('Arrow Array '+n);
})// n = 0 -> 0 index console and so on...

// map function 
// map function new array return 
// for each no return

student.map((val)=>{
    console.log('Using Map '+val);
})

// create a new from previous array and double the value
// using map
const numbers = [1,2,3,4,5,6,7];
console.log(numbers);

const doublenumbers = numbers.map((val)=>{
    return val*2;
});
console.log(doublenumbers);
// using for each 

const newarr =[]; // first step create array
numbers.forEach((nums)=>{
    newarr.push(nums*2);
})
console.log(newarr);

// find 


let ans =numbers.find((num)=>num==7);
let ans1 =numbers.find((num)=>num==60);
console.log(ans); // 7
console.log(ans1); // undefined not found

// find index 

let index = numbers.findIndex((num)=>num==2);
console.log(index); // index -1 not exist for 200 and for 2 is index 1
const include=numbers.includes(4);
console.log(include); // true

// filter 


const filterarray = numbers.filter(num=>num>5);
console.log(filterarray);

// slice cut a piece of array 

const slicearray = numbers.slice(0,5); //index 0 to 5
console.log(slicearray); // cut piece of array
console.log(numbers); // no element remove

const splicearray = numbers.splice(0,5);
console.log(splicearray); // display all remove element
console.log(numbers); // [6,7] remaining remove
