let tbdoy = document.getElementById("ts_tbody");
let project = document.getElementById("project");
let task = document.getElementById("task");
let time = document.getElementById("time");
let add = document.getElementById("add")
let clear = document.getElementById("clear")
let id = 4, index = 0;
//------------
console.log(tbdoy);
//-------------add - clear------------------
add.addEventListener("click", function () {
    if (add.innerText == "Update") {
        update();
    }
    else if (project.value == "" && task.value == "" && time.value == "") {
        return;
    }
    else {
        tbdoy.insertAdjacentHTML("beforeend",
            `<tr id="${++id}">
        <td id = "project_${id}">${project.value}</td>
        <td id = "task_${id}">${task.value}</td>
        <td id = "time_${id}">${time.value}</td>
        <td>
            <button onclick = "actions_remove(${id})">X</button>
            <button onclick="actions_update(${id})">U</button>
        </td>
    </tr>`)
    }
    
})
clear.addEventListener("click", function () {
    project.value = "";
    task.value = "";
    time.value = "";
    add.innerText = "Add";
})
//-------------
console.log(add)
console.log(project);
console.log(task);
console.log(time);
//----------remove()
function actions_remove(x) {
    document.getElementById(x).remove();
    console.log(++index);
}
//update
let project_value_up;
let task_value_up;
let time_value_up;
function actions_update(x) {
    add.innerText = "Update";
    project_value_up = document.getElementById(`project_${x}`);
    task_value_up = document.getElementById(`task_${x}`);
    time_value_up = document.getElementById(`time_${x}`);
    project.value = project_value_up.innerText;
    task.value = task_value_up.innerText;
    time.value = time_value_up.innerText;
}
function update() {
    project_value_up.innerText = project.value;
    task_value_up.innerText = task.value;
    time_value_up.innerText = time.value;
}

