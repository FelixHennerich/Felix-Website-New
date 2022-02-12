
var delayInMilliseconds = 3950; //1000 = 1 second

setTimeout(function() {
    sendSide();
}, delayInMilliseconds);

function sendSide(){
    window.location.replace('../HTML/MainScreen.html');
}