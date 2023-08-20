// query selector
const bodyelem = document.querySelector('body');

//console.log(bodyelem);

// website hack 

//bodyelem.innerHTML='<h1>Hacked</h1>';

// query selector get first element

// const divelem = document.querySelector('div');

// divelem.innerHTML='<h1>Programmer 1 Hacked</h1>'
// only first child effect

const title = document.querySelector('.title');
title.innerHTML=''; // remove title

const subtitle = document.querySelector('#subtitle');
subtitle.innerHTML=''; // remove subtitle

console.log(bodyelem.children); // child of body

console.log(bodyelem.parentElement) // parent element of body

