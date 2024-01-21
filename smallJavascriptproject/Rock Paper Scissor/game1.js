let userScore=0;
let machineScore=0;
let entities =document.querySelectorAll(".round");
let score1 =document.querySelector(".user-score");
let score2 =document.querySelector(".comp-score");
let announcement =document.querySelector(".announcement");

let compChoice=()=>
{
    let choice=['rock','paper','scissor'];
    let randomIdx=Math.floor(Math.random()*3);
    return choice[randomIdx];
};
let drawGame=()=>
{
    console.log("Our Game Is Draw.");
    announcement.innerText="Game Draw."
};
let showWinner=(userWin)=>
{
    if (userWin) {
        console.log("You Won The Game");
        announcement.innerText="You Won The Game";
        userScore++;
        score1.innerText=userScore;
    } else {
        console.log("You loose The Game");
        announcement.innerText="Machine Won The Game";
        machineScore++;
        score2.innerText=machineScore;
    }
};
let play=(userChoice)=>
{
    let machineChoice=compChoice();
    console.log("Machine Choice=",machineChoice);
    if (userChoice===machineChoice) {
        drawGame();
    } else {
        let userWin=true;
        if (userChoice==="rock") {
            userWin= machineChoice==="paper"?false:true;
        } else if(userChoice==="paper") {
            userWin= machineChoice==="scissor"?false:true;
        } else{
            userWin= machineChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};
entities.forEach((entity)=>{
    entity.addEventListener("click",()=>{
        let userChoice=entity.getAttribute("id");
        console.log("Your Choice=",userChoice);
        play(userChoice);
    });
});


