function nowPostToServer(post){
    fetch('https://jsonplaceholder.typicode.com/users',{
        method : 'POST',
        body : JSON.stringify(post),
        headers :{
            "content-type" : "application/json; charset=UTF-8"

        }


    })
   
  .then(response => response.json())
  .then(data => console.log(data))

}


const submit=document.getElementById("submit");
submit.addEventListener('click',function(){
    const email=document.getElementById('email').value;
    console.log(email);
const message=document.getElementById('message').value;
const post={email : email,message:message}
nowPostToServer(post);
    
})