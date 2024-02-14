let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#User-score");
const compScorePara=document.querySelector("#Comp-score");

const drawGame=()=>{
    console.log("game was draw")
    msg.innerText="Draw! try again";
    msg.style.backgroundColor="#03191E";
}

const showWinner=(userWin,userChoice,compChoice)=>{
       if(userWin===true)
       {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

       }
       else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
       }
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= compChoice==="paper"? false :true;
        }
        else if(userChoice==="paper")
        {
            userWin= compChoice==="scissors"? false:true;
        }
        else{
            userWin= compChoice==="rock"? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];

}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
    });
});