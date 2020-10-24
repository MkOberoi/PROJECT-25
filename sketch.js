const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {

	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  paper = new Paper(100,520,70);
  dustbin = new Dustbin(1000,450,200,200);
  ground1 = new Ground(400,550,1900,15);

  }
function draw() {

  rectMode(CENTER);
  background("grey");
  dustbin.display();
  ground1.display();
  paper.display();
 }

function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
  
}

