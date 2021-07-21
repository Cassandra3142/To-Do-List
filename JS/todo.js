const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-list input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=""
}

toDoForm.addEventListener("submit",handleToDoSubmit);