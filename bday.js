// Get the canvas and context
const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 100;
canvas.height = 100;

// Flower blooming frames
const frames = [
    // Frame 1: Small bud
    function drawFlowerFrame1() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(45, 50, 10, 30); // Stem
        ctx.fillStyle = "red";
        ctx.fillRect(47, 45, 6, 6);  // Small bud
    },
    // Frame 2: Slightly larger bud
    function drawFlowerFrame2() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(45, 50, 10, 30); // Stem
        ctx.fillStyle = "red";
        ctx.fillRect(45, 40, 10, 10); // Growing bud
    },
    // Frame 3: Fully bloomed flower
    function drawFlowerFrame3() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(45, 50, 10, 30); // Stem
        ctx.fillStyle = "red";
        ctx.fillRect(40, 30, 20, 20); // Fully bloomed petals
        ctx.fillStyle = "yellow";
        ctx.fillRect(47, 37, 6, 6);   // Flower center
    },
    // Frame 4: Full bloom with slight animation
    function drawFlowerFrame4() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(45, 50, 10, 30); // Stem
        ctx.fillStyle = "red";
        ctx.fillRect(40, 30, 20, 20); // Fully bloomed petals
        ctx.fillStyle = "yellow";
        ctx.fillRect(45, 37, 10, 6);  // Animated center
    }
];

let currentFrame = 0;

// Function to animate the flower
function animateFlower() {
    frames[currentFrame]();
    currentFrame = (currentFrame + 1) % frames.length;
}

// Animate the flower every 500ms to show the blooming effect
setInterval(animateFlower, 500);

// Transitioning messages
const messages = ["Happy Birthday!", "Wishing you all the best!", "Have a fantastic day!"];
let currentMessageIndex = 0;
const messageDiv = document.getElementById('message');

// Function to change the message every 5 seconds
function changeMessage() {
    messageDiv.innerText = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

// Set message change interval
setInterval(changeMessage, 5000);
