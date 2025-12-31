const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const loginBtn = document.getElementById("loginBtn");

// Dummy user
const DUMMY_USER = {
    email: "shakalabombom@gamil.com",
    password: "admin@123"
};

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    resetMessage();

    // Validation
    if (!email || !password) {
        showMessage("All fields are required.", "error");
        return;
    }

    if (!isValidEmail(email)) {
        showMessage("Invalid email format.", "error");
        return;
    }

    // Loading animation
    loginBtn.classList.add("loading");

    setTimeout(() => {
        loginBtn.classList.remove("loading");

        if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
            showMessage("✅ Sign in successful! Welcome back.", "success");
            window.location.href = "quiz-page.html";
        } else {
            showMessage("❌ Invalid email or password.", "error");
        }
    }, 1500);
});

// Helper functions
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = "block";
}

function resetMessage() {
    message.style.display = "none";
}