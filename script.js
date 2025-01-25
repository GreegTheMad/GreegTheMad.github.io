const lightModeSwitch = document.getElementById('lightModeSwitch');

lightModeSwitch.addEventListener('click', () => {
    // Toggle light mode on the body
    document.body.classList.toggle('light-mode');

    // Toggle the switch appearance
    lightModeSwitch.classList.toggle('active');
});
