// create element 
function addlist(data){
    var listcontainer = document.querySelector('.list');
    var listtext = document.createTextNode(data);
    var list = document.createElement('li');
    list.appendChild(listtext);
    listcontainer.appendChild(list);
  }
  addlist('JavaScript');
  addlist('Python');

// edit element 

function editlist(data){
    var newlist = document.createElement('li');
    var listtext = document.createTextNode(data);
    var listchild = document.querySelector('li:nth-child(2)');
    newlist.appendChild(listtext);
    listchild.replaceWith(newlist);
}
editlist('MongoDb');

// delete element

const lastchild = document.querySelector('li:last-child');
lastchild.remove();