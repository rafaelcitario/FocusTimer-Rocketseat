import Sounds from "./sounds.js";
import { buttonPlay } from "./elements.js";

export default function Timer({ minutsDisplay, secondsDisplay, controls }) {
  let timerTimeOut;

  function updateDisplay(minutos, segundos) {
    minutsDisplay.textContent = String(minutos).padStart(2, 0);
    secondsDisplay.textContent = String(segundos).padStart(2, 0);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let minContent = Number(minutsDisplay.textContent);
      let secContent = Number(secondsDisplay.textContent);
      const isFinished = minContent <= 0 && secContent <= 0;
      if (isFinished) {
        buttonPlay.classList.add("noneDisplay");
        Sounds().kitchenTimer.play().finally();
        updateDisplay(0, 0);
        controls.stop();
        return;
      }
      if (secContent <= 0) {
        secContent = 5;
        --minContent;
      }

      updateDisplay(minContent, --secContent);
      Sounds().buttonPressAudio.play();
      countDown();
    }, 1000);
  }

  function stopTimer(minContent, secContent) {
    buttonPlay.classList.add("noneDisplay");
    updateDisplay(minContent, secContent);
    clearTimeout(timerTimeOut);
  }

  function pauseTimer() {
    clearTimeout(timerTimeOut);
  }

  return {
    countDown,
    updateDisplay,
    stopTimer,
    pauseTimer,
  };
}
