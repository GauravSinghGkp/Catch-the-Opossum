// Variables

// Hole
let hole = document.getElementById("1");
// Buttons
let start = document.getElementById("start-btn");
let reStart = document.getElementById("restart-btn");

// Level
// Get the select element and time variable
const levelSelect = document.getElementById('levelSelect');
let time = 500; // Default time

// Timer 
const timer = document.getElementById('timer');
// hold ID
let intervalId;
let timerId;// Declare a variable to hold the interval ID
// Game is active or not
let isGameActive = false;


// EventListener
start.addEventListener('click', game);
reStart.addEventListener('click', gameRestart);
levelSelect.addEventListener('change', updateTime); // Event listener to detect changes
// Initial call to set the default time
updateTime();

// Creating Image
let image = document.createElement('img'); // Create an <img> element
image.src = "Images/Opossum.png"; // Set the image source
image.alt = "Opossum"; // Set the alt text for accessibility
image.style.height = "100px";

// Append Image to Hole
hole.appendChild(image);
// EventListener
image.addEventListener('click', won);



// Function to update time based on selected level
function updateTime() {
    const selectedLevel = levelSelect.value;
    if (selectedLevel === 'medium') {
        time = 300;
    } else if (selectedLevel === 'high') {
        time = 200;
    } else {
        time = 500; // Default to low
    }
}

// Game Function
function game() {
    if (!isGameActive) {
        isGameActive = true;
        intervalId = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * 12 + 1);
            let hole = document.getElementById(randomNumber);
            hole.appendChild(image);
        }, time);
        startTimer(30, timer);
    }
}


// Restart Function
function gameRestart() {
    isGameActive = false;
    document.getElementById("1").appendChild(image);
    clearInterval(intervalId);
    clearInterval(timerId);
}

// Won Function
function won() {
    if (isGameActive) { // Stop the interval when the user wins
        alert("Won");
        gameRestart();
    } else {
        return;
    }
}

// Timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    timerId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            document.getElementById("1").appendChild(image);
            alert("Lost");
            gameRestart();
        }
    }, 1000);
}


