const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const bgInput = document.getElementById("bgInput");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    let task = taskInput.value.trim();

    if(task === ""){
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const tickBtn = document.createElement("button");
    tickBtn.innerHTML = "✓";
    tickBtn.classList.add("tick");

    tickBtn.onclick = () =>{
        span.classList.toggle("completed");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑";
    deleteBtn.classList.add("delete");

    deleteBtn.onclick = () =>{
        li.remove();
    };

    actions.appendChild(tickBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";
}

bgInput.addEventListener("change", function(e){

    const file = e.target.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(event){
            document.body.style.backgroundImage =
            `url('${event.target.result}')`;
        };

        reader.readAsDataURL(file);
    }
});



