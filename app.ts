#! /usr/bin/env node

import inquirer from "inquirer";

//1) Computer will generate a rondom number done
//2) User input the number done
//3) Compare, user input with computer generated number and show result done

const rondomNumber =Math.floor(Math.random() * 5 + 1 );

const answer= await inquirer.prompt([
    {
        name:"userGuessedthenumber",
        type:"number",
        message:"Please guess the number: between in 1-5:",
    },
]);

if(answer.userGuessedthenumber === rondomNumber){
    console.log("Congratulation! You are Guess th right number.");
}
else{
    console.log("Sorry! Your are Guess the wrong number.");
}
