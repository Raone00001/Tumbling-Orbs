class Player {

    constructor(x, y, width, height){

        var options = {

            'isStatic': true

        }

        this.player = Bodies.rectangle(mouseX,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.player);

    }

    display(){

        var pos = this.player.position;
        rectMode(CENTER);
        fill("white");
        rect(mouseX, pos.y, this.width, this.height);

    }

}