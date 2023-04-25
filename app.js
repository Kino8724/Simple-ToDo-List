let ul = document.getElementById("list");


document.querySelector("#addTask").onclick = function() {
    let taskName = document.getElementById("taskName").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskName));
    ul.appendChild(li);
}

document.querySelector("#removeTask")
