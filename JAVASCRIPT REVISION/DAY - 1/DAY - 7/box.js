

const input_name = document.getElementById("input-name");
const btn_find = document.getElementById("btn-find");



btn_find.addEventListener("click", () => {
    const value = input_name.value;

    alert(value);
})