const btn = document.querySelector('#check');
const btn2 = document.querySelector('#hint');
const hint = document.querySelector('.hint');
const winner = document.querySelector('.winner');
const loser = document.querySelector('.loser');
const pointval = document.querySelector('#points');
var guess='' ,prev=0,hintcount=0,points=0;
btn.addEventListener('click',()=>{
  loser.style=`display:none`;
  winner.style=`display:none`;
  btn2.removeAttribute("disabled");
    var number = document.querySelector('#number').value;
    if(number=='0'||number==''){
      alert('invalid');
    }else{
      guess = Math.round(Math.random()*(5-1) + 1);
      alert(guess);
      if(guess==number){
        alert('Win')
        points=points+10;
        pointval.innerHTML="Points: "+points;
      }else
      if(prev==number){
        alert('win');
        pointval.innerHTML="Points: "+points;
        prev=0;
        localStorage.setItem('prev',prev);
      }else
        {
        alert('lose');
      }
    }
    

    
});
btn2.addEventListener('click',()=>{
  loser.style=`display:none`;
  winner.style=`display:none`;
  btn2.setAttribute("disabled", "true");
  guess = Math.round(Math.random()*(5-1) + 1);
  if(hintcount==0){
    prev = guess;
    textnode = document.createTextNode=prev;
    hint.append('Guess Number is '+textnode);
    localStorage.setItem('prev',prev);
    hintcount=hintcount+1;
    localStorage.setItem('hintcount',hintcount);
  }else{
    if(points==0 && prev>0){
      document.body.innerHTML='<h1>Game Over</h1>';
    }else{
    prev = guess;
    textnode = document.createTextNode=prev;
    hint.innerHTML='';
    hint.append('Guess Number is '+textnode);
    localStorage.setItem('prev',prev);
    hintcount=hintcount+1;
    localStorage.setItem('hintcount',hintcount);
    points=points-2;
    pointval.innerHTML="Points: "+points;
    }
    document.setItem('points',points);
     
  }
});



