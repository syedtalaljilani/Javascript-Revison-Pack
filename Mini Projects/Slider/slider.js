const next = document.querySelector('#Next')
var index =0;
next.addEventListener('click',()=>{
    const imgcontainer1 = document.querySelector('#imgcontainer1')
    const imgcontainer2 = document.querySelector('#imgcontainer2');
    const imgcontainer3 = document.querySelector('#imgcontainer3')
    if(imgcontainer1.classList.contains('grid')){
        imgcontainer1.classList.replace('grid','hidden')
        imgcontainer2.classList.replace('hidden','grid')
        index=index+1;
       
    }else if(imgcontainer2.classList.contains('grid')){
       imgcontainer2.classList.replace('grid','hidden')
       imgcontainer3.classList.replace('hidden','grid')
       index=index+1;   
    }
    
})
const prev = document.querySelector('#Previous')
prev.addEventListener('click',()=>{
    const imgcontainer1 = document.querySelector('#imgcontainer1')
    const imgcontainer2 = document.querySelector('#imgcontainer2')
    const imgcontainer3 = document.querySelector('#imgcontainer3')
    if(index==0){
        prev.setAttribute('disable',true)
    }else if(index==1){
        imgcontainer1.classList.replace('hidden','grid')
        imgcontainer2.classList.replace('grid','hidden')
        index =index - 1;
        
    }else if(index==2){
        imgcontainer2.classList.replace('hidden','grid')
        imgcontainer3.classList.replace('grid','hidden')
        index =index - 1;
    }
})