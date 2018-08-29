function Snake(myCanvas){

    this.y = myCanvas.height/2;
    this.x = myCanvas.width/2;

    this.speed = 100;
    valueY = 1;
    valueX = 0;

    this.show = function(color){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x,this.y,20,20);
        //ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }

    this.update = function(ratio){

        this.y = this.y + this.speed * valueY * ratio;
        this.x = this.x + this.speed * valueX * ratio;

        this.collisionMur();

    }

    this.collisionMur = function(){
        if (this.y > myCanvas.height-19){
            gameIsRunning = false;
        }
        if (this.y < -1){
            gameIsRunning = false;
        }
        if (this.x > myCanvas.width -19){
            gameIsRunning = false;
        }
        if (this.x < -1){
            gameIsRunning = false;
        }
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
            case 'Left':
                valueX = -1;
                valueY = 0;
                break;
            case 'ArrowRight':
            case 'Right':
                valueX = 1;
                valueY = 0;
                break;
            case 'ArrowDown':
            case 'Down':
                valueX = 0;
                valueY = 1;
                break;
            case 'ArrowUp':
            case 'Up':
                valueX = 0;
                valueY = -1;
                break;
        }
    });
}
