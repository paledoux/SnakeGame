function Apple(myCanvas){

    var apple = {
        width:10,
        height:10
    }

    test();

    this.show = function(){
        var ctx=myCanvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(20,20,apple.width,0,apple.height);
        ctx.fillStyle = "Red";
        ctx.fill();
    }

    function test(){
        //alert("test");
    }
}
