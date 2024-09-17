// Select the image elements for toggling modes
const darkModeToggle = document.getElementById('darkModeToggle');
const eyeComfortToggle = document.getElementById('eyeComfortToggle');

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.remove('eye-comfort-mode'); // Ensure Eye Comfort mode is deactivated
});

// Toggle Eye Comfort Mode
eyeComfortToggle.addEventListener('click', () => {
    document.body.classList.toggle('eye-comfort-mode');
    document.body.classList.remove('dark-mode'); // Ensure Dark mode is deactivated
});

// Time and Date formatting
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * Format time in 12-hour format
 * @param {Date} date
 * @returns {string} - formatted time string
 */
function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;
    
    return `${hours12.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * Format date
 * @param {Date} date
 * @returns {string} - formatted date string
 */
function formatDate(date) {
    const DAYS = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const MONTHS = [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

// Update the time and date every second
setInterval(() => {
    const now = new Date();

    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
}, 1000);
// Select the necessary elements
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle the menu when the menu button is clicked
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden'); // Toggle visibility of the menu
});

// Close the dropdown if clicked outside of the menu
window.addEventListener('click', function (event) {
    // Check if the clicked element is outside the menu or the toggle button
    if (!event.target.closest('#menuToggle') && !event.target.closest('#dropdownMenu')) {
        dropdownMenu.classList.add('hidden'); // Hide the menu if clicked outside
    }
});
