

let content = document.getElementById('root');

/* rutas */
 async function router(router){
    content.innerHTML = '';
   
    switch(router){
        case '#/':{

            return content.appendChild(Home());
        }
        
           
        case '#/posts':{
            return content.appendChild(await post());
        }
            
        case '#/products':
            return content.appendChild(products());
        default:
            return console.log('404!!');

    }
}
router(window.location.hash)
window.addEventListener('hashchange', ()=>{
    
    router(window.location.hash)
});
/* HOME */
function Home() {
    const views = `
        <h1>Hola KOSO</h1>
        <p>Hola KOSO estoy usando SPA</p>
        
        <button id="keso">
        pa saber

        </button>
    `;

    const divElement = document.createElement('div');
    divElement.classList = 'text'
    divElement.innerHTML = views;

    const keso = divElement.querySelector('#keso');
    keso.addEventListener('click', () =>{
        alert('Te pasas keso')
    }) 

    return divElement;
}

/* post */


async function post(){
    const getPosts = async () =>{
        const response =await fetch('https://jsonplaceholder.typicode.com/comments');
        return await response.json();
    }
    const views =`
    <h1 class="text-center textr-white">Comenta Keso:<span id="total"></span></h1>
    <p class="text-center textr-white">Hola no me tocaba</p>
    <ul class="list-group" id="posts" style="height: 70vh; overflow:auto;"></ul>
    `;
    const divElement =document.createElement('div');
    divElement.classList = 'tocaba'
    divElement.innerHTML = views;

    const posts = await getPosts();
    console.log(posts);
    const postsElement = divElement.querySelector('#posts');
    let total = divElement.querySelector('#total')
    total.innerHTML = posts.length;

     posts.forEach(post =>{
        postsElement.innerHTML += `
        <li class="list-group-item border-prymary bg-dark text-white">
            <h5>${post.name}</h5>
            <p>${post.email}</p>
            <p>${post.body}</p>
        </li>
        `
     })

    return divElement;
}
function products(){
    const views =`
    <div class="card" style="width: 18rem;">
    <img src="views/keso.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">El mero Kesabroso.</p>
    </div>
  </div>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return divElement;
}