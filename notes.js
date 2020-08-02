const inquirer = require('inquirer');

function toCommand(input){
    return input.toString().toUpperCase().trim();
}

var notesCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Notes Command 📟 :'
    }
  ];

  var createTitleCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Note Title 📟 :'
    }
  ];

  var createBodyCommand = [
    {
      type: 'editor',
      name: 'command',
      message: 'Enter Note Text 📟 :'
    }
  ];

  var deleteCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Index of Item you Want to Delete 📟 :'
    }
  ];

class Notes {
    notes = [];
    //title and body
    constructor(){
        this.notes = [];
    }
    ask(){
        inquirer.prompt(notesCommand).then(answers => {
            var result = toCommand(answers.command);
            if(result === "ADD"){
                this.create();
            }
            if(result === "VIEW"){
                this.view();
            }
            if(result === "DELETE"){
                this.delete();
            }
            if(result === "QUIT") return;
        })
    }

    view(){
        var choices = [];
        for(let note of this.notes){
            choices.push(note.title);
        }
        var viewCommand = [
            {
              type: 'rawlist',
              name: 'command',
              message: 'Your Notes',
              choices: choices
            }
        ];

        inquirer.prompt(viewCommand).then(answers => {
            var result = answers.command;
            for(let note of this.notes){
                if(note.title == result){
                    console.log(note.title);
                    var line = '';
                    for(var i = 0; i < note.title.length; i++){
                        line += "-";
                    }
                    console.log(line);
                    console.log(note.body);
                }
            }
        })
    }

    create(){
        let noteData = {
            title: '',
            body: ''
        }

        inquirer.prompt(createTitleCommand).then(answers => {
            var resultTitle = answers.command;
            if(resultTitle != ''){
                noteData.title = resultTitle;
            }else{
                console.log("Invalid Title")
            }
            inquirer.prompt(createBodyCommand).then(bodyAnswers => {
                var resultBody = bodyAnswers.command;
                if(resultBody != ''){
                    noteData.body = resultBody;
                    this.notes.push(noteData);
                }else{
                    console.log("Invalid text")
                }

                this.ask();
            })
        })
    }

    delete(){
        inquirer.prompt(deleteCommand).then(answers => {
            var result = parseInt(answers.command);
            if(result && this.notes[result]){
                this.notes.splice(result, 1);
            }else{
                console.log("Invalid Index");
            }

            this.ask();
        })
    }
}

module.exports = Notes;