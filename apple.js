function Apple(myCanvas){

    var appleSize = 20;

    this.randomApple = function(){
        applePosition = {
            x: Math.floor(Math.random() * (myCanvas.width - appleSize) / appleSize) * appleSize,
            y: Math.floor(Math.random() * (myCanvas.height - appleSize) / appleSize) * appleSize
        };
        return applePosition;
    }
    this.show = function(applePosition){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(applePosition.x,applePosition.y,appleSize,appleSize);
        ctx.fillStyle = "Red";
        ctx.fill();
        
    }   
}
