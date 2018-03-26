// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
    // Check One : Any pending setTimeout, setInterval, setImmediate?
    // Check Two: Any pending OS tasks? (Like server listening to port)
    // Check Three: Any pending long running operations? (Like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}



// Entire body executes in one 'tick'
while(shouldContinue()){

    // 1) Node looks at pendingTimers and sees if any functions 
    // are ready to be called. setTimeout, setInterval

    // 2) Node looks pendingOSTasks and pendingOperations and calls
    // relevent callbacks

    // 3) Pause execution. Continue when...
    // - a new pendingTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events

}



// exit back to terminal