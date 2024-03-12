function openNav(){
    document.getElementById("mySidepanel").style.width = "12%";
    document.getElementsByClassName("openbtn").style.opacity = "0%";
}

function closeNav(){
    document.getElementById("mySidepanel").style.width = "0%";
    document.getElementsByClassName("openbtn").style.opacity = "100%";
}


class Post {
    constructor({author, date, desc, id, img, profile}){
        this.author = author
        this.date = date
        this.desc = desc
        this.id = id
        this.img = img;
        this.profile = profile;
    }
    toHTML(){
        return `
        <div class="card">
            <div class="container">
                <img src="${this.profile}" alt="Avatar" class="card-profile">
                <h4><b class="cardtitle">${this.author}</b></h4>'
                <img src="${this.img}" alt="post" style="width:100%" class="cardimages">'
            </div>
        </div>
        `;
    }
}

// function updateStorage(newData) {
//     localStorage.setItem('posts', JSON.stringify(newData)); 
// }

// function readStorage(){
//     const jsonString = localStorage.getItem('posts');
//     let result = JSON.parse(jsonString) || [];
//     result = result.map(postData => new Post(postData));
//     return result;
// }

async function createPost(event) {
    event.preventDefault();
    const desc = document.getElementById('newPost-desc').value; 
    const img = document.getElementById('fileInput').value; 
    const profile = document.getElementById('newPost-profile').value;

    if (desc === ''){ 
        alert('Please enter a description...');
        return;
    }

    const postData = {
        author: profile,
        desc: desc,
        img: img,
        profile: profile,
    };

    try{
        //this submits the post to the backend
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });

        if (response.ok){
            const responseData = await response.json();
            console.log('post submitted successfully: ', responseData);
            clearForm();
            readPosts();
            window.location.href = 'index.html';
        }else{
            const errorData = await response.json();
            console.error('error while submitting: ', errorData);
        }
    }
    catch (error){
        console.error('Error while submitting: ', error);
    }
}

function clearForm(){
    document.getElementById('newPost-desc').value = '';
    document.getElementById('fileInput').value = '';
    document.getElementById('newPost-profile').value = '';
}

function readPosts() {
    const postList = document.getElementById('post');
    postList.innerHTML = '';
    
    const posts = readStorage();
    posts.forEach(post => {
        postList.innerHTML += post.toHTML();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    readPosts();
});

function submitPost(postData) {
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Post submitted successfully:', data);
    })
    .catch(error => {
      console.error('Error submitting post:', error);
    });
}
  
  async function uploadFile(fileInput) {
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (response.ok) {
        document.querySelector('#upload').src = `/file/${data.file}`;
      } else {
        alert(data.message);
      }
    }
}

