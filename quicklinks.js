const inquirer = require('inquirer');
const clc = require('cli-color');

//HELPER METHODS

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

var viewCommand = [
{
    type: 'input',
    name: 'command',
    message: 'Enter Quick Links Command 📟 :'
}
];

var deleteCommand = [
    {
        type: 'input',
        name: 'command',
        message: 'Enter Quick Links Command 📟 :'
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
            let result = answers.command;
            if(result != ''){
                if(command === "CREATE") {
                    this.create();
                    this.ask();
                }

                if(command === "DELETE") {
                    this.delete();
                    this.ask();
                }

                if(command === "VIEW") {
                    this.view();
                    this.ask();
                }

                if(command === "QUIT") return;
            }else{
                console.log("Invalid Command")
            }
        });
    }

    create(){

    }

    delete(){

    }

    view(){

    }
};

  module.exports = QuickLinks;