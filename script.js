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
function appearPrompt(){
    let name = prompt("enter your name");
    acc_name.innerText = `Hello ${name} !!!`;
    localStorage.setItem("counterValue", name);




}
let totalPoints = document.querySelector(".total-points");
let savedpoints = localStorage.getItem("counterValue2");
if (savedpoints) {
    totalPoints.innerText = 0;
} else {
    totalPoints.innerText = `0000 points`;
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
