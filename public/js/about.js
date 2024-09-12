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

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
    const containerEl = document.querySelector('#quote');

    const quoteEl = document.createElement('p');
    quoteEl.classList.add('quote');
    const authorEl = document.createElement('p');
    authorEl.classList.add('author');

    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;

    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
    });
}

displayQuote();