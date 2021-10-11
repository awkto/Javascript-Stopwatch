//Initialize variables
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let int = null;

//Start button functionality
document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

//Pause Timer functionality
document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});

//Reset timer functionality
document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});


function displayTimer() {
  milliseconds += 10;

  //increment +1 second if milliseconds reaches 1000
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    //increment +1 minute if seconds reaches 60
    if (seconds == 60) {
      seconds = 0;
      minutes++;

      //increment +1 hour if minutes reaches 60
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
