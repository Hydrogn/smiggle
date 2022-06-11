var startTime, endTime;

    //start time
    function start() {
        startTime = new Date();
    };
    
    start();
    
    //end time 

    function end() {

        endTime = new Date();
        var timeDiff = endTime - startTime;
            // strip the ms
        timeDiff /= 1000;
        // get seconds
        var seconds = Math.round(timeDiff); //add more values to seconds to test
        
        var secs = seconds;
        
        console.log(seconds + " seconds");

        //set to globalVariable to access it to another script
        var globalVariable={
            minutes: 0,
            hours: 0
        };

        while(secs/60>=1){
            if(secs/60>=1){
                globalVariable.minutes++;
                secs = secs-60;
            }
            seconds = seconds%60; 
        }

        while(globalVariable.minutes/60>=1){
            if(globalVariable.minutes/60>=1){
                globalVariable.hours++;
                globalVariable.minutes = globalVariable.minutes-60;
            }
        }

        console.log(globalVariable.hours + " hours " + globalVariable.minutes + " minutes " + seconds + " seconds ");
    }