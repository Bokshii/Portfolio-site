const button = document.getElementById('toggle');
const body = document.body;
const footer = document.getElementById('footer');
const experience = document.getElementById('experience');
const images = document.querySelectorAll('img');

// Check localStorage for dark mode preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    footer.classList.add('dark-mode-footer');
    experience.classList.add('dark-mode'); // Add dark mode class to experience
    images.forEach(img => img.classList.add('dark-mode')); // Add dark mode class to images
    button.textContent = 'Light Mode';
}

if (button) {
    button.addEventListener('click', () => {
        // Toggle dark mode class on body
        body.classList.toggle('dark-mode');

        // Toggle dark mode class on other elements
        footer.classList.toggle('dark-mode-footer');
        experience.classList.toggle('dark-mode'); // Toggle dark mode for experience
        images.forEach(img => img.classList.toggle('dark-mode')); // Toggle dark mode for images

        // Update button text and save preference in localStorage
        if (body.classList.contains('dark-mode')) {
            button.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark'); // Save dark mode preference
        } else {
            button.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light'); // Save light mode preference
        }
    });
}

// Footer auto year
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;
