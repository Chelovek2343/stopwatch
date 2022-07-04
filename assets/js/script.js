const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stopTimer = document.getElementById('stopTimer');
const reset = document.getElementById('reset');

let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let interval;

start.addEventListener('click', () => {
    if (!interval) {
        clearInterval(interval);
    }
    interval = setInterval(count, 10);
});

stopTimer.addEventListener('click', () => {
    clearInterval(interval);
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    timer.textContent = `${minutes}0:${seconds}0:${milliseconds}0`;
});

function count() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let mill = milliseconds < 10 ? milliseconds : milliseconds;

    timer.textContent = `${m}:${s}:${mill}`;
}
