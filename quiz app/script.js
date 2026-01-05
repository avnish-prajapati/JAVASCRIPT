
 
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const button_input = document.getElementById("signin-button");

//dummy user
const currentUser = {
    email: "shakalabombom6@gmail.com",
    password: "Admin@123"
};
const singInUser = () => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const email = email_input.value;
    const password = password_input.value;
    console.log("")
    if (emailPattern.test(email) && strongPasswordRegex.test(password)) {
        if (email === currentUser.email && password === currentUser.password) 
            {
            alert("successful");
            button_input.href="quiz.html";
        } else {
            alert("invalid");
        }
    }
    else {
        alert("invalid credential");
    }

};
button_input.addEventListener("click", singInUser);



 