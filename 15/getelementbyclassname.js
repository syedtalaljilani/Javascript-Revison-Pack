let cname = document.getElementsByClassName('data');
for (cname of cname){
    console.log(cname.innerHTML);
}
console.log(cname.className='test') // test

// dark mode and light mode
let body = document.querySelector('body');
var classname = 'darkmode';
if(classname=='lightmode'){
  body.className='lightmode';
}
if(classname=='darkmode'){
    body.clasName='darkmode'
}



