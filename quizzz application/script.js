const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const signin_button = document.getElementById("signin-button");

// dummy email and passord ;


const CurrentUser = {
    email: "sakalakabombom1234@gmail.com",
    password: "Admin@1234",
}

// sign in user gmail and password through out regex...

const SignInUser = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const email = email_input.value;
    const password = password_input.value;
    if (emailPattern.test(email) && passwordPattern.test(password)) {

        if (email == CurrentUser.email && password == CurrentUser.password) {
            alert(" Sign In Successful!");
        } else {
            alert("Wrong Email or Password!!!");
        }
    }
    else {
        alert("Invalid info");

    }


};

signin_button.addEventListener("click", SignInUser);

