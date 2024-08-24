const circle = document.querySelector("#circle");
const box = document.querySelector("#box");
const score = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#highScore"); 
const btn = document.querySelector("#reset");
const clickSound = document.getElementById('clickSound');

let scoree = 0;
let speed = 1000;
let moveInterval;
let debounce = false;


let highScore = localStorage.getItem('highScore') || 0;
highScoreDisplay.textContent = highScore; 

function move() {
    let maxX = box.clientWidth - circle.clientWidth;
    let maxY = box.clientHeight - circle.clientHeight;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

function updateHighScore() {
    if (scoree > highScore) {
        highScore = scoree;
        localStorage.setItem('highScore', highScore); 
        highScoreDisplay.textContent = highScore; 
    }
}

function beginnerMode() {
    scoree++;
    speed = Math.max(300, speed - 10);
    score.textContent = scoree;
    updateHighScore();

    clearInterval(moveInterval);
    move();
    moveInterval = setInterval(move, speed);
}

function normalMode() {
    scoree++;
    speed = Math.max(300, speed - 50);
    score.textContent = scoree;
    updateHighScore();

    clearInterval(moveInterval);
    move();
    moveInterval = setInterval(move, speed);
}

function proMode() {
    scoree++;
    speed = Math.max(300, speed - 100);
    score.textContent = scoree;
    updateHighScore();

    let currentWidth = circle.clientWidth;
    let currentHeight = circle.clientHeight;

    let newWidth = Math.max(20, currentWidth * 0.9);
    let newHeight = Math.max(20, currentHeight * 0.9);

    circle.style.width = `${newWidth}px`;
    circle.style.height = `${newHeight}px`;

    clearInterval(moveInterval);
    move();
    moveInterval = setInterval(move, speed);
}

function runModeFunction() {
    const selectedRadio = document.querySelector('input[name="mode"]:checked');
    if (selectedRadio) {
        const value = selectedRadio.value;
        if (value === "pro") {
            proMode();
        } else if (value === "normal") {
            normalMode();
        } else if (value === "beginner") {
            beginnerMode();
        }
    } else {
        window.alert("Choose a mode to continue");
    }
}

circle.addEventListener("click", function() {
    if (!debounce) {
        debounce = true;
        runModeFunction();
        playClickSound();
        debounce = false;
    }
});

circle.addEventListener("dblclick", function() {
    if (!debounce) {
        debounce = true;
        runModeFunction();
        playClickSound();
        debounce = false;
    }
});

btn.addEventListener("click", () => {
    clearInterval(moveInterval);
    score.textContent = 0;
    scoree = 0;
    circle.style.top = "420px";
    circle.style.left = "5px";
    circle.style.width = "80px"; 
    circle.style.height = "80px"; 
});

function playClickSound() {
    if (clickSound) {
        clickSound.pause();
        clickSound.currentTime = 0;
        clickSound.play();
    }
}
