function openNav(){
    document.getElementById("mySidepanel").style.width = "12%";
    document.getElementsByClassName("openbtn").style.opacity = "0%";
}

function closeNav(){
    document.getElementById("mySidepanel").style.width = "0%";
    document.getElementsByClassName("openbtn").style.opacity = "100%";
}

function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
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

// Function to fetch posts from the API
async function fetchPosts() {
    try {
        const response = await fetch('/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// Function to render posts on the homepage
async function renderPosts() {
    try {
        const posts = await fetchPosts();
        const container = document.getElementById('post-container');
        container.innerHTML = ''; // Clear previous posts if any

        posts.forEach(post => {
            const newPost = new Post(post); // Assuming Post class is accessible
            container.innerHTML += newPost.toHTML();
        });
    } catch (error) {
        console.error('Error rendering posts:', error);
    }
}

// Call renderPosts when the page loads
window.addEventListener('load', renderPosts);
