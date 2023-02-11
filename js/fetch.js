const api_url='https://jsonplaceholder.typicode.com/posts';

async function getPost(){
   const response = await fetch(api_url);
   const data= await response.json();
   let post = document.getElementById("post");

   for (let i = 1; i < data.length; i++) {
      const { id, title, body } = data[i];
      post.innerHTML += `
         <a href="detail.html?id=${id}">
            <h3 class="title">${title}</h3>
         </a>
         <p class="body">${body} </p>
      `
   }
}  

getPost();




