let ul = document.getElementById("list");

// View for the addTask
// ul>li>div>span+button *emmett abreviation*
document.querySelector("#addTask").onclick = function() {
    let taskName = document.getElementById("taskName").value;
    let li = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("button");
    span.appendChild(document.createTextNode(taskName));
    button.appendChild(document.createTextNode("REMOVE"));
    div.appendChild(span);
    div.appendChild(button);
    li.appendChild(div);
    ul.appendChild(li);
}

document.querySelector("#removeTask")
