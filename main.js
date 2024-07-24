const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissor = document.querySelector("#scissor");
const computerImage = document.querySelector(".computer");
const userImage = document.querySelector(".user");
const result = document.querySelector("#result");
paper.addEventListener("click", () => {
    const userchoice = "paper";
    const computerchoice = randomchoice();
    const winningMessage = compare(userchoice, computerchoice);
    userImage.src = `${userchoice}.png`;
    computerImage = `${computerchoice}.png`;
    result.textContent = `${winningMessage};`
})
rock.addEventListener("click", () => {
    const userchoice = "rock";
    const computerchoice = randomchoice();
    const winningMessage = compare(userchoice, computerchoice);
    userImage.src = `${userchoice}.png`;
    computerImage = `${computerchoice}.png`;
    result.textContent = winningMessage;
})
scissor.addEventListener("click", () => {
    const userchoice = "scissor";
    const computerchoice = randomchoice();
    const winningMessage = compare(userchoice, computerchoice);
    userImage.src = `${userchoice}.png`;
    computerImage = `${computerchoice}.png`;
    result.textContent = winningMessage;
})

function randomchoice() {
    let choice = ["rock", "paper", "scissor"];
    let randomchoice = choice[Math.floor(Math.random() * choice.length)];
    return choice[randomchoice];
}

function compare(userchoice, computerchoice) {
    if (userchoice === computerchoice) {
        return "tie"
    }
    else if (userchoice === "rock" && computerchoice === "scissor"
        || userchoice === "scissor" && computerchoice === "paper"
        || userchoice === "paper" && computerchoice === "rock"
    ) {
        return "YOU WON..!" + " " + "your choise" + " " + userchoice + " &" + " " + "computer choise" + " " + computerchoice
    } else if (userchoice === "papaer" && computerchoice === "scissor"
        || userchoice === "scissor" && computerchoice === "rock"
        || userchoice === "rock" && computerchoice === "paper"
    ) {
        return "COMPUTER WON..!" + " " + "you choise" + " " + userchoice + "&" + " " + " " + computerchoice

    }
}
