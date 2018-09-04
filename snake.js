function Snake(myCanvas){

    var snakePosition = [{
        x:myCanvas.width/2,
        y:myCanvas.height/2
    }];
    this.headDirection = {
        x:0,
        y:0
    };
    var snakeSize = 20;
    this.head = [];

    this.directionInitial();

    this.show = function(color){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.head.x,this.head.y,snakeSize,snakeSize);
        ctx.fillStyle = color;
        ctx.fill();
    }

    this.update = function(){
        this.head = snakePosition[snakePosition.length - 1];
        this.head = {
            x:this.head.x + snakeSize * this.headDirection.x,
            y:this.head.y + snakeSize * this.headDirection.y
        };
        snakePosition.push(this.head);
        this.collisionMur();
    }

    this.collisionApple = function(positionApple){
       if (this.head.x == positionApple.x && this.head.y == positionApple.y){
           //alert("LOL");
           var apple = new Apple(myCanvas);
           positionApple = apple.randomApple();
           this.head = snakePosition[snakePosition.length];
           this.head = {
               x:this.head.x + snakeSize + snakeSize * this.headDirection.x,
               y:this.head.y + snakeSize + snakeSize * this.headDirection.y
           };
           snakePosition.push(this.head);
           console.log(this.head);
           return positionApple;
       }
       else{
        return positionApple;
       }

    }

    this.collisionMur = function(){
        if (this.head.y > myCanvas.height-snakeSize + 1){
            gameIsRunning = false;
            this.head = {
                y:this.head.y - snakeSize
            };
        }
        if (this.head.y < -1){
            gameIsRunning = false;
            this.head = {
                y:this.head.y + snakeSize
            };
        }
        if (this.head.x > myCanvas.width -snakeSize + 1){
            gameIsRunning = false;
            this.head = {
                x:this.head.x - snakeSize
            };
        }
        if (this.head.x < -1){
            gameIsRunning = false;
            this.head = {
                x:this.head.x + snakeSize
            };
        }
    }

    this.directionInitial = function(){
       var direction = Math.floor((Math.random() * 4) + 1);
        switch(direction){
            case 1: //Gauche
                this.headDirection = {
                    x:-1,
                    y:0
                }
                break;
            case 2: //Haut
                this.headDirection = {
                    x:0,
                    y:-1
                }
                break;
            case 3: //Droite
                this.headDirection = {
                    x:1,
                    y:0
                }
                break;
            case 4: //Bas
                this.headDirection = {
                    x:0,
                    y:1
                }
                break;
        }
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
            case 'Left':
                this.headDirection.x = -1;
                this.headDirection.y = 0;
                break;
            case 'ArrowRight':
            case 'Right':
                this.headDirection.x = 1;
                this.headDirection.y = 0;
                break;
            case 'ArrowDown':
            case 'Down':
                this.headDirection.x = 0;
                this.headDirection.y = 1;
                break;
            case 'ArrowUp':
            case 'Up':
                this.headDirection.x = 0;
                this.headDirection.y = -1;
                break;
        }
    });
}
