let ul = document.getElementById("list");

// View for the addTask
// ul>li>div>span+button *emmett abreviation*
document.querySelector("#addTask").onclick = function() {
    let taskName = document.getElementById("taskName").value;
    let li = document.createElement("li");
    let div = document.createElement("div");
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.className = "removeTask";
    span.appendChild(document.createTextNode(taskName));
    button.appendChild(document.createTextNode("REMOVE"));
    div.appendChild(span);
    div.appendChild(button);
    li.appendChild(div);
    ul.appendChild(li);
}

// Will listen for a click of a remove buttons
// When clicked target the item and remove it from the list
// ul.removeChild method will probably be what to use
document.querySelector(".removeTask").onclick = function() {
    
}
