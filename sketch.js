
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper=new Paper(100,200,20);
	paper=new Paper(100,670,20);
	ground=new Ground(400,680,800,20);
	box=new Box(395,620,10,100);
	box2=new Box(450,665,100,10);
	box3=new Box(500,620,10,100);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 ground.display();
 box.display();
 box2.display();
 box3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
	}
	}



