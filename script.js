// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Get tasks from localStorage
    tasks.forEach(task => {
        addTaskToDOM(task); // Add each task to the DOM
    });
}

// Function to move a task to the completed list
function moveToCompleted(task) {
    const completedList = document.getElementById('completedList');

    // Add animation
    task.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    task.style.transform = 'translateX(100%)'; // Move to the right
    task.style.opacity = 0; // Fade out

    setTimeout(() => {
        completedList.appendChild(task);
        task.style.transition = 'none'; // Reset for next click
        task.style.transform = 'none'; // Reset position
        task.style.opacity = 1; // Reset opacity
    }, 500); // Match the duration of the animation
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

// Step 3.1: Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Step 3.2: Function to add a task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the input value and trim whitespace
    if (taskText) { // Check if the input is not empty
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text of the list item
        taskList.appendChild(li); // Add the list item to the task list
        taskInput.value = ''; // Clear the input field
    }
}

// Step 3.3: Event listener for the button click
addTaskButton.addEventListener('click', addTask);

// Step 3.4: Event listener for the "Enter" key press
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if the pressed key is "Enter"
        addTask(); // Call the addTask function
    }
});
