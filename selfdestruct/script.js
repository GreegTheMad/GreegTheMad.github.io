const videoButton = document.getElementById('videoButton');
const videoContainer = document.getElementById('videoContainer');
const videoElement = document.getElementById('videoElement');
const clock = document.getElementById('clock');
const date = document.getElementById('date');

function updateClock() {
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();

clock.textContent = `${hours}:${minutes}:${seconds}`;
date.textContent = `${day}/${month}/${year}`;
}

if(videoElement) {
videoElement.style.pointerEvents = 'none';
document.addEventListener('keydown', (event) => {
const videoKeys = [' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
if (videoKeys.includes(event.key)) {
event.preventDefault();
}
});

setInterval(updateClock, 1000);
updateClock();

videoButton.addEventListener('click', () => {
if (videoContainer.style.display === 'block') {
if (videoElement.currentTime < 358) {
    videoElement.pause();
    videoElement.currentTime = 0;
    videoContainer.style.display = 'none';
    clock.style.display = 'block';
    date.style.display = 'block';
} else {
    alert('You cant turn back now!');
}
} else {
clock.style.display = 'none';
date.style.display = 'none';
videoContainer.style.display = 'block';
videoElement.play();
}
});

videoElement.addEventListener('ended', () => {
videoContainer.style.display = 'none';
clock.style.display = 'block';
date.style.display = 'block';
});
}