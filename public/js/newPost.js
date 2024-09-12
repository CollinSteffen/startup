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
    constructor({author, date, desc, id, profile}){
        this.author = author
        this.date = date
        this.desc = desc
        this.id = id
        this.profile = profile;
    }
    toHTML(){
        return `
        <div class="card">
            <div class="container">
                <img src="${this.profile}" alt="Avatar" class="card-profile">
                <h4><b class="cardtitle">${this.author}</b></h4>'
            </div>
        </div>
        `;
    }
}



async function createPost(event) {
    event.preventDefault();
    const desc = document.getElementById('newPost-desc').value; 
    const profile = document.getElementById('newPost-profile').value;

    if (desc === ''){ 
        alert('Please enter a description...');
        return;
    }

    const postData = {
        author: profile,
        desc: desc,
        profile: profile,
    };

    function clearForm(){
        document.getElementById('newPost-desc').value = '';
        document.getElementById('newPost-profile').value = '';
    }

    async function submitPosts(postData) {
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });
            if (!response.ok) {
                throw new Error('Failed to submit post');
            }
            console.log('Post submitted successfully');
            clearForm(); // Clear form after successful submission
            renderPosts(); // Render posts after submission
        } catch (error) {
            console.error('Error submitting post:', error);
        }
    }

    await submitPosts(postData); // Wait for submission to complete
}
