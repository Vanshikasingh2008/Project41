class Umbrella {
    constructor(x,y){
        var options ={
            isStatic: true,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,100,options);
        this.image = loadImage("umbrella.jpg");
        World.add(world,this.body);
    }

    display(){
        push();
        //fill("red");
        //ellipseMode(RADIUS);
       // ellipse(this.body.position.x,this.body.position.y,50)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,100);
        pop();
    }
}