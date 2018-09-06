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
    this.snakeLength = 1;
    this.directionInitial();

    this.show = function(color){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        for (i = 0; i < snakePosition.length; i++) {
            this.head = snakePosition[i];
            ctx.rect(this.head.x,this.head.y,snakeSize,snakeSize);
        }
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
        while (snakePosition.length > this.snakeLength){
            snakePosition.shift();
        }
        this.collisionMur();
        this.collisionApple();
        this.collisionSnake();
    }

    this.collisionApple = function(){
       if (this.head.x == apple.applePosition.x && this.head.y == apple.applePosition.y){
           apple.randomApple();
           this.snakeLength++;
           this.head = {
               x:this.head.x + snakeSize * this.headDirection.x,
               y:this.head.y + snakeSize * this.headDirection.y
           };
           snakePosition.push(this.head);
       }
    }

    this.collisionSnake = function(){
        var tail = snakePosition.slice(0,-1);
        tail.forEach(pos => {
            if (pos.x == this.head.x && pos.y == this.head.y){
                gameIsRunning = false;
            }
        });
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
}

Snake.prototype.directionInitial = function(){
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
