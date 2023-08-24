// event listener
const data = document.getElementById('data');
const body = document.querySelector('body');
const btn = document.querySelector('button');
function modechange (){
    if(btn.innerHTML=='Dark Mode🌛'){
        body.className='darkmode';
        data.innerText='Dark Mode';
        btn.innerHTML='Light Mode🌞';
        btn.style=`background-color:white; color:black;`;
    }
    else{
        body.className='lightmode';
        data.innerText='Light Mode';
        btn.innerHTML='Dark Mode🌛';
        btn.style=`background-color:bluevoilet; color:white;`;
    }
}
