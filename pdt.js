const inquirer = require('inquirer');
const clc = require('cli-color');
const CheckList = require('./checklist');
const Timer = require('./timer');
const QuickLinks = require('./quicklinks');
const Notes = require('./notes');
const Todo = require('./todo');

var askCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Command 📟 :'
    }
  ];

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
        if(command === "TODO" || command === "TODOLIST" || command === "TODOS") setTodos();
        if(command === "CHECKLIST") checkList();
        if(command === "POMODORO") return;
        if(command === "NOTES" || command === "NOTE") setNotes();
        if(command === "HELP") return;
        if(command === "LINKS" || command === "QUICKLINKS") setLinks();
        if(command === "TIMER") setTimer();
    })   
}

//CHECKLIST COMMANDS
function checkList(){
  let CHECKLIST = new CheckList();
}

//TODO COMMANDS


//TIMER
function setTimer(){
  let timer = new Timer();
  timer.play();
}

// LINKS
function setLinks(){
  let links = new QuickLinks();
}

//NOTES
function setNotes(){
  let notes = new Notes();
}

//TODO
function setTodos(){
  let todos = new Todo();
}

// Process 
start();