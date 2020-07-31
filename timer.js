const inquirer = require('inquirer');

var timerCommand = [
    {
      type: 'input',
      name: 'command',
      message: 'How Many Minuetes Would You Like the Timer To Run (60min MAX) 📟 :'
    }
  ];

class Timer {
    startTimer(duration) {
        let timeDuration = duration * 60;
        var timer = timeDuration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            console.log(minutes + ":" + seconds);
    
            if (--timer < 0) {
                timer = timeDuration;
            }
        }, 1000);
    }
}

module.exports = Timer;