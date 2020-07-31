const inquirer = require('inquirer');
const clc = require('cli-color');

var createCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter item name 📟 :'
    }
  ];


class CheckList {
    constructor(){}
    list = []
    create() {
    inquirer.prompt(createCommand).then(answers => {
        if(answers.command != ''){
            let newItem = {
                text: answers.command,
                priority: false,
                complete: false
            }
            this.list.push(newItem);
            console.log("da list", this.list);
            return "Item created!";
        }else{
            return "Item name invalid";
        }
    })
    
      
    }

    delete(index) {
       let position = index - 1;
       if(list[position]){
        list.splice(position, 1);
        return "Deleted Item!";
       }else{
        return "Task does not exist";
       }
    }
    restart() {
        this.list = [];
    }

    priority(index) {
        let position = index - 1;
        if(list[position]){
            list[position].priority = true;
            return "Deleted Item!";
           }else{
            return "Task does not exist";
           }
    }

  };

  module.exports = CheckList;