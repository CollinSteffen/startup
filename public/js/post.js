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
        const statusClass = this.done ? 'task-done' : '';
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

function updateStorage(newData) {
    localStorage.setItem('posts', JSON.stringify(newData)); 
}

function readStorage(){
    const jsonString = localStorage.getItem('posts');
    let result = JSON.parse(jsonString) || [];
    result = result.map(postData => new Post(postData));
    return result;
}

function createPost() {
    event.preventDefault();
    const desc = document.getElementById('newPost-desc').value; 
    const img = document.getElementById('newPost-img').value; 
    const profile = document.getElementById('newPost-profile').value;

    if (desc === ''){ 
        alert('Please enter a description...');
        return;
    }
    const newPost = new Post({author: profile, date: Date.now(), desc, id: Date.now(), img, profile}); 
    const existingPosts = readStorage();
    existingPosts.push(newPost);
    updateStorage(existingPosts);
    readPosts();
    window.location.href = 'profile.html'; // Redirect to profile.html
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
  
