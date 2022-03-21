
var trex ,trex_running;
var ground,groundImage




function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png")

}

function setup(){
  createCanvas(800,400)
  
  //create a trex sprite
  trex=createSprite(50,300,10,10);
  trex.addAnimation("dino",trex_running);
  trex.scale=0.8

  ground=createSprite(400,370,800,10);
  ground.addImage("land",groundImage);
  ground.velocityX=-4;
 
}

function draw(){
  background(200);
  if(keyDown("space")){
    trex.velocityY=-13;
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.8;
  trex.collide(ground)
  drawSprites();

}
