let _false = document.getElementById("false");
let _true = document.getElementById("true");
let time = document.getElementById("time_color");
let level = document.getElementById("level");
let first = document.getElementById("first");
let second = document.getElementById("second");
let result = document.getElementById("result");
let score = document.getElementById("score");
let timer = document.getElementById("timer");
let check_win;


// click true false
_false.addEventListener("click", function () {
    if (score.checked == true && timer.checked == true) {
        time_stop();
        time_start();
        click_level_false();
    }
    else if (score.checked == true) {
        click_level_false();
    }
    else if (timer.checked == true) {
        time_stop();
        time_start();
    }
    click_audio_false();
    input();
})
_true.addEventListener("click", function () {
    if (score.checked == true && timer.checked == true) {
        time_stop();
        time_start();
        click_level_true();
    }
    else if (score.checked == true) {
        click_level_true();
    }
    else if (timer.checked == true) {
        time_stop();
        time_start();
    }
    click_audio_true();
    input();
})
// ------------------time---------------
let time_run;
let width;
function time_start() {
    time_run = setInterval(function () {
        if (width == 0) {
            time.style.width = width + '%';
            if (level.innerText != 0) {
                level.innerText = --level.innerText;
            }
            clearInterval(time_run)
        }
        else {
            width--;
            time.style.width = width + '%';
        }
    }, level_time())
}
function level_time() {
    if (level.innerText >= 20) {
        return 15;
    }
    else if (level.innerText >= 10) {
        return 30;
    }
    return 50;
}
function time_stop() {
    clearInterval(time_run);
    width = 100;
    time.style.width = width + '%';
}
//-----------------random số--------------------------
function random() {
    return Math.floor(Math.random() * 10);
}
function random_result() {
    return Math.floor(Math.random() * 19);
}
function input() {
    let first_RD = random();
    let second_RD = random();
    let result_RD = random_result();
    first.innerText = first_RD;
    second.innerText = second_RD;
    if (random_result() % 2 == 0) {
        result.innerText = first_RD + second_RD;
        check_win = 1;
    }
    else {
        result.innerText = result_RD;
        if ((first_RD + second_RD) == result_RD) {
            check_win = 1;
        }
        else{
            check_win = -1;
        }
    }

}
input();
//-------------------- level ----------------------------
function click_level_true() {
    let value_level = level.innerText;
    if (check_win == 1) {
        level.innerText = ++value_level;
    }
    else {
        if (level.innerText == 0) {
            return;
        } else {
            level.innerText = --value_level;
        }
    }
}
function click_level_false() {
    let value_level = level.innerText;
    if (check_win == 1) {
        if (level.innerText == 0) {
            return;
        } else {
            level.innerText = --value_level;
        }
    }
    else {
        level.innerText = ++value_level;
    }
}
//---------------------audio--------------
function click_audio_true() {
    let audio_true = new Audio("round_true.mp3");
    let audio_false = new Audio("round_false.mp3");
    if (check_win == 1) {
        audio_true.play();
    }
    else {
        audio_false.play();
    }
}
function click_audio_false() {
    let audio_true = new Audio("round_true.mp3");
    let audio_false = new Audio("round_false.mp3");
    if (check_win == 1) {
        audio_false.play();
    }
    else {
        audio_true.play();
    }
}
