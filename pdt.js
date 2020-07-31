const inquirer = require('inquirer');
const clc = require('cli-color');
const CheckList = require('./checklist');

var askCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command 📟 :'
    }
  ];

  var checklistComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter CheckList Command 📟 :'
    }
  ];

//HELPER METHODS
function toCommand(input){
    return input.toString().toUpperCase().trim();
}

//MAIN COMMMANDS

function start(){
    console.log("Welcome to Productivity Dev Tools!");
    console.log("Type in \"help\" if you need to know the commands");
    ask();
}

function ask(){
    inquirer.prompt(askCommand).then(answers => {
        var command = toCommand(answers.command);
        if(command === "TODO") return;
        if(command === "CHECKLIST") checkList();
        if(command === "POMODORO") return;
        if(command === "NOTES") return;
        if(command === "HELP") return;
        if(command === "LINKS") return;
        if(command === "TIMER") return;
    })   
}

//CHECKLIST COMMANDS

function checkList(){
    let list = new CheckList();
    console.log("Welcome to Checklist!");
    console.log("Type in \"help\" if you need to know the commands");
    inquirer.prompt(checklistComand).then(answers => {
      let command = toCommand(answers.command);
        if(command === "CREATE") list.create();
        if(command === "DELETE") return;
        if(command === "PRIORITY") return;
        if(command === "RESTART") return;
        if(command === "HELP") return;
    })
}

//TODO COMMANDS


// Process 
start();