const inquirer = require('inquirer');


function toCommand(input){
    return input.toString().toUpperCase().trim();
}

var todoCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Todo Command'
    }
];

var addCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter task name'
    }
];



class Todo {
    todos = [];

    constructor(){
        this.todos = [];
    }

    ask(){
        inquirer.prompt(todoCommand).then(answers => {
            var result = toCommand(answers.command);
            if(result != ''){
                if(result === 'CREATE'){
                    this.create();
                }

                if(result === 'VIEW'){
                    this.view();
                }

                if(result === 'DELETE'){
                    this.delete();
                }

                if(result === 'QUIT') return;
            }else{
                console.log("Invalid Command");
                this.ask();
            }
        })
    }

    create(){
        inquirer.prompt(addCommand).then(answers => {
            var result = answers.command;
            if(result != ''){
                this.todos.push(result);
            }else{
                console.log("Invalid Input");
            }
            this.ask();
        })
    }

    view(){
        for(let todo of this.todos){
            console.log(`- ${todo}`);
        }
        this.ask();
    }

    delete(){ //will be num select
        var deleteCommand = [
            {
              type: 'input',
              name: 'command',
              message: 'Enter index to delete'
            }
        ];

        inquirer.prompt(deleteCommand).then(answers => {
            var result = parseInt(answers.command) - 1;

            if(result && this.todos[result]){
                this.todos.splice(result, 1);
            }else{
                console.log("Invalid index");
            }
            
            this.ask();
        })
    }

}

module.exports = Todo;