const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const button_input = document.getElementById("input-button");


const currentUser = {

    email: "shakalalabombom123@gmail.com",
    password: "Admin@123",
}

const userSignin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,16}$/;

    const email = email_input.value;
    const password = password_input.value;

    if (emailPattern.test(email) && passwordPattern.test(password)) {

        if (email === currentUser.email && password === currentUser.password) {
            alert("successfull  !!");
            console.log("True");
            button_input.href = "quiz.html";
        }
        else {
            alert("Weak info !!");
        }

    } else {
        alert("Invalid information");
    }

}



button_input.addEventListener("click", userSignin);                                              