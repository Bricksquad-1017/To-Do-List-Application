document.getElementById('AddTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskinput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('active-tasks');
        const taskItem = document.createElement('li');

        // Create a span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskItem.appendChild(taskSpan);

        // Create a complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
            if (taskItem.classList.contains('completed')) {
                document.getElementById('completed-tasks').appendChild(taskItem);
                completeButton.textContent = 'Undo';
            } else {
                document.getElementById('active-tasks').appendChild(taskItem);
                completeButton.textContent = 'Complete';
            }
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Handle dropdown item clicks
const dropdownLinks = document.querySelectorAll('.dropdown li a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});