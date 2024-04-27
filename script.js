let isRunning = false;
let timerInterval;
const display = document.getElementById('display');
let timeRemaining = 25 * 60; 

function updateDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            timeRemaining--;
            updateDisplay();
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                resetTimer();
            }
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    timeRemaining = 25 * 60;
    updateDisplay();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

updateDisplay();
