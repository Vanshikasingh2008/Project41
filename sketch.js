const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drops = [];

function preload(){
    thunderimg1 = loadImage("thunder1.jpeg");
    thunderimg2 = loadImage("thunder2.webp");
    thunderimg3 = loadImage("thunder3.jpeg");
    thunderimg4 = loadImage("thunder4.jpg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(500,700);

    umbrella = new Umbrella(200,450);

    for(i=0 ; i<maxDrops ; i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
    if(frameCount%12 === 0){
        var thunder = createSprite(random(0,400),200);
        var rand = Math.round(random(1,4))
        switch(rand){
            case 1 : thunder.addImage("thu1",thunderimg1);
            break;
            case 2 : thunder.addImage("thu2",thunderimg2);
            break;
            case 3 : thunder.addImage("thu3",thunderimg3);
            break;
            case 4 : thunder.addImage("thu4",thunderimg4);
            break;
            default:break;
        }
    }

}

function draw(){
    Engine.update(engine);
    background("black");

    umbrella.display();
    for(i=0 ; i<maxDrops ; i++){
    //drops[i].reposition();
    drops[i].display();
    }

    randomThunder();
}   

function randomThunder(){
}

