const inquirer = require('inquirer');
const clc = require('cli-color');

function start(){
    console.log("Welcome to Productivity Dev Tools!");
    console.log("Type in \"help\" if you need to know the commands");
}

function ask(){
    inquirer.prompt(askCommand).then(answers => {
        var command = answers.command.toString().toUpperCase().trim()
        if(command === "ADD"){
            addData()
        }else if(command === "VIEW"){
            viewData()
        }else if(command === "VIEWALL"){
            viewAllData()
        }else if(command === "HELP"){
          help()
        }else{
            console.log(clc.redBright("Invalid Command"))
            ask()
        }
    });
}