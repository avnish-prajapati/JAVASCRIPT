let tasks = [];
const todoForm = document.getElementById("taskForm");
window.onload = function () {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    displayTodos();
};

function saveLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


todoForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const id = document.getElementById("taskId").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

   
    if (title == "" || dueDate == "") {
        alert("Please fill all required fields");
        return;
    }

    
    if (id != "") {

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].id == id) {

                tasks[i].title = title;
                tasks[i].description = description;
                tasks[i].dueDate = dueDate;
                tasks[i].priority = priority;

            }

        }

    } else {

        
        let newTask = {
            id: new Date().getTime(),
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        };

        tasks.push(newTask);

    }

    saveLocalStorage();
    displayTodos();
    clearForm();

});

function displayTodos() {
    const taskList = document.getElementById("todoList");
    const filter = document.getElementById("filter").value;

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (filter !== "All") {
        filteredTasks = tasks.filter(task => task.priority === filter);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<p>No tasks found yet..</p>";
        return;
    }

    filteredTasks.forEach(task => {
        const div = document.createElement("div");
        div.classList.add("task");

        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description || ""}</p>
            <p><strong>Due:</strong> ${task.dueDate}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>
            <button onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(div);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id == id);
    document.getElementById("taskId").value = task.id;
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("priority").value = task.priority;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id != id);
    saveLocalStorage();
    displayTodos();
}

document.getElementById("filterPriority").addEventListener("change", displayTodos);

function clearForm() {
    document.getElementById("taskId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "Low";
}