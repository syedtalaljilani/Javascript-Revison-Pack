// composition (combine tasks)

function sum(a,b){
    return a+b;
}
function square(c){
   return c*c;
}

// perform two task togather 

function square_and_sum(){
  return square(sum(1,2))
}
console.log(square_and_sum())

// generic function 

function sqaure_and_sum(fn1,fn2){
    return function (a,b){
         return fn1(fn2(a,b))
    }
}

// fn1 -> sqaure fn2 -> add
const task = sqaure_and_sum(square,sum);
console.log(task(1,1));