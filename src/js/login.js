function login() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        document.cookie = `username=${username}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;

        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}
