// Loop -> repeat work
// For Loop -> if you know how many time loop runs
for(let i=1; i<=10; i++){
    // console.log('Hello'); // print 10 times
    console.log('number is '+i);
}// 1- 10
for(let i=10; i>=1; i--){
    console.log(i);
}// 10 - 1
// Do While Loop 
let count = 0;
do{
 count = count + 1;
 console.log('count'+count);
}while(count<=100) // 0 - 100
// While Loop -> condition is given but number of iteration is not given
let yourposition = 0;
let houseposition = 100;
while(yourposition != houseposition){
    yourposition=yourposition+1;
    console.log('Step taken'+yourposition);
} // 0 - 100 range

let age = 0;
while(age<70){
    age = age + 1;
    console.log('age'+age);
} // 0 - 70  // age<=70  0-71
let testage = 100;
while(testage>0){
    testage = testage - 1;
    console.log('age'+testage);
} // 100 - 0 


// guess the input using do while loop


let number = 40;
let guess = 0;
do{
    guess = parseInt(prompt('Guess a number 1-40 and 0 for I am Loser')); // string -> number
    if(guess == number){
        alert('You Win');
        break;
    }
}while(guess!=0)
