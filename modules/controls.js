export default function Controls({
  minutsDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonSetTime,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
}) {
  function getData() {
    const setMinuts = Number.parseInt(prompt("minutos: "));

    if (setMinuts >= 60) {
      minutsDisplay.textContent = parseInt(setMinuts / 60);
      secondsDisplay.textContent = parseInt(setMinuts % 60);
    } else {
      minutsDisplay.textContent = parseInt(setMinuts);
    }

    minutsDisplay.textContent = minutsDisplay.textContent.padStart(2, 0);
    secondsDisplay.textContent = secondsDisplay.textContent.padStart(2, 0);

    if (minutsDisplay >= 0 || secondsDisplay >= 0) {
      buttonPlay.classList.remove("noneDisplay");
    } else {
      buttonPlay.classList.add("noneDisplay");
    }

    return setMinuts;
  }

  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSetTime.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function stop() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonStop.classList.add("hide");
    buttonSetTime.classList.remove("hide");
  }

  function soundOn() {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
  }
  function soundOff() {
    buttonSoundOff.classList.add("hide");
    buttonSoundOn.classList.remove("hide");
  }

  return {
    getData,
    play,
    pause,
    stop,
    soundOn,
    soundOff,
    minutsDisplay,
    secondsDisplay,
  };
}
