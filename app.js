let numSquare = 12;

let colors = getColors(numSquare);
let rightAnswer = pickedColor();

const h1 = document.querySelector("h1");
const rgb = document.querySelector("#rgb");
const reset = document.querySelector("#new");
const tray = document.querySelector("#try");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const veryhard = document.querySelector("#veryhard");
const chwargoshakan = document.querySelectorAll(".square");

rgb.textContent = rightAnswer;

function getRandomColors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


function getColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(getRandomColors());

    }
    return arr;
}


function pickedColor() {
    const pickedColor = Math.floor(Math.random() * colors.length);
    return colors[pickedColor];
}

start();

function start() {
    veryhard.classList.add("easyHard");
    hard.classList.remove("easyHard");
    easy.classList.remove("easyHard");
    numSquare = 12;
    colors = getColors(numSquare);
    rightAnswer = pickedColor();
    rgb.textContent = rightAnswer;
    console.log(chwargoshakan.length);

    for (let i = 0; i < chwargoshakan.length; i++) {
        if (colors[i]) {
            chwargoshakan[i].style.display = "block";
            chwargoshakan[i].style.background = colors[i];
        } else {
            chwargoshakan[i].style.display = "none";
        }

    }
    h1.style.background = "orangered";
    reset.textContent = "New Color";
    tray.textContent = "";
}


veryhard.addEventListener("click", () => {
    veryhard.classList.add("easyHard");
    hard.classList.remove("easyHard");
    easy.classList.remove("easyHard");
    numSquare = 12;
    colors = getColors(numSquare);
    rightAnswer = pickedColor();
    rgb.textContent = rightAnswer;

    for (let i = 0; i < chwargoshakan.length; i++) {
        if (colors[i]) {
            chwargoshakan[i].style.display = "block";
            chwargoshakan[i].style.background = colors[i];
        } else {
            chwargoshakan[i].style.display = "none";
        }

    }
    h1.style.background = "orangered";
    reset.textContent = "New Color";
    tray.textContent = "";
});



hard.addEventListener("click", () => {
    hard.classList.add("easyHard");
    easy.classList.remove("easyHard");
    veryhard.classList.remove("easyHard");
    numSquare = 6;
    colors = getColors(numSquare);
    rightAnswer = pickedColor();
    rgb.textContent = rightAnswer;

    for (let i = 0; i < chwargoshakan.length; i++) {
        if (colors[i]) {
            chwargoshakan[i].style.display = "block";
            chwargoshakan[i].style.background = colors[i];
        } else {
            chwargoshakan[i].style.display = "none";
        }

    }
    h1.style.background = "orangered";
    reset.textContent = "New Color";
    tray.textContent = "";
});


easy.addEventListener("click", () => {
    hard.classList.remove("easyHard");
    easy.classList.add("easyHard");
    veryhard.classList.remove("easyHard");
    numSquare = 3;
    colors = getColors(numSquare);
    rightAnswer = pickedColor();
    rgb.textContent = rightAnswer;

    for (let i = 0; i < chwargoshakan.length; i++) {
        if (colors[i]) {
            chwargoshakan[i].style.display = "block";
            chwargoshakan[i].style.background = colors[i];
        } else {
            chwargoshakan[i].style.display = "none";
        }

    }
    h1.style.background = "orangered";
    reset.textContent = "New Color";
    tray.textContent = "";
});



reset.addEventListener("click", () => {
    colors = getColors(numSquare);
    rightAnswer = pickedColor();
    rgb.textContent = rightAnswer;
    for (let i = 0; i < chwargoshakan.length; i++) {
        chwargoshakan[i].style.background = colors[i];

    }
    h1.style.background = "orangered";
    reset.textContent = "New Color";
    tray.textContent = "";
})


for (let i = 0; i < chwargoshakan.length; i++) {
    chwargoshakan[i].addEventListener("click", function () {
         var clicked = chwargoshakan[i].style.background;
        if (clicked === rightAnswer) {
            tray.textContent = "Correct!!";
            reset.textContent = "Try Again?"
            h1.style.background = rightAnswer;
            for (let j = 0; j < chwargoshakan.length; j++) {
                chwargoshakan[j].style.background = rightAnswer;
            }
            
        } else if (clicked !== rightAnswer) {
            tray.textContent = "Wrong!!";
            this.style.background = "#232323";
        }

    });

}


