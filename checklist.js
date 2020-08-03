const inquirer = require('inquirer');
const clc = require('cli-color');

//HELPER METHODS

var checklistComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter CheckList Command 📟 : \n'
    }
  ];

var createCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter item name 📝 : \n'
    }
  ];

  var deleteCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter index of the item you want to delete 🗑 : \n'
    }
  ];

  var priorityCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter index of item you want to prioritize 📌 : \n'
    }
  ];


class CheckList {
    list = []

    constructor(){
        this.list = [];
    }

    toCommand(input){
        return input.toString().toUpperCase().trim();
    }
    
    ask(){
    console.log("Welcome to Checklist! 📄🖋");
    console.log("Type in \"help\" if you need to know the commands");
        inquirer.prompt(checklistComand).then(answers => {
        let command = this.toCommand(answers.command);
            if(command === "ADD") {
                this.create();
            }
            if(command === "PRIORITY"){
                this.priority();
            } 
            if(command === "RESTART"){
                this.restart();
            } 
            if(command === "VIEW"){
                this.view();
            } 

            if(command === "HELP"){
                this.help();
            } 
            if(command === "HELP") return;
            if(command === "QUIT" || command === "EXIT") return;
        })
    }
    create() {
    inquirer.prompt(createCommand).then(answers => {
        if(answers.command != ''){
            let newItem = {
                text: answers.command,
                priority: false,
                complete: false
            }
            this.list.push(newItem);
            console.log("Created Item!");
        }else{
            console.log("Item name invalid");
        }
        this.ask();
    })  
    }

    restart() {
        this.list = [];
        console.log("Checklist restarted!");
        this.ask();
    }

    priority() {
        inquirer.prompt(priorityCommand).then(answers => {
            let position = parseInt(answers.command);
            if(answers.command != '' &&  position && this.list[position]){
                this.list[position].priority = true;
            }else{
                console.log("Item index invalid");
            }
            this.ask();
        })
    }

    help(){
        console.log("COMMANDS");
        console.log("add: Add an Item");
        console.log("view: View and Edit Items");
        console.log("priority: Prioritize an Item");
        console.log("delete: Delete Items");
        console.log("restart: Restart Checklist");
        console.log("help: More Info");
        console.log("quit: Quit Checklist");
    }

    view(){
        let checkChoices = [];
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].priority){
                checkChoices.push(this.list[i].text + " ⭐️");
            }else{
                checkChoices.push(this.list[i].text);
            } 
        }

        let viewList = [
            {
                type: 'checkbox',
                name: 'command',
                message: 'Your Checklist',
                choices: checkChoices
            }
        ]
        inquirer.prompt(viewList).then((answers) => {
            let result = answers.command;
            for(let i = 0; i < result.length; i++){
                let answer = result[i];
                for(let j = 0; j < checkChoices.length; j++){
                    if(answer == checkChoices[j]){
                        this.list.splice(j, 1);
                    }
                }
            }
            this.ask();
        })
    }
  };

  module.exports = CheckList;