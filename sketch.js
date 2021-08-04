
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papper;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(1100,550);
	papper = new PaperObject(240,250,30);//circle(x,y,r)

	Engine.run(engine);
	
  
}


function draw() {

  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  papper.display();

}

function keyPressed() {

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:130,y:-145});
	}

}

