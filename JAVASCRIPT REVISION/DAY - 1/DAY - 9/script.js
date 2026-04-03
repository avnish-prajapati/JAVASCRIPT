const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const str = Math.floor(Math.random() * 16581375).toString(16);
    document.body.style.backgroundColor = "#" + str;

    
});