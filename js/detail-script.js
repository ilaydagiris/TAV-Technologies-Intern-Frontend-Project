async function getDetail(){
    const urlString = window.location.href;
    const url = new URL(urlString);
    const idString = url.searchParams.get("id")
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/'+idString;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const { title, body } = data;
    
    const postTitle = document.getElementById("title");
    const postBody = document.getElementById("body");
    postTitle.innerHTML = title;
    postBody.innerHTML = body;
 }  
 
 getDetail();


 