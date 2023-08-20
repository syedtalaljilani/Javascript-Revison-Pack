// High order function and callback

function add(a,b){
    console.log(a+b);
}

add(12,90);

// add callback 

function addV2(a,b,cb){
    let result = a+b;
    cb(result); // callback and addv2 is high order function
}
addV2(5,3,function(val){
    console.log(val)
});

function addV3(a,b,cb){
    let result = a+b;
    cb(result);
}
function showresult(val){
    console.log(val)
}
addV3(3,5,showresult);

// result pass to cb and cb is a argument of show result 
// value pass to show result -> show result function console value.

function addV4(a,b,cb){
    let result = a+b;
    cb(result);
}

addV4(3,6,(val)=>{console.log(val)}); // arrow function
function addV5(a,b,cb){
    let result = a+b;
    cb(result);
}
addV5(4,5,val=>{console.log(val)});

// return function  from function 


function showdata (){
    return ()=>console.log('inner function')
}
let showdatafunction = showdata(); 
showdatafunction();
