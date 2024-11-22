// Toggle between login and signup forms
function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginButton = document.getElementById('login-btn');
    const signupButton = document.getElementById('signup-btn');

    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginButton.style.backgroundColor = '#007bff';
        signupButton.style.backgroundColor = '#f1f1f1';
    } else {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
        signupButton.style.backgroundColor = '#007bff';
        loginButton.style.backgroundColor = '#f1f1f1';
    }
}

// Set default view to login
document.addEventListener('DOMContentLoaded', function () {
    toggleForm('login');
});
