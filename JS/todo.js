const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);