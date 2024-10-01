document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (password.length < 15) {
        alert('Password must be at least 15 characters long!');
        return;
    }

    // Simulate form submission (you can integrate backend later)
    alert(`Login or Sign Up with Email: ${email} and Password: ${password}`);
});