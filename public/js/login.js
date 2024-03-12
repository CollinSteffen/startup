function openNav(){
  document.getElementById("mySidepanel").style.width = "12%";
  document.getElementsByClassName("openbtn").style.opacity = "0%";
}

function closeNav(){
  document.getElementById("mySidepanel").style.width = "0%";
  document.getElementsByClassName("openbtn").style.opacity = "100%";
}

function login(event) {
  event.preventDefault(); // Prevent default form submission
  const nameEl = document.getElementById("username"); // Corrected ID
  const passEl = document.getElementById("password");
  const username = nameEl.value;
  const password = passEl.value;

  // Send username and password to server
  fetch('/storeCredentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      console.log('Credentials stored successfully.');
      // Redirect to index.html or wherever needed
      window.location.href = "index.html";
    } else {
      console.error('Failed to store credentials:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error storing credentials:', error);
  });

}
  
