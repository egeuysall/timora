const audio = new Audio('/assets/images/focus-music.mp3');
const workButton = document.querySelector('#start-work');
const workIcon = workButton.querySelector('.work-icon');
const workText = workButton.querySelector('span');

audio.loop = true;

const progressCircle = document.querySelector('#progress-circle');
const initialRadius = 140; // Starting radius of the circle
const totalSeconds = 25 * 60; // Total time for a Pomodoro in seconds
let mins = 25;
let secs = 0;
let timer = null;
let elapsedSeconds = 0; // Track how many seconds have passed

// Function to update the progress circle (shrink it)
function updateProgress() {
  const shrinkFactor = elapsedSeconds / totalSeconds; // Ratio of time passed
  const newRadius = initialRadius * (1 - shrinkFactor); // Shrink the circle's radius

  progressCircle.setAttribute("r", Math.max(0, newRadius)); // Ensure radius doesn't go negative
}

function updateDisplay() {
  const formattedMins = mins < 10 ? "0" + mins : mins;
  const formattedSecs = secs < 10 ? "0" + secs : secs;
  document.querySelector("#min").innerHTML = formattedMins;
  document.querySelector("#sec").innerHTML = formattedSecs;

  updateProgress(); // Update the progress circle each time the display updates
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  mins = 25;
  secs = 0;
  elapsedSeconds = 0; // Reset elapsed time
  progressCircle.setAttribute("r", initialRadius); // Reset the radius of the progress circle
  updateDisplay(); // Update display to show initial time
}

function startTimer() {
  timer = setInterval(() => {
    if (secs === 0) {
      if (mins === 0) {
        clearInterval(timer);
        timer = null;
        audio.pause();
        workIcon.src = '/assets/icons/play-icon.svg';
        workText.textContent = 'Start Work';
        return; // Exit if timer ends
      }
      mins--;
      secs = 59;
    } else {
      secs--;
    }
    elapsedSeconds++; // Increment elapsed seconds
    updateDisplay();
  }, 1000);
}

// Combined button click listener
workButton.addEventListener("click", () => {
  if (timer) {
    // Pause timer
    resetTimer();
    audio.pause();
    workIcon.src = '/assets/icons/play-icon.svg';
    workText.textContent = 'Start Work';
  } else {
    // Start timer
    resetTimer(); // Ensure clean start
    startTimer();
    audio.play()
      .then(() => {
        workIcon.src = '/assets/icons/pause-icon.svg';
        workText.textContent = 'Pause Work';
      })
      .catch(() => {});
  }
});