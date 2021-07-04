const TIME_LIMIT = 10;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function greet()
{
    alert("Hello there!!");
}
document.getElementById("timer").innerHTML = `
<div class="container">
  <span id="container-label" class="container__label">
    ${formatTime(timeLeft)}
  </span>
  </div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}
setTimeout(greet,((TIME_LIMIT+1)*1000));

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("container-label").innerHTML = formatTime(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}