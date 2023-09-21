// IIFE (Immediately Invoked Function expression)
(function add(a,b){
     console.log(a+b);
})(12,20); // one the spot calling


(function sayhello(){
    console.log('Hello')
})();

// for variable 

(function sayhello(){
    let age;
    console.log(age)
})(12);

// api calling 

let data = (async ()=> await fetch())()

// private and public variable & function

// show balance on withdraw

const atm = (function(initialbalance){
let balance = initialbalance;
function Withdraw(){
    if(amt>balance){
        console.log('Are You Kidding');
    }else{
        balance-=amt;
        console.log('Remaining Balance'+balance);
    }
    return {Withdraw}
}
})
const talalacc = atm(1000); // create account

talalacc.Withdraw(200);
