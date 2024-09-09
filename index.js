const btns = document.querySelectorAll("button");
const humanCount = document.querySelector('.game__player-count');
const computerCount = document.querySelector('.game__computer-count');
const result = document.querySelector('.game__choice');
const reset = document.querySelector('.reset');

let computerScore = 0;
let humanScore = 0;
let roundScore = 0;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        play(computedChoice(), btn.value)
        end()
    })
})

reset.addEventListener('click', () => {
    computerScore = 0;
    humanScore = 0;
    roundScore = 0;
    result.innerText = "Hm..."
    btns.forEach(btn => btn.style.opacity = "1");
    humanCount.innerText = `${humanScore}`;
    computerCount.innerText = `${computerScore}`;
})

function end() {
    if (roundScore === 5) {
        btns.forEach(btn => btn.style.opacity = ".1");
    }

}

function computedChoice() {
    const number = Math.random()
    if (number < 1 / 3) {
        return "paper"
    } else if (number < 2 / 3) {
        return "rock"
    } else {
        return "scissors"
    }
}

function play(computer, human) {
    if (human === "paper" && computer === "rock" ||
        human === "rock" && computer === "scissors" ||
        human === "scissors" && computer === "paper") {
        roundScore += 1;
        humanScore += 1;
        humanCount.innerText = `${humanScore}`
        result.innerText = "Human Win!"
    } else if (human === computer) {
        roundScore += 1;
        result.innerText = "Draw!"
    } else {
        roundScore += 1;
        computerScore += 1;
        computerCount.innerText = `${computerScore}`
        result.innerText = "Computer Win!"
    }
}
