let list = document.getElementById("list");

document.querySelector("#addTask").onclick = function() {
    let taskName = document.getElementById("taskName").value;
    document.createElement("li", taskName);
}
