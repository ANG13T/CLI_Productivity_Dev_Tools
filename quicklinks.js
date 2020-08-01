const inquirer = require('inquirer');
const clc = require('cli-color');
const terminalLink = require('terminal-link');

//HELPER METHODS
function toCommand(input){
    return input.toString().toUpperCase().trim();
}

  
var linksCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Quick Links Command 📟 :'
    }
  ];

var createCommand = [
{
    type: 'input',
    name: 'command',
    message: 'Enter Link 📟 :'
}
];


var deleteCommand = [
    {
        type: 'input',
        name: 'command',
        message: 'Enter Item Index to Delete 📟 :'
    }
];


class QuickLinks {
    links = []
    constructor(){
        this.links = [];
        this.ask();
    }

    ask(){
        inquirer.prompt(linksCommand).then(answers => {
            let result = toCommand(answers.command);
            
            if(result != '' && result){
                if(result === "CREATE") {
                    this.create();
                }

                if(result === "DELETE") {
                    this.delete();
                }

                if(result === "VIEW") {
                    this.view();
                }

                if(result === "QUIT") return;
            }else{
                console.log("Invalid Command")
            }
        });
    }

    create(){
        inquirer.prompt(createCommand).then(answers => {
            let result = answers.command;
            if(result != ''){
                this.links.push(result);
            }else{
                console.log("Invalid link")
            }
            this.ask();
        })
    }

    delete(){
        inquirer.prompt(deleteCommand).then(answers => {
            let result = parseInt(answers.command) - 1;
            if(this.links[result]){
                this.links.splice(result, 1);
            }else{
                console.log("Invalid Index")
            }
            this.ask();
        })
    }

    view(){
        for(let link of this.links){
            const linkSRC = terminalLink(link, link);
            console.log(linkSRC);
        }
        this.ask();
    }
};

  module.exports = QuickLinks;