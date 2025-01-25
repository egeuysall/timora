const audio = new Audio('/assets/images/focus-music.mp3');
const workButton = document.querySelector('#start-work');
const workIcon = workButton.querySelector('.work-icon');
const workText = workButton.querySelector('span');

audio.loop = true;

workButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
      .then(() => {
        workIcon.src = '/assets/icons/pause-icon.svg';
        workText.textContent = 'Pause Work';
      })
      .catch(() => {});
  } else {
    audio.pause();
    workIcon.src = '/assets/icons/play-icon.svg';
    workText.textContent = 'Start Work';
  }
});

// Pomodoro Logic

// Clone for Inspiration: https://github.com/packetcode/pomodoro

const mins = document.querySelector("#min")
const secs = document.querySelector("#sec")