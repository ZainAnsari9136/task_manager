// Function to add 'active' class to the clicked nav-item and show corresponding section
let totalPoints2;
const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const pointsInput = document.getElementById('pointsInput');
const todoList = document.getElementById('todoList');
const totalPointsDisplay = document.getElementById('totalPointsDisplay');

// Initialize total points
 totalPoints2 = JSON.parse(localStorage.getItem('totalPoints2')) || 0;
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
// Function to update the total points2
// function updateTotalPoints(points) {
//     totalPoints2 += parseInt(points);
//     totalPointsDisplay.textContent = `Total Points: ${totalPoints2}`;
//     localStorage.setItem('totalPoints2', JSON.stringify(totalPoints2));

//     // Update the .total-points display immediately after change
//     document.querySelector('.total-points').innerText = `${totalPoints2} points`;
// }
// Function to update the total points and show notification
function updateTotalPoints(points) {
    showLoader();
    totalPoints2 += parseInt(points);
    totalPointsDisplay.textContent = `Total Points: ${totalPoints2}`;
    localStorage.setItem('totalPoints2', JSON.stringify(totalPoints2));

    // Update the .total-points display immediately after change
    document.querySelector('.total-points').innerText = `${totalPoints2} points`;

    // Show notification message
    showNotification(`Added ${points} points!`);
}
function showLoader() {
    const notismsg = document.getElementById('ntmsg');
    notismsg.style.display = 'block'; // Show the reloader
    notismsg.style.width = '100%'; // Set width to 100%

    // Automatically hide the reloader after 3 seconds
    setTimeout(() => {
        notismsg.style.width = '0%'; // Animate to 0% width

        // Hide the notification and reloader after the animation ends
        setTimeout(() => {
            notismsg.style.display = 'none'; // Hide the reloader
        }, 3000); // Wait for the animation duration before hiding
    }, 0); // Start animation immediately
}
// Function to show notification message
function showNotification(message) {
    const notificationDiv = document.getElementById('notification');
    const notismsg = document.getElementById('ntmsg');
    notificationDiv.textContent = message;
    notificationDiv.style.display = 'block'; // Show the message
    notismsg.style.display = 'block'; // Show the message

    // Automatically hide the message after 3 seconds
    setTimeout(() => {
        notificationDiv.style.display = 'none';
        notismsg.style.display = 'none';
    }, 3000); // 3 seconds delay
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



// let totalPoints = document.querySelector(".total-points");
// let savedpoints = localStorage.getItem("counterValue2");
// if (savedpoints) {
//     totalPoints.innerText = 0;
// } else {
//     totalPoints.innerText = `0000 points`;
// }
let totalPoints = document.querySelector(".total-points");
let savedPoints = localStorage.getItem("totalPoints2");
// totalPoints.innerText = totalPoints2;
if (savedPoints) {
    totalPoints.innerText = `${savedPoints} points`; 
    // console.log(totalPoints2);
} else {
    
    totalPoints.innerText = "0000 points";
    // console.log(totalPoints2);
}





























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