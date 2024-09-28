// Get the canvas and context
const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

// Increase the size of the canvas
canvas.width = 400;
canvas.height = 400;

// Flower blooming frames for a more realistic purple tulip
const frames = [
    // Frame 1: Small purple tulip bud (narrow at top, wider at bottom)
    function drawFlowerFrame1() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the stem
        ctx.fillStyle = "green";
        ctx.fillRect(190, 250, 20, 120); // Narrower stem

        // Draw the tulip bud - narrower at the top
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(200, 230); // Starting point at the tip of the bud
        ctx.lineTo(180, 260); // Left side slant
        ctx.lineTo(220, 260); // Right side slant
        ctx.closePath(); // Complete triangle-like bud
        ctx.fill();
    },
    // Frame 2: Larger tulip bud starting to bloom (still pointed at top, wider bottom)
    function drawFlowerFrame2() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the stem
        ctx.fillStyle = "green";
        ctx.fillRect(190, 250, 20, 120); // Stem

        // Draw the tulip bud - starting to bloom
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(200, 210); // Top tip of the bud
        ctx.lineTo(170, 260); // Left petal slanting down
        ctx.lineTo(230, 260); // Right petal slanting down
        ctx.lineTo(200, 260); // Bottom flat part
        ctx.closePath();
        ctx.fill();
    },
    // Frame 3: Fully bloomed tulip (wide at bottom, rounded at top)
    function drawFlowerFrame3() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the stem
        ctx.fillStyle = "green";
        ctx.fillRect(190, 250, 20, 120); // Stem

        // Draw the fully bloomed tulip with rounded petals
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(200, 180); // Top middle of the tulip
        ctx.bezierCurveTo(160, 220, 160, 260, 200, 260); // Left curve
        ctx.bezierCurveTo(240, 220, 240, 260, 200, 260); // Right curve
        ctx.fill();
    },
    // Frame 4: Slight animated bloom with a yellow center
    function drawFlowerFrame4() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the stem
        ctx.fillStyle = "green";
        ctx.fillRect(190, 250, 20, 120); // Stem

        // Draw the fully bloomed tulip with a yellow center
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.moveTo(200, 180); // Top middle of the tulip
        ctx.bezierCurveTo(160, 220, 160, 260, 200, 260); // Left curve
        ctx.bezierCurveTo(240, 220, 240, 260, 200, 260); // Right curve
        ctx.fill();

        // Yellow center to represent the flower's interior
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(200, 230, 10, 0, 2 * Math.PI); // Circular center
        ctx.fill();
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
