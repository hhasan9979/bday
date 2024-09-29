// Select the canvas element and set up the 2D context
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Load the 3 frames (you would replace these with your 3 image sources)
const frame1 = new Image();
const frame2 = new Image();
const frame3 = new Image();

// Use the URLs of the pixel art images for each frame
frame1.src = 'frame1.png'; // Placeholder for your Frame 1 image
frame2.src = 'frame2.png'; // Placeholder for your Frame 2 image
frame3.src = 'frame3.png'; // Placeholder for your Frame 3 image

let currentFrame = 0; // Track the current frame (0, 1, 2)
let frameCount = 3;   // Total number of frames

// This function will update and draw the frames in a loop
function drawAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Determine which frame to show based on currentFrame
    if (currentFrame === 0) {
        ctx.drawImage(frame1, 0, 0, canvas.width, canvas.height);
    } else if (currentFrame === 1) {
        ctx.drawImage(frame2, 0, 0, canvas.width, canvas.height);
    } else if (currentFrame === 2) {
        ctx.drawImage(frame3, 0, 0, canvas.width, canvas.height);
    }

    // Move to the next frame
    currentFrame = (currentFrame + 1) % frameCount;

    // Repeat the function to create the animation (every 500ms)
    setTimeout(drawAnimation, 500);
}

// Wait for the images to load before starting the animation loop
frame1.onload = () => {
    frame2.onload = () => {
        frame3.onload = () => {
            drawAnimation();  // Start the animation loop once all frames are loaded
        };
    };
};
