// Get all the flower elements
const flowers = document.querySelectorAll('.flower');

// Loop through each flower and randomize the animation delay
flowers.forEach(flower => {
    const randomDelay = Math.random() * 2; // Between 0 and 2 seconds
    flower.style.animationDelay = `${randomDelay}s`;
});
