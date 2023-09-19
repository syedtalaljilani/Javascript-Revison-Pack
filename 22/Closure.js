// settimeout --> one time 
// setinterval --> repeat

// setTimeout(()=>{
//     console.log('Hello');
// },1000); // 1sec delay then hello
// var i=0;
// setInterval(()=>{
//     i++
//     console.log(i)
// }) // infinity
function clockandlocation(){
    let  data = new Date();
let time = `${data.toLocaleTimeString()}`

var clock = document.querySelector('#Time');
var timenode = document.createTextNode(time).nodeValue;
clock.innerText=timenode;
}
// setTimeout(clock,1000); one sec delay 

setInterval(clockandlocation,1000);