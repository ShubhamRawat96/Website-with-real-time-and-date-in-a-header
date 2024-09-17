// Select the image elements
const darkModeToggle = document.getElementById('darkModeToggle');
const eyeComfortToggle = document.getElementById('eyeComfortToggle');

// Function to toggle dark mode
darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.remove('eye-comfort-mode'); // Remove eye comfort mode if dark mode is activated
});

// Function to toggle eye comfort mode
eyeComfortToggle.addEventListener('click', function() {
  document.body.classList.toggle('eye-comfort-mode');
  document.body.classList.remove('dark-mode'); // Remove dark mode if eye comfort mode is activated
});
