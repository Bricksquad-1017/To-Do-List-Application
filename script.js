const addButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-input');
const activeTasks = document.getElementById('active-tasks');
const completedTasks = document.getElementById('completed-tasks');

addButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    if (taskText) {
        addTask(taskText);
        todoInput.value = ''; // Clear input field
    }
});

function addTask(taskText) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.textContent = taskText;

    // Add event listener to mark task as completed
    todoItem.addEventListener('click', function() {
        markAsCompleted(todoItem);
    });

    activeTasks.appendChild(todoItem);
}

function markAsCompleted(todoItem) {
    todoItem.classList.add('completed');
    todoItem.removeEventListener('click', function() {
        markAsCompleted(todoItem);
    });
    completedTasks.appendChild(todoItem);
}