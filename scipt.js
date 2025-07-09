let userScore = 0;
let compScore =0;
const choices = document.querySelectorAll(".box1 button")

// console.log(choices)
const compChoice = ()=>{
    let options = ['rock','paper','scissor']
    let computerChoice = options[Math.floor(Math.random()*3)];
    console.log("Comp choice:-",computerChoice)
    return computerChoice;
}

const playGame =(userChoice)=>{
    const computerChoice = compChoice();
if (userChoice == 'rock' && computerChoice =='paper') {
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
        document.querySelector(".box3 button").innerText = "You lost!"
        document.querySelector(".box3 button").style.backgroundColor = "red";
        // document.querySelector(".msg-box h1").innerText = `${computerChoice} covered the ${userChoice}`;
        // document.querySelector(".msg-box").style.color = '#f00'

}
else if (userChoice == 'rock' && computerChoice=='scissor') {
    userScore++;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector(".box3 button").innerText = "You won!"
    document.querySelector(".box3 button").style.backgroundColor = "green";
    //  document.querySelector(".msg-box h1").innerText = `${userChoice} crushed ${computerChoice}`;
    //  document.querySelector(".msg-box").style.color = 'green'




}
else if (userChoice == 'paper' && computerChoice =='scissor') {
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
        document.querySelector(".box3 button").innerText = "You lost!"
        document.querySelector(".box3 button").style.backgroundColor = "red";
        //  document.querySelector(".msg-box h1").innerText = `${computerChoice} cut the ${userChoice}`
        //  document.querySelector(".msg-box").style.color = '#f00'



}
else if (userChoice == 'scissor' && computerChoice =='paper') {
    userScore++;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector(".box3 button").innerText = "You won!"
    document.querySelector(".box3 button").style.backgroundColor = "green";
    //  document.querySelector(".msg-box h1").innerText = `${userChoice} covered the ${computerChoice}`
    //  document.querySelector(".msg-box").style.color = 'green'




}
else if (userChoice == 'scissor' && computerChoice =='rock') {
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
        document.querySelector(".box3 button").innerText = "You lost!"
        document.querySelector(".box3 button").style.backgroundColor = "red";
        //  document.querySelector(".msg-box h1").innerText = `${computerChoice} crushed the ${userChoice}`
        // document.querySelector(".msg-box").style.color = '#f00'




}
else if (userChoice == 'paper' && computerChoice =='rock') {
    userScore++;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector(".box3 button").innerText = "You won!"
    document.querySelector(".box3 button").style.backgroundColor = "green";
    //  document.querySelector(".msg-box").innerText = `${userChoice} covered the ${computerChoice}`;
    //  document.querySelector(".msg-box").style.color = 'green'

     



}
else{
    // compScore += 0.5;
    // userScore += 0.5;
    document.querySelector("#comp-score").innerText = compScore;
    document.querySelector("#user-score").innerText = userScore;
        document.querySelector(".box3 button").innerText = "It's Draw!"
    document.querySelector(".box3 button").style.backgroundColor = "blue";
     document.querySelector(".msg-box").innerText = `${computerChoice} == ${userChoice}`;
     document.querySelector(".msg-box").style.color = 'blue'



}

}


choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=> {
     let userChoice = choice.getAttribute("id");
     console.log(`User Choice ${userChoice}`)
     playGame(userChoice);
     if (userScore>compScore) {
        document.querySelector(".msg-box").innerText = "You are winning....."
     document.querySelector(".msg-box").style.color = 'green'

     }
     else if (userScore<compScore) {
        document.querySelector(".msg-box").innerText = "You are loosing....."
     document.querySelector(".msg-box").style.color = 'red'

     }

     else{
        document.querySelector(".msg-box").innerText = "Eqal Postions....."
     document.querySelector(".msg-box").style.color = 'blue'


     }
     
    })
})
let resetBtn = document.querySelector(".box3 button");
resetBtn.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    document.querySelector("#comp-score").innerText = compScore;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector(".msg-box").innerText = "Eqal Postions....."
    document.querySelector(".msg-box").style.color = 'blue'


})