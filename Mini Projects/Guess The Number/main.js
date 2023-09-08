const btn = document.querySelector('#check');
const btn2 = document.querySelector('#hint');
const hint = document.querySelector('.hint');
const winner = document.querySelector('.winner');
const loser = document.querySelector('.loser');
const pointval = document.querySelector('#points');
var guess='' ,prev=0,hintcount=0,points=0;
btn.addEventListener('click',()=>{
  localStorage.setItem('prev',prev);
  loser.style=`display:none`;
  winner.style=`display:none`;
  btn2.removeAttribute("disabled");
    var number = document.querySelector('#number').value;
    prev = localStorage.prev;
    if(number==''){
      alert('Enter Number');
    }
    guess = Math.round(Math.random()*(5-1) + 1);
    if(prev.length==0){
      if(guess==number){
        points=points+10;
        alert(points);
        pointval.innerHTML="Points: "+points;
        winner.style=`display:block;`;
        loser.style=`display:none;`;
        document.setItem('points',points);
      }
      if(guess!==number){
        loser.style=`display:block;`;
        winner.style=`display:none;`;
      }
    }
    else{
      if(prev==number){
        alert(number);
        winner.style=`display:block;`;
        loser.style=`display:none;`;
        if(hintcount==0 || hintcount==1){
          points=points+10;
          pointval.innerHTML="Points: "+points;
          document.setItem('points',points);  
        }
        else{
          points=points;
          pointval.innerHTML="Points: "+points;
          document.setItem('points',points);
        }
      }
      else{
        loser.style=`display:block;`;
        winner.style=`display:none;`;
      }
    }
});
btn2.addEventListener('click',()=>{
  loser.style=`display:none`;
  winner.style=`display:none`;
  btn2.setAttribute("disabled", "true");
  if(hintcount==0){
    guess = Math.round(Math.random()*(5-1) + 1);
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
    guess = Math.round(Math.random()*(5-1) + 1);
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



