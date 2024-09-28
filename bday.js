// Adjust the canvas size
const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

// Increase the size of the canvas
canvas.width = 400;
canvas.height = 400;

// Flower blooming frames for purple tulip (scaled up)
const frames = [
    // Frame 1: Small purple tulip bud
    function drawFlowerFrame1() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(180, 250, 40, 120); // Stem
        ctx.fillStyle = "purple";
        ctx.fillRect(190, 230, 20, 40);  // Small tulip bud
    },
    // Frame 2: Slightly larger purple tulip bud
    function drawFlowerFrame2() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(180, 250, 40, 120); // Stem
        ctx.fillStyle = "purple";
        ctx.fillRect(170, 200, 60, 60);  // Growing tulip bud
    },
    // Frame 3: Fully bloomed purple tulip
    function drawFlowerFrame3() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(180, 250, 40, 120); // Stem
        ctx.fillStyle = "purple";
        ctx.fillRect(150, 150, 100, 100); // Fully bloomed tulip petals
        ctx.fillStyle = "yellow";
        ctx.fillRect(190, 190, 20, 20);   // Tulip center
    },
    // Frame 4: Fully bloomed purple tulip with slight animation
    function drawFlowerFrame4() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(180, 250, 40, 120); // Stem
        ctx.fillStyle = "purple";
        ctx.fillRect(150, 150, 100, 100); // Fully bloomed tulip petals
        ctx.fillStyle = "yellow";
        ctx.fillRect(180, 190, 40, 20);  // Animated tulip center
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
