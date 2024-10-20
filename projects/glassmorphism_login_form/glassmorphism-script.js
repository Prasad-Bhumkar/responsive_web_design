document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember-me');

    // Load saved username if available
    if (localStorage.getItem('rememberedUsername')) {
        usernameInput.value = localStorage.getItem('rememberedUsername');
        rememberMeCheckbox.checked = true;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Store username locally if "Remember me" is checked
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberedUsername', username);
        } else {
            localStorage.removeItem('rememberedUsername');
        }

        // Here you would typically send the login data to a server
        console.log('Login attempt:', { username, password });

        // For demonstration purposes, we'll just log the input and clear the form
        alert(`Login attempt with username: ${username}`);
        
        // Clear password field for security
        passwordInput.value = '';
    });
});