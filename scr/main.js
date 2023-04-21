import Controls from "../modules/controls.js";
import Timer from "../modules/timer.js";
import Sounds from "../modules/sounds.js";
import {
  buttonPlay,
  buttonSetTime,
  buttonPause,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  minutsDisplay,
  secondsDisplay,
} from "../modules/elements.js";

const controls = Controls({
  minutsDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonSetTime,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
});

const timer = Timer({
  minutsDisplay,
  secondsDisplay,
  controls,
});

const sounds = Sounds();

let minContent = Number(minutsDisplay.textContent);
let secContent = Number(secondsDisplay.textContent);

buttonSetTime.addEventListener("click", () => {
  const data = controls.getData();

  if (!data) {
    timer.updateDisplay(0, 0);
    return false;
  } else {
    buttonPlay.classList.toggle("noneDisplay");
    return data;
  }
});

buttonPlay.addEventListener("click", () => {
  controls.play();
  timer.countDown();
});

buttonPause.addEventListener("click", () => {
  controls.pause();
  timer.pauseTimer(minContent, secContent);
});
buttonStop.addEventListener("click", () => {
  controls.stop();
  timer.stopTimer(minContent, secContent);
});

buttonSoundOn.addEventListener("click", () => {
  controls.soundOn();
  sounds.bgAudio.pause();
});

buttonSoundOff.addEventListener("click", () => {
  controls.soundOff();
  sounds.bgAudio.play();
});
