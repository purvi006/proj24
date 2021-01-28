const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper; //ground;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(1200, 650);
	paper = new Paper(200, 450, 40);
	//ground = new Ground(width/2, 680, width, 55);
	
	var render = Render.create({
		element : document.body,
		engine : engine,
		options : {
		width : 1200,
		height : 700,
		wireframes: false
	  }
	});
	
	Engine.run(engine);
	
	}

function draw() {
  rectMode(CENTER);
  background("lightBlue");
 
  dustbin.display();
  paper.display();
  ground.display();

  fill("blue");
  stroke("red");
  strokeWeight(-10);
  text("THROW DRY GARBAGE IN GREEN DUSTBIN", 650, 200);

}



function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body, paper.body.position, {x : 85,y : - 85});
 }
}
