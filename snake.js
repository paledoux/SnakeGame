function Snake(myCanvas){

    var snakePosition = [{
        x:myCanvas.width/2,
        y:myCanvas.height/2
    }]
    var headDirection = {
        x:0,
        y:0
    }
    var snakeSize = 20;
    var snakeDt = 0;
    var snakeDtMax =100;
    var head = [];
    var score = 0;
    directionInitial();

    this.show = function(color){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(head.x,head.y,snakeSize,snakeSize);
        ctx.fillStyle = color;
        ctx.fill();
    }

    this.update = function(dt){
        head = snakePosition[snakePosition.length - 1];
        snakeDt += dt;
        console.log(snakeDt,snakeDtMax);
        while (snakeDt >= snakeDtMax){
            //snakeDt -= dt;
            head = {
                x:head.x + snakeSize * headDirection.x,
                y:head.y + snakeSize * headDirection.y
            };
            snakePosition.push(head);
        }

        collisionMur();


        while (snakePosition.length > score + 1){
            snakePosition.shift();
        }

    }

    function collisionMur(){
        if (head.y > myCanvas.height-snakeSize + 1){
            gameIsRunning = false;
        }
        if (head.y < -1){
            gameIsRunning = false;
        }
        if (head.x > myCanvas.width -snakeSize + 1){
            gameIsRunning = false;
        }
        if (head.x < -1){
            gameIsRunning = false;
        }
    }

    function directionInitial(){
       var direction = Math.floor((Math.random() * 4) + 1);
        switch(direction){
            case 1: //Gauche
                headDirection.y = 0;
                headDirection.x = -1;
                break;
            case 2: //Haut
                headDirection.y = -1;
                headDirection.x = 0;
                break;
            case 3: //Droite
                headDirection.y = 0;
                headDirection.x = 1;
                break;
            case 4: //Bas
                headDirection.y = 1;
                headDirection.x = 0;
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
