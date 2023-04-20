let list = document.getElementById("list");
let tasks = [];
let taskName = String(document.getElementById("taskName"))

function addTask() {
    tasks.push(taskName)
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML(task);
        list.appendChild(li);
    });
}