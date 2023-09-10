const layoutbtn = document.querySelector('#layout');
layoutbtn.addEventListener('click',()=>{

    var secondops = document.querySelector('.secondaryoptions');
    var widthinp = document.createElement('input');
    widthinp.setAttribute('placeholder','Width');
    widthinp.setAttribute('type','number');
    widthinp.classList.add('widthinp');
    secondops.appendChild(widthinp);
    var heightinp = document.createElement('input');
    heightinp.setAttribute('placeholder','Height');
    heightinp.classList.add('heightinp');
    secondops.appendChild(heightinp);
    var rec = document.createElement('button');
    rec.innerText='Rectangle';
    rec.classList.add('rec');
    secondops.appendChild(rec);
    var Rounded = document.createElement('button');
    Rounded.innerText='Rounded';
    Rounded.classList.add('rounded');
    secondops.appendChild(Rounded);
    layoutbtn.setAttribute('disabled','true');
    const recbtn = document.querySelector('.rec');
    recbtn.addEventListener('click',()=>{
       const width = document.querySelector('.widthinp');
        alert(width.ariaValueNow);
    });
    const roundedbtn = document.querySelector('.rounded');
    roundedbtn.addEventListener('click',()=>{

    });
});
