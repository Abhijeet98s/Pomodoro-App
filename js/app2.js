const inputMinutes = document.getElementById("inputMinutes")
const inputBreakTime = document.getElementById("inputBreakTime")

const setPomodoro = document.getElementById("setPomodoro")
const settings = document.getElementById("settings")
const heading = document.getElementById("timer-heading")

let timerArr = [];


setPomodoro.addEventListener("click", () => {
    const Minutes = inputMinutes.value
    const BreakTime = inputBreakTime.value
    console.log(`minutes => ${Minutes}`)
    console.log(`breakTime => ${BreakTime}`)

    function timer(min, brTime) {
        this.min = min;
        this.brTime = brTime;
    }

    timerArr.pop()

    let timer1 = new timer(`${Minutes}`, `${BreakTime}`)
    timerArr.push(timer1)
    

    localStorage.setItem("timerArr", JSON.stringify(timerArr))

    console.log(JSON.parse(localStorage.getItem("timerArr"))[0])

    settings.style.display = "none"
    heading.style.display = "none"
})