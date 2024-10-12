// Function to add 'active' class to the clicked nav-item and show corresponding section
function setActiveNav(element) {
    // Remove 'active' class from any previously active items
    let items = document.querySelectorAll('.nav-item');
    items.forEach(item => item.classList.remove('active'));
    
    // Add 'active' class to the clicked item
    element.classList.add('active');
    
    // Hide all sections
    let sections = ['main', 'main2', 'main3'];
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });
    
    // Show the corresponding section based on the clicked nav-item
    if (element.classList.contains('home')) {
        document.getElementById('main').style.display = 'flex';
    } else if (element.classList.contains('wallet')) {
        document.getElementById('main2').style.display = 'flex';
    } else if (element.classList.contains('account')) {
        document.getElementById('main3').style.display = 'flex';
    }
}

// Set the home nav-item as active and show only the 'main' section by default
document.addEventListener('DOMContentLoaded', () => {
    const homeItem = document.querySelector('.home');
    homeItem.classList.add('active');
    
    // Show only the 'main' section initially
    document.getElementById('main').style.display = 'flex';
    document.getElementById('main2').style.display = 'none';
    document.getElementById('main3').style.display = 'none';
});









let acc_name = document.querySelector(".acc-name");
let savedValue = localStorage.getItem("counterValue");
if (savedValue) {
    acc_name.innerText = `Hello ${savedValue} !!!`;
} else {
    acc_name.innerText = "Hello there !!!";
}

function appearPrompt() {
    let name = prompt("Enter your name");
    acc_name.innerText = `Hello ${name} !!!`;
    localStorage.setItem("counterValue", name);
}



// let totalPoints2 = document.querySelector(".total-points");
// let savedpoints = localStorage.getItem("counterValue2");
// if (savedpoints) {
//     totalPoints.innerText = 0;
// } else {
//     totalPoints.innerText = `0000 points`;
// }
let totalPoints = document.querySelector(".total-points");
let savedPoints = localStorage.getItem("counterValue2");
if (savedPoints) {
    totalPoints.innerText = `${savedPoints} points`;
} else {
    totalPoints.innerText = "0000 points";
}













function setActiveTask(element) {
    // Remove 'active' class from any previously active items
    let items = document.querySelectorAll('.nav-part');
    items.forEach(item => item.classList.remove('active'));
    
    // Add 'active' class to the clicked item
    element.classList.add('active');
    
    // Hide all task sections
    let sections = ['task-body-1', 'task-body-2', 'task-body-3'];
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });
    if (element.classList.contains('task-nav-1')) {
        document.getElementById('task-body-1').style.display = 'flex';
    } else if (element.classList.contains('task-nav-2')) {
        document.getElementById('task-body-2').style.display = 'flex';
    } else if (element.classList.contains('task-nav-3')) {
        document.getElementById('task-body-3').style.display = 'flex';
    }
}

// Set the default active task when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const firstTaskItem = document.querySelector('.task-nav-1');
    firstTaskItem.classList.add('active'); // Set the first task nav as active
    setActiveTask(firstTaskItem); // Show the first task section
});















const fullscreenButton = document.getElementById('fullscreen-btn');

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // If not in fullscreen, request fullscreen on the entire document
        document.documentElement.requestFullscreen()
            .catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
    } else {
        // If already in fullscreen, exit fullscreen
        document.exitFullscreen();
    }
}

// Attach the function to the button's click event
fullscreenButton.addEventListener('click', toggleFullscreen);

















// Get the elements
const clickableDiv = document.getElementById('clickableDiv');
const popup = document.getElementById('popup');
const close = document.querySelector('.close');

// Show the popup when the div is clicked
clickableDiv.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close the popup when the close button is clicked
close.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the popup if the user clicks outside the popup content
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});















// const addButton = document.getElementById('addButton');
// const todoInput = document.getElementById('todoInput');
// const pointsInput = document.getElementById('pointsInput');
// const todoList = document.getElementById('todoList');
// const totalPointsDisplay = document.getElementById('totalPointsDisplay');
// Variables for task input and button
// const addButton = document.getElementById('addButton');
// const todoInput = document.getElementById('todoInput');
// const pointsInput = document.getElementById('pointsInput');
// const todoList = document.getElementById('todoList');
//  totalPoints = parseInt(localStorage.getItem('counterValue2')) || 0;

// // Function to add task
// addButton.addEventListener('click', () => {
//     const taskName = todoInput.value;
//     const taskPoints = parseInt(pointsInput.value);

//     if (taskName && taskPoints) {
//         // Create a new task div
//         const taskDiv = document.createElement('div');
//         taskDiv.classList.add('task');
//         taskDiv.innerHTML = `<p>${taskName}</p><p>${taskPoints} points</p><button class="delete-btn">Delete</button>`;

//         // Add task to the list
//         todoList.appendChild(taskDiv);

//         // Update total points
//         totalPoints += taskPoints;
//         localStorage.setItem('counterValue2', totalPoints);
//         document.querySelector('.total-points').innerText = `${totalPoints} points`;

//         // Clear input fields
//         todoInput.value = '';
//         pointsInput.value = '';

//         // Add delete button functionality
//         const deleteButton = taskDiv.querySelector('.delete-btn');
//         deleteButton.addEventListener('click', () => {
//             taskDiv.remove();
//             totalPoints -= taskPoints;
//             localStorage.setItem('counterValue2', totalPoints);
//             document.querySelector('.total-points').innerText = `${totalPoints} points`;
//         });
//     }
// });



// Select elements
const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const pointsInput = document.getElementById('pointsInput');
const todoList = document.getElementById('todoList');
const totalPointsDisplay = document.getElementById('totalPointsDisplay');

// Initialize total points
let totalPoints2 = JSON.parse(localStorage.getItem('totalPoints2')) || 0;
totalPointsDisplay.textContent = `Total Points: ${totalPoints2}`;

// Function to load saved tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTask(task.name, task.points));
}

// Function to create a new task element
function createTask(taskName, points) {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('todo-item');

    const taskDetailsDiv = document.createElement('div');
    taskDetailsDiv.classList.add('task-details');
    
    const taskNameSpan = document.createElement('span');
    taskNameSpan.textContent = `Task: ${taskName}`;
    
    const taskPointsSpan = document.createElement('span');
    taskPointsSpan.textContent = `Points: ${points}`;

    taskDetailsDiv.appendChild(taskNameSpan);
    taskDetailsDiv.appendChild(taskPointsSpan);

    const givePointsButton = document.createElement('button');
    givePointsButton.textContent = 'Get Points';
    givePointsButton.classList.add('givePointsButton');
    givePointsButton.onclick = function() {
        updateTotalPoints(points);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteButton');
    deleteButton.onclick = function() {
        taskDiv.remove();
        deleteTaskFromStorage(taskName);  // Deletion will not affect total points
    };

    taskDiv.appendChild(taskDetailsDiv);
    taskDiv.appendChild(givePointsButton);
    taskDiv.appendChild(deleteButton);
    todoList.appendChild(taskDiv);
}

// Function to add a task to local storage
function addTaskToStorage(taskName, points) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ name: taskName, points: points });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to delete a task from local storage
function deleteTaskFromStorage(taskName) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to update the total points
function updateTotalPoints(points) {
    totalPoints2 += parseInt(points);
    totalPointsDisplay.textContent = `Total Points: ${totalPoints2}`;
    localStorage.setItem('totalPoints2', JSON.stringify(totalPoints2));
}

// Add event listener to the add button
addButton.addEventListener('click', function() {
    const taskName = todoInput.value;
    const points = pointsInput.value;
    
    if (taskName.trim() && points.trim()) {
        createTask(taskName, points);
        addTaskToStorage(taskName, points);
        todoInput.value = '';
        pointsInput.value = '';
    } else {
        alert('Please enter both task name and points.');
    }
});

// Load saved tasks on page load
window.onload = loadTasks;
