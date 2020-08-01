const inquirer = require('inquirer');
var beep = require('beepbeep');

var timerCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'How Many Minuetes Would You Like the Timer To Run (60min MAX) 📟 :'
    }
  ];

class Timer {
    play(){
        inquirer.prompt(timerCommand).then(answers => {
            let timeMin = parseInt(answers.command);
            if(timeMin){
                this.startTimer(timeMin);
            }else{
                console.log("Invalid Time");
            }
        })
    }
    startTimer(duration) {
        let timeDuration = duration * 60;
        var timer = timeDuration, minutes, seconds;
        var refreshIntervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            console.log(minutes + ":" + seconds);
    
            if (--timer < 0) {
                console.log("TIMER IS UP");
                beep(2);
                clearInterval(refreshIntervalId);
            }
        }, 1000);
    }
}

module.exports = Timer;