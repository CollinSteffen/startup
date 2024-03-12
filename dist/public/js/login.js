function login(event) {
    event.preventDefault(); // Prevent default form submission
    const nameEl = document.querySelector("#username"); // Corrected ID
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "index.html";
  }
  
  function getUserNameFromStorage() {
    return localStorage.getItem("userName");
  }
  