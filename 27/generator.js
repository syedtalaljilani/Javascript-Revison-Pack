// iteration 

// for (let i =0;i<=10; i++){
//     console.log(i)
// }

// for (val of [1,2,3,4,5]){
//     console.log(val)
// }

// own datatype , tree iteration 
// we are own iterator function

function makeiterator(start=0,end=Infinity,step=1){
  let nextStart = start;
  let interationcount = 0;
  return {
    next(){
       let result
       if(interationcount<end){
        result ={value:nextStart,done:false}

          // value is 0 and send to user and done false means value is remaining
          nextStart = nextStart+step;
          interationcount++
          return result;
       }
       return{ value:nextStart,done:true}
    }
  }
}

const myiterator = makeiterator(1,10,2)
let result = myiterator.next()

while(!result.done){
    console.log(result.value);
    result = myiterator.next()
}

// using genrator function 

function* makeiteratorv2(){
   yield 2;
   yield 4;
   yield 6;
   yield 8;
   yield 10;
}
const even = makeiteratorv2();

for (let v of makeiteratorv2){
    console.log(v);
}