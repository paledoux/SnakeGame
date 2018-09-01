function Apple(myCanvas){

    var appleSize = 20;
    
    var apple = {
        x: Math.floor(Math.random() * (myCanvas.width - appleSize) / appleSize) * appleSize,
        y: Math.floor(Math.random() * (myCanvas.height - appleSize) / appleSize) * appleSize
    }

    this.show = function(){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(apple.x,apple.y,appleSize,appleSize);
        ctx.fillStyle = "Red";
        ctx.fill();
    }

}
