let response = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(response); // promise with pending status

// async await

async function getdata(){
  let serverres = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(await serverres.json());//array of response
}
getdata();
// console.log(getdata) //promise