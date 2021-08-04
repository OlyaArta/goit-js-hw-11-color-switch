const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
  }

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}; 

let switchTheme = null;

function changeBG() {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length)];
}

function startThemeChange() {
    switchTheme = setInterval(changeBG, 1000);
    startBtn.setAttribute("disabled", true);
    stopBtn.removeAttribute("disabled");
}

function stopThemeChange() {
   clearInterval(switchTheme);
   startBtn.removeAttribute("disabled");
   stopBtn.setAttribute("disabled", true);
}

  refs.startBtn.addEventListener("click", startThemeChange);
  refs.stopBtn.addEventListener("click", stopThemeChange);