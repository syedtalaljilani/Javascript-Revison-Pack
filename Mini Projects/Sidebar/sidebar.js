const btn = document.querySelector('#sidebar')

btn.addEventListener('click',()=>{
    
    const sidebarcontainer = document.querySelector('#sidebarcontainer')
    sidebarcontainer.style='width:100px'
    btn.classList.add('left-24')
    if(btn.classList.contains('left-56')){
        sidebarcontainer.style='width:100px'
    btn.classList.add('left-24')
    btn.classList.remove('left-56')
    }else
    if(btn.classList.contains('left-24')){
        sidebarcontainer.style='width:250px'
        btn.classList.add('left-56')
        btn.classList.remove('left-24')
    }

    
})