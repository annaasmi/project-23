var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxside,boxside2,boxbottom,boxbody1,boxbody2,boxbody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	
	boxbottom = createSprite(400,650,200,20);
	boxbottom.shapeColor = "red";
	boxside = createSprite(300,610,20,100);
	boxside.shapeColor = "red";
	boxside2 = createSprite(490,610,20,100);
	boxside2.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	boxbody1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world, boxbottom);
	boxbody2 = Bodies.rectangle(370,620,20,100,{isStatic: true});
	World.add(world, boxside);
	boxbody3 = Bodies.rectangle(410,620,20,100, {isStatic:true});
	World.add(world, boxside2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Body.setStatic(packageBody,false);
    
  }
}



