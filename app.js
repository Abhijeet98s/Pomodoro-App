// fetching data from local storage
const pomodoroTime = JSON.parse(localStorage.getItem("timerArr"))[0]
const pomodoroArray = JSON.parse(localStorage.getItem("timerArr"))
console.log(pomodoroArray.length);

// Timer
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");
let time = document.getElementById("time")

// Buttons
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");

// Text
let pomoTimer = document.getElementById("pomo")
let breakTimer = document.getElementById("break")

// Sounds
let bell = new Audio("./bell.mp3")
let click = new Audio("./click.mp3")

// let info = document.getElementById("info-container")


let startTimer;

window.addEventListener("keyup", handleKeyPress);

time.addEventListener("load", setValue());


function setValue() {
    minHand.innerText = pomodoroArray ? pomodoroTime.min : "10";
    secHand.innerText = "00";
    breakTimer.innerText = "";
    // info.innerHTML = `<div> Pomodoro </div>`
}

function startBreak() {
    minHand.innerText = pomodoroArray.length ? pomodoroTime.brTime : "05";
    secHand.innerText = "00";
    pomoTimer.innerText = "Break";
    // pomoTimer.style.display = "none"
    // breakTimer.style.display = "block"
}


function handleKeyPress() {
    if (startTimer == undefined) {
        startButton.click();
    }
    else if
        (startTimer != undefined) {
        pause.click();
    }
}


// Start the timer
startButton.addEventListener("click", function () {
    click.play()
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    }
    else {
        alert("Timer is already running")
    }
});


// Timer countdown
function timer() {
    if (secHand.innerText != 0) {
        secHand.innerText--;
    }
    else if
        (minHand.innerText != 0 && secHand.innerText == 0) {
        secHand.innerText = 59;
        minHand.innerText--;
        if (minHand.innerText < 10) {
            minHand.innerText = "0" + minHand.innerText;
        }
    }
    else if (minHand.innerText == 0 && secHand.innerText == 0) {
        bell.play();
        alert("Time is up");
        startBreak();
        clearInterval(startTimer);
        startTimer = undefined;
    }
}


// Pause the timer
pauseButton.addEventListener("click", function () {
    clearInterval(startTimer);
    startTimer = undefined;
});


// Reset the timer
resetButton.addEventListener("click", function () {
    minHand.innerText = pomodoroTime.min;
    secHand.innerText = "00";
    pomoTimer.innerText = "";
    breakTimer.innerText = "Pomodoro"
    clearInterval(startTimer);
    startTimer = undefined;
});

console.log(JSON.parse(localStorage.getItem("timerArr"))[0])