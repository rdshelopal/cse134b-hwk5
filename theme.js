// Select the button with sun and moon icons
const themeToggleButton = document.getElementById('theme-toggle');

// Load saved theme from localStorage or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateButtonIcon(savedTheme);

// Add click event to toggle between light and dark modes
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
});

// Function to update the button icon based on the current theme
function updateButtonIcon(theme) {
    if (theme === 'dark') {
        themeToggleButton.innerHTML = '☀️';
    } else {
        themeToggleButton.innerHTML = '🌙';
    }
}
