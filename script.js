const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push({ text: newTodo, completed: false });
        todoInput.value = '';
        renderTodos();
    }
});

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const checkmark = document.createElement('i');
        checkmark.className = 'fas fa-check';
        if (todo.completed) {
            checkmark.style.color = '#4CAF50';
        } else {
            checkmark.style.color = '#ccc';
        }
        checkmark.addEventListener('click', () => {
            todo.completed =!todo.completed;
            renderTodos();
        });
        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });
        li.appendChild(checkmark);
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}