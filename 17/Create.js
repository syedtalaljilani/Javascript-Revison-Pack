// clean the code 
const body = document.querySelector('body');
body.innerHTML='';

const div = document.createElement('div');
console.log(div);
div.className='main';
div.id=Math.round(Math.random()*10 +1);
console.log(div.id);
div.setAttribute('title','Generated Div');
console.log(div)
div.style=`background-color:purple; width:300px height:300px`;
// div.innerText='Syed Talal Jilani';
const textnode = document.createTextNode('Syed Talal Jilani');
div.appendChild(textnode);
body.appendChild(div);
