class Post {
    constructor({author, date, desc, id, img, profile}){
        this.author = author
        this.date = date
        this.desc = desc
        this.id = id
        this.img = img; // Fix: Assign the img parameter to this.img
        this.profile = profile; // Fix: Assign the profile parameter to this.profile
    }
    toHTML(){
        const statusClass = this.done ? 'task-done' : '';
        return `
        <div class="card">
            <div class="container">
                <img src="${this.profile}" alt="Avatar" class="card-profile">
                <h4><b class="cardtitle">${this.author}</b></h4>
                <img src="${this.img}" alt="post" style="width:100%" class="cardimages">
            </div>
        </div>
        `;
    }
}

function updateStorage(newData) {
    localStorage.setItem('posts', JSON.stringify(newData)); // Fix: Change 'tasks' to 'posts'
}

function readStorage(){
    const jsonString = localStorage.getItem('posts'); // Fix: Change 'tasks' to 'posts'
    let result = JSON.parse(jsonString) || [];
    result = result.map(postData => new Post(postData)); // Fix: Change 'Task' to 'Post'
    return result;
}

function createPost() {
    event.preventDefault();
    const desc = document.getElementById('newPost-desc').value; // Fix: Change 'desc' to 'newPost-desc'
    const img = document.getElementById('newPost-img').value; // Fix: Change 'img' to 'newPost-img'
    const profile = document.getElementById('newPost-profile').value; // Fix: Add profile input field

    if (desc === ''){ // Fix: Change 'text' to 'desc'
        alert('Please enter a description...'); // Fix: Change 'task' to 'description'
        return;
    }
    const newPost = new Post({author: profile, date: Date.now(), desc, id: Date.now(), img, profile}); // Fix: Change 'Task' to 'Post'
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
