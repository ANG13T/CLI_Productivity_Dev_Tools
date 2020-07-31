const inquirer = require('inquirer');
const clc = require('cli-color');

//HELPER METHODS

var checklistComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter CheckList Command 📟 :'
    }
  ];

var createCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter item name 📟 :'
    }
  ];

  var deleteCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter index of the item you want to delete 📟 :'
    }
  ];

  var priorityCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter index of item you want to prioritize 📟 :'
    }
  ];


class CheckList {
    list = []

    constructor(){
        this.list = [];
        this.ask();
    }

    toCommand(input){
        return input.toString().toUpperCase().trim();
    }
    
    ask(){
    console.log("Welcome to Checklist!");
    console.log("Type in \"help\" if you need to know the commands");
        inquirer.prompt(checklistComand).then(answers => {
        let command = this.toCommand(answers.command);
            if(command === "CREATE") {
                this.create();
            }
            if(command === "DELETE"){
                this.delete();
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
            return "Item name invalid";
        }
        this.ask();
    })  
    }

    delete() {
        inquirer.prompt(deleteCommand).then(answers => {
            if(answers.command != '' && parseInt(answers.command)){
                let position = parseInt(answers.command) - 1;
                this.list.splice(position, 1);
                console.log("Deleted Item!");
            }else{
                return "Item index invalid";
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
            if(answers.command != '' &&  position && list[position]){
                list[position].priority = true;
            }else{
                return "Item index invalid";
            }
            this.ask();
        })
    }

    view(){
        let checkChoices = [];
        for(let i = 0; i < this.list.length; i++){
            checkChoices.push(this.list[i].text);
        }

        let viewList = [
            {
                type: 'checkbox',
                name: 'command',
                message: 'Your Checklist',
                choices: checkChoices
            }
        ]

        console.log(checkChoices.length);
        inquirer.prompt(viewList).then((answers) => {
            for(let i = 0; i < answers.length; i++){
                let answer = answers[i];
                console.log("answer", answer)
                for(let j = 0; j < checkChoices.length; j++){
                    console.log("choice", checkChoices[j])
                    if(answer == checkChoices[j]){
                        this.list[j].complete = true;
                    }
                }
            }

            console.log(this.list);
            // this.ask();
        })
    }
  };

  module.exports = CheckList;