const audio = new Audio('/assets/profiles/focus-music.mp3');
const workButton = document.querySelector('#start-work');

audio.loop = true;

workButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
      .then(() => {
        console.log('Audio started playing');
      })
      .catch(error => {
        console.error('Error playing audio:', error);
      });
  } else {
    audio.pause();
    console.log('Audio paused');
  }
});

// Pomodoro Logic
