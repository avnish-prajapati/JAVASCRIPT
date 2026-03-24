const button = document.getElementById("click1")


button.addEventListener("click",()=>{
     const str = Math.floor( Math.random() * 16581375).toString(16);

     document.body.style.backgroundColor = "#" + str;
     button.textContent = str;
})