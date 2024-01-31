let box = document.querySelector(".todo-list-box");
let inputBox = document.querySelector(".todo-list-input");
let input = document.querySelector(".list-input");
let addButton = document.querySelector(".add-button");
let output = document.querySelector(".todo-list-output");
let form = document.querySelector("form");
let ul = document.querySelector(".todo-list-ul");
let deleteButton = document.querySelector(".delete");

form.addEventListener("submit", (event) => {
  event?.preventDefault();
});

addButton.onclick = () => {
  let newTodoList = document.createElement("li");
  ul.appendChild(newTodoList);
  newTodoList.innerHTML = input.value;
  input.value = "";
};

deleteButton.onclick = () => {
    ul.remove()
    ul = document.createElement('ul')
    output.appendChild(ul)
};
