"use strict";

window.onload = function () {
    let hours = 0;
    let minutes = 0;
    let seconds = 0; 
    let milliseconds = 0; 
    let startButton = document.getElementById('playButton');
    let pauseButton = document.getElementById('pauseButton');
    let stopButton = document.getElementById('stopButton');
    let buttonReset = document.getElementById('resetButton');
    let run_timer = false

    let counter = 0
    let countstring = counter;

    let counterButtonPlus = document.getElementById('counterPlus')
    let counterButtonSub = document.getElementById('counterSub')

    counterButtonPlus.onclick = function() {
        counter +=1
        countstring = counter
        document.getElementById('counter').innerHTML = countstring;
    }



    counterButtonSub.onclick = function() {
        counter -=1
        countstring = counter
        document.getElementById('counter').innerHTML = countstring;
    }


  
    startButton.onclick = function() {
        run_timer = true
        startTimer();
    }

    
    pauseButton.onclick = function() {
        if (run_timer == false){
            run_timer = true
        }else if (run_timer == true){
            run_timer = false
        }
    }

   
    buttonReset.onclick = function() {
        run_timer = false;
        resetStopwatch();
    }
    
    function startTimer () {

        let hrString = hours;
        let minString = minutes;
        let secString = seconds;
        let milliString = milliseconds;

        if (run_timer){
            setTimeout(1)
            milliseconds +=1;
            console.log(milliseconds)
        }
            if (milliseconds == 100){
            seconds +=1;
            milliseconds = 0;     
            }
            if (seconds == 60){
                minutes +=1;
                seconds = 0;     
                }
            if (minutes == 60){
                hours +=1;
                minutes = 0;     
            }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('milli').innerHTML = milliString;
        setTimeout(startTimer, 10);
    }
  
    function resetStopwatch() {
        run_timer = false
        hours = 0
        minutes = 0
        seconds = 0
        milliseconds = 0
        counter = 0
    }

    
    
    
}