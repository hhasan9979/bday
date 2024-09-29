const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Function to draw the first flower frame (based on your first uploaded image)
function drawFlowerFrame1() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stem
    ctx.fillStyle = "green";
    ctx.fillRect(190, 250, 20, 60); // main stem
    ctx.fillRect(170, 290, 40, 20); // base of the flower

    // Leaves
    ctx.fillRect(160, 300, 20, 20); // left leaf
    ctx.fillRect(220, 300, 20, 20); // right leaf

    // Flower Base
    ctx.fillStyle = "green";
    ctx.fillRect(180, 230, 40, 20);

    // Petals
    ctx.fillStyle = "purple";
    ctx.fillRect(170, 210, 60, 20);
    ctx.fillRect(180, 190, 40, 20);
}

// Function to draw the second flower frame (based on your second uploaded image)
function drawFlowerFrame2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stem
    ctx.fillStyle = "green";
    ctx.fillRect(190, 250, 20, 60); // main stem
    ctx.fillRect(170, 290, 40, 20); // base of the flower

    // Leaves
    ctx.fillRect(160, 300, 20, 20); // left leaf
    ctx.fillRect(220, 300, 20, 20); // right leaf

    // Flower Base
    ctx.fillStyle = "green";
    ctx.fillRect(180, 230, 40, 30);

    // Petals
    ctx.fillStyle = "purple";
    ctx.fillRect(180, 200, 40, 30);
    ctx.fillRect(190, 180, 20, 20);
}

let currentFrame = 0;

// Function to animate the flower by switching between the two frames
function animateFlower() {
    if (currentFrame === 0) {
        drawFlowerFrame1();
        currentFrame = 1;
    } else {
        drawFlowerFrame2();
        currentFrame = 0;
    }
}

// Animate the flower every 500ms (half a second)
setInterval(animateFlower, 500);
