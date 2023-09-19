// Curry (Function return Function)
// if all variable is avaiable then perform sum using function
function sum(a){
    return function(b){
         return function (c){
               return a+b+c;
         }
    }
}

// calling 
result = sum(2)(3)(10)
console.log(result);

// send email 

function sendautoemail(to){
   return function (subject){
           return function(body){
               return console.log(`sending email to ${to} and subject is ${subject} and body of email is ${body}`);
           }
   }
}

// use 

let step1 = sendautoemail('Syedtalaljilani.dev@gmail.com')
let step2 = step1('Welcome to Your New Job..')
let step3 = step2('Hello My name is Max ')
// console show output