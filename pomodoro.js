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
        this.startTimer(25, "work", reps);
    }

    startTimer(duration, message, amount) {
        let timeDuration = duration * 60;
        var timer = timeDuration, minutes, seconds;
        var refreshIntervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            console.log(minutes + ":" + seconds);
    
            if (--timer < 0) {
                console.log(message);
                console.log('\u0007');
                clearInterval(refreshIntervalId);
                if(amount === 0){
                    console.log("POMODORO COMPLETE!!!");
                    this.ask();
                }
                if(message === "work"){
                    this.startTimer(5, "break", amount);
                }

                if(message === "break"){
                    amount--;
                    if(amount === 0){
                        console.log("POMODORO COMPLETE!!!");
                        return;
                    }else{
                        this.startTimer(25, "work", amount);
                    }

                }
            }
        }, 1000);
    }

}

module.exports = Pomodoro;