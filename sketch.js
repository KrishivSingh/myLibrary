
var fixedRect,movingRect,rect1,rect2;

function setup() {
   createCanvas(800,400);
 fixedRect = createSprite(400, 390, 50, 50);
 fixedRect.shapeColor = "red" ;
 movingRect = createSprite(400,10,80,50);
 movingRect.shapeColor = "red";

 movingRect.velocityY = 3;

 fixedRect.velocityY = -3;
 
    rect1 = createSprite(200,200,50,90);
    rect1.shapeColor = "red" ;

    rect2 = createSprite(200,300,50,30); 
    rect2.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
   
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if (isTouching(rect1,rect2)) {
     rect2.shapeColor = "red";
     rect1.shapeColor = "blue";
  }else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "blue";
  }
  
 bounceOff(movingRect,fixedRect);
 
  drawSprites();
}