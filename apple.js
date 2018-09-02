function Apple(myCanvas){

    var appleSize = 20;
    var applePosition;

    randomApple();

    function randomApple(){
        applePosition = {
            x: Math.floor(Math.random() * (myCanvas.width - appleSize) / appleSize) * appleSize,
            y: Math.floor(Math.random() * (myCanvas.height - appleSize) / appleSize) * appleSize
        };
    }
    this.show = function(positionApple){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(applePosition.x,applePosition.y,appleSize,appleSize);
        ctx.fillStyle = "Red";
        ctx.fill();
        return applePosition;
    }   
}
