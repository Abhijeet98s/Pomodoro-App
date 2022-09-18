// fetching data from local storage
const pomodoroArray = JSON.parse(localStorage.getItem("timerArr"))
let pomodoroTime;
if (pomodoroArray) {
    pomodoroTime = JSON.parse(localStorage.getItem("timerArr"))[0]
}

// Timer
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");
let time = document.getElementById("time")
let btn = document.getElementById("setting")

// Buttons
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");

// Text
let pomoTimer = document.getElementById("pomo")
let breakTimer = document.getElementById("break")

// Sounds
let bell = new Audio("./Sound/bell.mp3")
let click = new Audio("./Sound/click.mp3")



let startTimer;

window.addEventListener("keyup", handleKeyPress);

time.addEventListener("load", setValue());


function setValue() {
    minHand.innerText = pomodoroTime == null ? "10" : pomodoroTime.min;
    secHand.innerText = "00";
    pomoTimer.innerText = "Pomodoro"
}

function startBreak() {
    minHand.innerText = pomodoroTime == null ? "05" : pomodoroTime.brTime;
    secHand.innerText = "00";
    pomoTimer.innerText = "Short Break";
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
    minHand.innerText = pomodoroTime == undefined ? "10" : pomodoroTime.min;
    secHand.innerText = "00";
    pomoTimer.innerText = "Pomodoro";
    clearInterval(startTimer);
    startTimer = undefined;
});

console.log(JSON.parse(localStorage.getItem("timerArr"))[0])