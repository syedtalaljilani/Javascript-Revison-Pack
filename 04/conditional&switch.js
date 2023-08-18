// Voting Detection System using If condition
let age = prompt('Enter Your Age'); 
if(age>=18){
    console.log('You Can Vote');
}
else{
    console.log("You Can't Vote");
}

// ternary operator 
// Even or Odd Detector
let num = prompt('Enter Your Number');
num %2==0?console.log('Number is Even'):console.log('Number is Odd');

// Swtich 
// Hotel Menu

var option = 2;

switch(option){
    case 1:{
        console.log('Burger');
    }
    break;
    case 2:{
        console.log('Pizza');
    }
    break;
    default:{console.log('Invalid Options')}
}