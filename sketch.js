let ball
let ground
let left
let right

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,10);
	right = new Ground(500,580,10,200);
	left = new Ground(650,580,10,200);

	var ball_options = {
		isStatic: false,
		restitiution: 0.9,
		friction: 0,
		density: 1.2
	}

	ball = Matter.Bodies.circle(400, 350, 25, [ball_options])
	World.add(world, ball)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ground.show();
  left.show();
  right.show();
  
  var pos = ball.position;
  ellipse(pos.x, pos.y, 25)

  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Body.applyForce(ball, {x:0,y:0}, {x:0.01,y:-0.1})
}

}



