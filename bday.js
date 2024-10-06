
  // Select all the flame elements
  const flames = document.querySelectorAll('.fuego');
  
  // Add an event listener to the whole document to listen for a click
  document.addEventListener('click', function() {
    flames.forEach(flame => {
      // Toggle the visibility of each flame
      flame.style.display = flame.style.display === 'none' ? 'block' : 'none';
    });
  });
let lastTapTime = 0; // To track the time of the last tap
const videoContainer = document.querySelector('.video-container');
const video = document.getElementById('myVideo');

// Function to handle the double-tap event
document.addEventListener('touchend', function(event) {
    const currentTime = new Date().getTime();
    const tapGap = currentTime - lastTapTime;

    if (tapGap < 300 && tapGap > 0) { // Detect double-tap (within 300ms)
        // Show the video and play it
        videoContainer.style.display = 'block';
        video.play();
    }

    lastTapTime = currentTime;
});
