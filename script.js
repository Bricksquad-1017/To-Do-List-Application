// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from localStorage
    tasks.forEach(task => {
        addTaskToDOM(task); // Add each task to the DOM
    });
}

// Function to add a task to the DOM
function addTaskToDOM(taskText) {
    const li = document.createElement('li'); // Create a new list item
    li.textContent = taskText; // Set the text of the list item
    li.addEventListener('click', function() {
        this.remove(); // Remove the task from the DOM
        removeTaskFromStorage(taskText); // Remove from localStorage
    });
    document.getElementById('taskList').appendChild(li); // Append the list item to the task list
}

// Function to save a task to localStorage
function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get existing tasks
    tasks.push(taskText); // Add the new task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
}

// Function to remove a task from localStorage
function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get existing tasks
    tasks = tasks.filter(task => task !== taskText); // Filter out the removed task
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
}

// Add task button event listener
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput'); // Get the input field
    const taskText = taskInput.value; // Get the value of the input field

    if (taskText) {
        addTaskToDOM(taskText); // Add task to the DOM
        saveTaskToStorage(taskText); // Save task to localStorage
        taskInput.value = ''; // Clear the input field
    }
});

// Load tasks when the page is loaded
window.onload = loadTasks;
