// {
//     <div class="card w-25 m-2">
// <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-warning">Edit</a>
//     <a href="#" class="btn btn-danger">Delete</a>
// </div>
// </div>
// }
const note_container = document.getElementById("note-container");//note-container is id in html code. 
// jisko hm JS ke ander note_container ke ander store krva rhe hai.  
const add_note_button = document.getElementById("add-note")//add-note ek button ki id hai jise JS ke ander 
// Add_note_button name ke vriable ke ander store krva rhe hai. 
const title_input = document.getElementById("title");//section 2 ke ander first number ki input ka id name hai jise hm
//title_input ke ander store krva rhe hai.

const description_input = document.getElementById("description");
    let isUpdate = false;//to perform update and edit on same button 
    let updateIndex = 0;
    let notes = [];
const addNote = () => {

    const title = title_input.value;
    const description = description_input.value;
    const note = {
        title: title,
        description: description,
    };
    notes.push(note);//new value come in note.
    //local storage accept only string 
    localStorage.setItem("notes-array", JSON.stringify(notes));//notes-array is key name in local storage.
    //  and JSON.stringify is a fuction its will be use to convirt array into string. !!
    displayNotes();
    title_input.value = "";
    description_input.value = "";
}

const displayNotes = () => {
    note_container.innerHTML = "";
    const data = localStorage.getItem("notes-array");//notes-array ko display pr get krne ke liye data name ka variable 
//bna ke usko usme store krvaya.but data is sttring.
   if(data){//data ki value null  hogi to.
        notes =  JSON.parse(data);
    }
   // data comes from local storage . and store into actual array.
  //  JSON.parse is a function it will be use to convirt string into array .
    notes.forEach((note,i) => {
        const div = document.createElement("div");
        div.className = "card w-25 m-2";
        div.innerHTML = `<div class="card-body">
        <h5 class="card-title">${note.title} </h5>
        <p class="card-text">${note.description}</p>
        <button  onClick="updateNotes(${i})" class="btn btn-warning">Edit</button>
        <a href="#"onclick="deleteNote(${i})" class="btn btn-danger">Delete</a> 
    </div>`;
        note_container.appendChild(div);
    })
}

const deleteNote=(i)=>{
    notes.splice(i,1); //splice  name ki property delete krne ke liye use hoti hai. !!
    localStorage.setItem("notes-array", JSON.stringify(notes));//becuse delete ke  baad ka jo data hai vo fir local storage me store ho jayega.
//aur displarNotes ko call krya hai taki update  data display ho jaye 
    displayNotes();
}
const updateNotes=(i)=>{
    isUpdate=true;
    updateIndex = i;
    title_input.value = notes[i].title;
    description_input.value=notes[i].description;
    add_note_button.textContent="update notes";
}
const editNote=()=>{
    notes[updateIndex].title=title_input.value;
    notes[updateIndex].description = description_input.value;
    localStorage.setItem("notes-array",JSON.stringify(notes));
    isUpdate = false; // wapas add mode
    title_input.value = "";
    description_input.value = "";
    displayNotes();
    add_note_button.textContent="Add note";
}

displayNotes();

const handleUpdateAndEdit =()=>{
    if(isUpdate){
        editNote();
    }else{
addNote();
    }

}
add_note_button.addEventListener("click",  handleUpdateAndEdit);
//29.45 sec