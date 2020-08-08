class Drop{
    constructor(x,y){
        var options ={
            isStatic: false
            //friction: 0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }

    //reposition(){
        
    //}

    display(){
        push();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,5);
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:randomThunder(0,400), y:randomThunder(0,0)});
        }
        pop();
    }
}