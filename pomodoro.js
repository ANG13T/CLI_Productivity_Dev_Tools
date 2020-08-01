const inquirer = require('inquirer');


var pomodoroCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Pomodoro REPS: '
    }
];


class Pomodoro {
    reps = 0;

    constructor(){
        this.reps = 0;
        this.ask();
    }

    ask(){
        inquirer.prompt(pomodoroCommand).then(answers => {
            var result = parseInt(answers.command);
            if(result){
                this.reps = result;
                this.setPomodoro(this.reps);
            }else{
                console.log("Invalid Number");
                this.ask();
            }
        })
    }

    setPomodoro(reps){
        for(let i = 0; i < reps; i++){
            //do timer stufff
        }
    }


}

module.exports = Todo;