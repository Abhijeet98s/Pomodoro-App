let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");
let resetButton = document.getElementById("reset");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let time = document.getElementById("time")

let startTimer;

window.addEventListener("keyup", handleKeyPress);

time.addEventListener("load", setValue());

function setValue() {
    minHand.innerText = "25"
    secHand.innerText = "00";
}

function handleKeyPress(e) {
    if (startTimer == undefined) {
        playButton.click();
    }
    else if
        (startTimer != undefined) {
        pause.click();
    }

}

playButton.addEventListener("click", function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    }
    else {
        alert("Timer is already running")
    }
});

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
}

pauseButton.addEventListener("click", function () {
    clearInterval(startTimer);
    startTimer = undefined;
});

resetButton.addEventListener("click", function () {
    minHand.innerText = "25"
    secHand.innerText = "00";
    clearInterval(startTimer);
    startTimer = undefined;
});

