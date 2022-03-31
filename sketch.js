
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ground, pared1, pared2;
var ball;

//function preload(){ 
	
//}

function setup() {
	createCanvas(1500, 600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(400,550,1550,20);
    pared1=new Ground(900,480,20,120);
    pared2=new Ground(1150,480,20,120);
    var ball_options={
        isStatic:false,
        restitution:1,
        friction:0,
        density:1.2
    }
	//crear los cuerpos aquí.
    ball=Bodies.circle(200,100,10,ball_options);
    World.add(world,ball);
    //Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
	
	//Engine.update(engine);
  }

function draw() {
   
  background("purple");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ground.show();
  pared1.show();
  pared2.show();
  
  //drawSprites(); 
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
         Matter.Body.applyForce(ball, ball.position,{x:7,y:-7})
    }
} 
