function Snake(myCanvas){

    this.y = myCanvas.height/2;
    this.x = myCanvas.width/2;
    this.speed = 1;
    this.scl =20;
    var oldY = this.y;
    directionInitial();

    this.show = function(color){
        if(this.y <= oldY + this.scl){
            var ctx=myCanvas.getContext("2d");
            ctx.beginPath();
            ctx.rect(this.x,this.y,this.scl,this.scl);
            ctx.fillStyle = color;
            ctx.fill();
            oldY = this.y;
        }
    }

    this.update = function(ratio){
        //console.log(this.y);
        this.y = this.y + this.speed * valueY * ratio;
        this.x = this.x + this.speed * valueX * ratio;
        console.log(oldY,this.y,this.x);

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

    function directionInitial(){
       var direction = Math.floor((Math.random() * 4) + 1);
        switch(direction){
            case 1: //Gauche
                valueY = 0;
                valueX = -1;
                break;
            case 2: //Haut
                valueY = -1;
                valueX = 0;
                break;
            case 3: //Droite
                valueY = 0;
                valueX = 1;
                break;
            case 4: //Bas
                valueY = 1;
                valueX = 0;
                break;
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
