
  // Select all the flame elements
  const flames = document.querySelectorAll('.fuego');
  
  // Add an event listener to the whole document to listen for a click
  document.addEventListener('click', function() {
    flames.forEach(flame => {
      // Toggle the visibility of each flame
      flame.style.display = flame.style.display === 'none' ? 'block' : 'none';
    });
  });
