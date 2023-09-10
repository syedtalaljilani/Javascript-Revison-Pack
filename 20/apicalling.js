// https://www.weatherapi.com/
const btn = document.querySelector('button');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const lt = document.querySelector('#lt');
const region = document.querySelector('#regionname')

btn.addEventListener('click',async()=>{
    const input = document.querySelector('input').value;
    const value = input;
    if(input==''){
        alert('Enter City');
    }
    const result = await getData(value);
    city.innerHTML=`${result.location.name}`;
    temp.innerHTML=`${result.current.temp_c+' Deg'}`;
    lt.innerHTML=`${result.location.localtime}`;
    region.innerHTML=`${result.location.region}-${result.location.country}`;
});

async function getData(cityname){
    // axios method
  var res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=473709778eba4b4faed140237231009&q=${cityname}&aqi=yes`)
  return await res.data;
  // fetch
  //var res = await fetch(`http://api.weatherapi.com/v1/current.json?key=473709778eba4b4faed140237231009&q=${cityname}&aqi=yes`);
  // return await res.json();

}