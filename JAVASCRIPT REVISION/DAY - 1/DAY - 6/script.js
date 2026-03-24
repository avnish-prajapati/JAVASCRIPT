
const count = document.getElementById("count");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");


button1.addEventListener("click",()=>{
    count.textContent++;
})

button2.addEventListener("click",()=>{
    count.textContent--;
})

button3.addEventListener("click",()=>{
    count.textContent *= 2;
})

button4.addEventListener("click",()=>{
    count.textContent /= 2;
})

button5.addEventListener("click",()=>{
    count.textContent %= 2;
})

button6.addEventListener("click",()=>{
    count.textContent = 0;
})