// indexedDB
// navigator
// sessiondb 
// localstorage

// localstorage 

var age = 20;
// insertion(Create)
localStorage.setItem('age',age);
// view (Read)
console.log('View'+localStorage.getItem('age'));
// update
age =40;
localStorage.setItem('prev',age);
console.log('Update'+localStorage.getItem('age'));
// Delete
localStorage.removeItem('age')

var arr =[1,3,4,5];
// insert array
localStorage.setItem('arr',arr);
console.log(localStorage.getItem('arr')); // 1234
// update one value 
arr.push(10);

localStorage.setItem('arr',arr);
console.log(localStorage.getItem('arr'));
// deletion
arr.pop();

// navigator to get location 
async function getdata(lat,long){
   const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=473709778eba4b4faed140237231009&q=${lat},${long}&aqi=yes`);
   return await res.json();
}
async function getlocation (position){
   const result = await getdata(position.coords.latitude,position.coords.longitute)
   console.log(result);
}
function error(){
    console.log('Something Wrong');
}
const btn = document.querySelector('#btn');
btn.addEventListener('click',async ()=>{
   navigator.geolocation.getCurrentPosition(getlocation,error);
});