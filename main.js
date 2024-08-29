let paper = document.querySelector("#paper");
let rock = document.querySelector("#rock");
let scissor = document.querySelector("#scissor");
let computerImage = document.querySelector(".computer");
let userImage = document.querySelector(".user");
let won = document.querySelector("h2");




paper.addEventListener("click", () => {
    const userchoice = "paper"
    const computerchoice = randomchoice();
    const winningMessage = compare(computerchoice , userchoice);
    computerImage.src = `./images/${computerchoice}.png`;
    userImage.src = `./images/${userchoice}.png`;
    won.textContent = winningMessage;
})
rock.addEventListener("click", () => {
    const userchoice = "rock";
    const computerchoice = randomchoice();
    const winningMessage = compare(computerchoice , userchoice);
    computerImage.src = `./images/${computerchoice}.png`
    userImage.src = `./images/${userchoice}.png`
    won.textContent = winningMessage;
})
scissor.addEventListener("click", () => {
    const userchoice = "scissor"
    const computerchoice = randomchoice();
    const winningMessage = compare(computerchoice , userchoice)
    computerImage.src = `./images/${computerchoice}.png`;   
    userImage.src = `./images/${userchoice}.png`;
    won.textContent = winningMessage;
})

function randomchoice() {
    let choice = ["rock", "paper", "scissor"];
    let randomchoice = Math.floor(Math.random() * choice.length)
    return choice[randomchoice]
}

function compare(computerchoice, userchoice) {
    if (userchoice === computerchoice) {
        return "TIE..!"
    }
    else if (userchoice === "rock" && computerchoice === "scissor"
        || userchoice === "scissor" && computerchoice === "paper"
        || userchoice === "paper" && computerchoice === "rock"
    ) {
        return "YOU WON..!"

    } else if (userchoice === "papaer" && computerchoice === "scissor"
        || userchoice === "scissor" && computerchoice === "rock"
        || userchoice === "rock" && computerchoice === "paper"
    ) {
        return "COMPUTER WON..!"

    }
}
