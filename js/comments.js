async function getComments(){
    const urlString=window.location.href;
    const url = new URL(urlString);
    const idString=url.searchParams.get("id");
    const commentUrl="https://jsonplaceholder.typicode.com/comments?postId="+idString;
   
    const response = await fetch(commentUrl);
    const data= await response.json();
    let comment=document.getElementById("comment-div");

    for(let i=1;i<data.length;i++){
        const { name, body,email } = data[i];
        comment.innerHTML +=`
        <h3 id="username">Name:${name} <br> e-mail:${email} </h3>
        <p id="comment">${body} </p>`
    }
}

getComments()


