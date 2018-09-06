function Apple(myCanvas){

    this.appleSize = 20;
    this.randomApple();

    this.show = function(){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.applePosition.x,this.applePosition.y,this.appleSize,this.appleSize);
        ctx.fillStyle = "Red";
        ctx.fill();
    }
}

Apple.prototype.randomApple = function(){
        this.applePosition = {
            x: Math.floor(Math.random() * (myCanvas.width - this.appleSize) / this.appleSize) * this.appleSize,
            y: Math.floor(Math.random() * (myCanvas.height - this.appleSize) / this.appleSize) * this.appleSize
        };
    }
