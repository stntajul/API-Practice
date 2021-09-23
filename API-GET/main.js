fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUserContent(json))

  function displayUserContent(users){
      const userName=users.map(uName=>uName.username);
      const userEmail=users.map(x=>x.email);
      const ul2=document.getElementById('email-container');
      //console.log(userName);
      const ul =document.getElementById('user-container');
      for (let i = 0; i < userName.length; i++) {
          const username = userName[i];
          const email=userEmail[i];
          const li2=document.createElement("li");
          li2.innerText=email;
          ul2.appendChild(li2);
          const li=document.createElement("li");
          li.innerText=username;
          ul.appendChild(li);
          
      }

  }
