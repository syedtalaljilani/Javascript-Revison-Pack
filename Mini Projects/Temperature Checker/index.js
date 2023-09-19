
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    const cityname = document.querySelector('#input');
    async function getdata(cityname){
        const url = `https://api.weatherapi.com/v1/current.json?key=473709778eba4b4faed140237231009&q=${cityname}&aqi=yes`
        const response = await fetch(url);
        var res = await response.json()
        // console.log(res.current.temp_c);
        const temp = document.querySelector('#temp');
        temp.innerHTML=res.current.temp_c+'°';
    }
    getdata(cityname.value);
    
})

