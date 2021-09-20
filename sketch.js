var path, pathImg;
var boy, boyImg;
var left_boundry, right_boundry;
var edge;

function preload(){
  pathImg = loadImage("path.png"); 
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,30,30);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  boy = createSprite(180,340,30,30);
  boy.addAnimation("boyRunning", boyImg);
  boy.scale=0.08;

  left_boundry = createSprite(0,0,100,800);
  left_boundry.visible=false;

  right_boundry = createSprite(410,0,100,800);
  right_boundry.visible=false;

 
}

function draw() {
  background(0);

  boy.x=World.mouseX;


edge = createEdgeSprites();
boy.collide(edge[3]);
  boy.collide(left_boundry);
  boy.collide(right_boundry);

  if (path.y > 400)
{
  path.y=height/2;
}
  drawSprites();
}
