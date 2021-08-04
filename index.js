const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    startBtn: document.querySelector("#start"),
    stopBtn: document.querySelector("#stop"),
  }

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random(colors) * (max - min + 1) + min);
};  

function startThemeChange() {
    switchTheme = setInterval(timer, 1000);
}

function stopThemeChange() {
    clearInterval(switchTheme);
}

  refs.startBtn.addEventListener("click", startThemeChange);
  refs.stopBtn.addEventListener("click", stopThemeChange);