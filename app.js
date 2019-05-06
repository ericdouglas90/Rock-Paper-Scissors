let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const result  = document.querySelector('.result > p')
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')

function choiceComputer() {
    const choice = ['r', 'p', 's']
    const choiceRandom = Math.floor(Math.random() * 3)
    return choice[choiceRandom];
}

function converteNameChoice(letter) {
    if(letter === "r") return "Rock"
    if(letter === "p") return "Paper"
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUseWord = "user".fontsize(3).sup()
    const smallComputerWord = "comp".fontsize(3).sup()
    result.innerHTML = `${converteNameChoice(userChoice)}${smallUseWord} beats ${converteNameChoice(computerChoice)}${smallComputerWord}. You Win!`
    document.getElementById(userChoice).classList.add('green-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow')
    },300)
}

function lose(userChoice, computerChoice) {
    computerScore++
    computerScore_span.innerHTML = computerScore
    const smallUseWord = "user".fontsize(3).sup()
    const smallComputerWord = "comp".fontsize(3).sup()
    result.innerHTML = `${converteNameChoice(userChoice)}${smallUseWord} loses to  ${converteNameChoice(computerChoice)}${smallComputerWord}. You LOSE!`
    document.getElementById(userChoice).classList.add('red-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow')
    },300)
}

function draw(userChoice, computerChoice){
    const smallUseWord = "user".fontsize(3).sup()
    const smallComputerWord = "comp".fontsize(3).sup()
    result.innerHTML = `${converteNameChoice(userChoice)}${smallUseWord} equal it's ${converteNameChoice(computerChoice)}${smallComputerWord}. You DRAWWWW!`
    document.getElementById(userChoice).classList.add('gray-glow')
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('gray-glow')
    },300)
}

function gamer(userChoice) {
    const computerChoice = choiceComputer();
    switch(userChoice + computerChoice){
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rs":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice)
            break
        }
}
function main(){
    rock.addEventListener('click', () => gamer("r"))
    
    paper.addEventListener('click', () => gamer("p"))
    
    scissors.addEventListener('click', () => gamer("s"))
}


main()

