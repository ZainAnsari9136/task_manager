// Function to add 'active' class to the clicked nav-item and show corresponding section
function setActive(element) {
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
        document.getElementById('main').style.display = 'block';
    } else if (element.classList.contains('wallet')) {
        document.getElementById('main2').style.display = 'block';
    } else if (element.classList.contains('account')) {
        document.getElementById('main3').style.display = 'block';
    }
}

// Set the home nav-item as active and show only the 'main' section by default
document.addEventListener('DOMContentLoaded', () => {
    const homeItem = document.querySelector('.home');
    homeItem.classList.add('active');
    
    // Show only the 'main' section initially
    document.getElementById('main').style.display = 'block';
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
