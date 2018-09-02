function Snake(myCanvas){
    //var apple = new Apple(myCanvas);

    var snakePosition = [{
        x:myCanvas.width/2,
        y:myCanvas.height/2
    }]
    var headDirection = {
        x:0,
        y:0
    }
    var snakeSize = 20;
    var head = [];

    directionInitial();

    this.show = function(color){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(head.x,head.y,snakeSize,snakeSize);
        ctx.fillStyle = color;
        ctx.fill();   
    }

    this.update = function(){
        head = snakePosition[snakePosition.length - 1];    
        head = {
            x:head.x + snakeSize * headDirection.x,
            y:head.y + snakeSize * headDirection.y
        };
        snakePosition.push(head);
        //var positionApple = apple.show();
        //console.log(head);
        collisionMur();

    }

    this.collisionApple = function(positionApple){
       if (head.x == positionApple.x && head.y == positionApple.y){
           alert("LOL");
           var apple = new Apple(myCanvas);
       }
    }

    function collisionMur(){
        if (head.y > myCanvas.height-snakeSize + 1){
            gameIsRunning = false;
            head = {
                y:head.y - snakeSize
            };
        }
        if (head.y < -1){
            gameIsRunning = false;
            head = {
                y:head.y + snakeSize
            };
        }
        if (head.x > myCanvas.width -snakeSize + 1){
            gameIsRunning = false;
            head = {
                x:head.x - snakeSize
            };
        }
        if (head.x < -1){
            gameIsRunning = false;
            head = {
                x:head.x + snakeSize
            };
        }
    }

    function directionInitial(){
       var direction = Math.floor((Math.random() * 4) + 1);
        switch(direction){
            case 1: //Gauche
                headDirection = {
                    x:-1,
                    y:0
                }
                break;
            case 2: //Haut
                headDirection = {
                    x:0,
                    y:-1
                }
                break;
            case 3: //Droite
                headDirection = {
                    x:1,
                    y:0
                }
                break;
            case 4: //Bas
                headDirection = {
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
                headDirection.x = -1;
                headDirection.y = 0;
                break;
            case 'ArrowRight':
            case 'Right':
                headDirection.x = 1;
                headDirection.y = 0;
                break;
            case 'ArrowDown':
            case 'Down':
                headDirection.x = 0;
                headDirection.y = 1;
                break;
            case 'ArrowUp':
            case 'Up':
                headDirection.x = 0;
                headDirection.y = -1;
                break;
        }
    });
}
