let number = document.getElementById("number");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let time = document.getElementById("value");
let time_run;
let value_time; // giá trị thời gian khi nhấn stop
start.addEventListener("click", function () {
    if (number.value == "") {
        return;
    }
    let cout = Number(number.value);
    clearInterval(time_run);
    time_run = setInterval(function () {
        time.innerText = cout--;
        if (cout < -1) {
            time.innerText = "Time's up";
            clearInterval(time_run);
        }
    }, 700);
})
stop.addEventListener("click", function () {
    if (time.innerText == '0' || time.innerText == "Time's up") {
        return;
    }
    if (stop.innerText == "Stop") {
        value_time = time.innerText;
        clearInterval(time_run);
        time.innerText = "Stopped";
        stop.innerText = "Continue";
    }
    else{
        clearInterval(time_run);
        setTimeout(() => {
            stop.innerText = "Stop";
        }, 700);
        time_run = setInterval(function () {
            time.innerText = value_time--;
            if (value_time < -1) {
                time.innerText = "Time's up";
                clearInterval(time_run);
            }
        }, 700);
    }
})