// const circle = document.querySelector("#circle");
// const box = document.querySelector("#box");
// const score = document.querySelector("#score");
// const btn = document.querySelector("#reset");
// // const pro = document.querySelector("#reset");
// const 

// let scoree = 0;
// let speed = 1000;
// let moveInterval;


// function move() {
//     let maxX = box.clientWidth - circle.clientWidth;
//     let maxY = box.clientHeight - circle.clientHeight;
//     let randomX = Math.floor(Math.random() * maxX);
//     let randomY = Math.floor(Math.random() * maxY);

//     circle.style.left = `${randomX}px`;
//     circle.style.top = `${randomY}px`;
// }


// var normalmode= function update() {
//     scoree++;
//     speed = Math.max(300, speed - 50);
//     score.textContent = scoree;
//     if (!moveInterval) {
    
//       move();
//       moveInterval = setInterval(move, speed);
//   }


//     if (moveInterval) {
//         clearInterval(moveInterval);
//     }


//     move();

    
//     moveInterval = setInterval(move, speed);
// }

// var promode=function update() {
//   scoree++;
//   speed = Math.max(300, speed - 200);
//   score.textContent = scoree;
//   if (!moveInterval) {
  
//     move();
//     moveInterval = setInterval(move, speed);
// }


//   if (moveInterval) {
//       clearInterval(moveInterval);
//   }


//   move();

  
//   moveInterval = setInterval(move, speed);
// }


// circle.addEventListener("click" , function() {
   
//   runModeFunction();
    

//     const clickSound = document.getElementById('clickSound');
//     clickSound.play();
//     clickSound.currentTime = 0;
// });

// circle.addEventListener("dblclick" , function() {
   
//   runModeFunction();
  

//   const clickSound = document.getElementById('clickSound');
//   clickSound.play();
//   clickSound.currentTime = 0;
// });
// btn.addEventListener("click",()=>{
//   clearInterval(moveInterval);
//   score.textContent = 0
//   scoree=0
//    circle.style.top="420px";
//    circle.style.left= "5px";
// });
// // pro.addEventListener("click",()=>{
  
// // })
// function runModeFunction() {
//   const selectedRadio = document.querySelector('input[name="mode"]:checked');
//   if (selectedRadio) {
//       const value = selectedRadio.value;
//       if (value === "pro") {
//           promode();
//       } else if (value === "Normal-Mode") {
//         normalmode();
//       }
//   } else {
//       console.log("No mode selected.");
//   }
// }
const circle = document.querySelector("#circle");
const box = document.querySelector("#box");
const score = document.querySelector("#score");
const btn = document.querySelector("#reset");

let scoree = 0;
let speed = 1000;
let moveInterval;

function move() {
    let maxX = box.clientWidth - circle.clientWidth;
    let maxY = box.clientHeight - circle.clientHeight;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

function normalMode() {
    scoree++;
    speed = Math.max(300, speed - 50);
    score.textContent = scoree;

    clearInterval(moveInterval);
    move();
    moveInterval = setInterval(move, speed);
}

function proMode() {
    scoree++;
    speed = Math.max(300, speed - 200);
    score.textContent = scoree;

    clearInterval(moveInterval);
    move();
    moveInterval = setInterval(move, speed);
}

circle.addEventListener("click", function() {
    runModeFunction();
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
    clickSound.currentTime = 0;
});

circle.addEventListener("dblclick", function() {
    runModeFunction();
    const clickSound = document.getElementById('clickSound');
    clickSound.play();
    clickSound.currentTime = 0;
});

btn.addEventListener("click", () => {
    clearInterval(moveInterval);
    score.textContent = 0;
    scoree = 0;
    circle.style.top = "420px";
    circle.style.left = "5px";
});

function runModeFunction() {
    const selectedRadio = document.querySelector('input[name="mode"]:checked');
    if (selectedRadio) {
        const value = selectedRadio.value;
        if (value === "pro") {
            proMode();
        } else if (value === "normal") {
            normalMode();
        }
    } else {
       window.alert("Choose a mode to continue")
    }
}