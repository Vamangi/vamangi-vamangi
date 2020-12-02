
var monkey , monkey_running,monk,onkey
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup
var FoodGroup, obstacleGroup
var score=0;
var ground
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monk=loadImage("sprite_6.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,280);
  ground=createSprite(160,271,900,2)
  ground.velocityX=-4;
  ground.x=ground.width/2;
monkey=createSprite(50,235,3,3);
  monkey.addAnimation("r",monkey_running)
monkey.scale=0.12;
  
  
  monkey.setCollider("circle",0,0,200)
  
  
  bananaGroup=new Group();
    obstacleGroup=new Group();
  onkey=createSprite(50,245,3,3);
onkey.addImage(monk)
onkey.scale=0.12;
  onkey.visible=false;


}


function draw() {
  background("white");
  fill("black")
  text("score:"+score,100,20)
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
 
  fill("black")
  text ("Survival Time:"+survivalTime,270,20)

  
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  if (monkey.isTouching(obstacleGroup)){
        obstacleGroup.setVelocityXEach(0);
          obstacleGroup.setVelocityYEach(0);
        survivalTime=0;   
    bananaGroup.setVelocityXEach(0);
          bananaGroup.setVelocityYEach(0);
    monkey.visible=false;
            bananaGroup.setLifetimeEach(-1);
            obstacleGroup.setLifetimeEach(-1);
onkey.visible=true;
    fill("black")
    textSize(20);
    text("Game Over",170,100)
  }
if(ground.x<0){
    ground.x=ground.width/2;
}
  if(score===2){
    text("YOU WON",170,100)
    obstacleGroup.setVelocityXEach(0);
          obstacleGroup.setVelocityYEach(0);
        survivalTime=0;   
    bananaGroup.setVelocityXEach(0);
          bananaGroup.setVelocityYEach(0);
    monkey.visible=false;
            bananaGroup.setLifetimeEach(-1);
            obstacleGroup.setLifetimeEach(-1);
onkey.visible=true;
  }
 if(keyDown("space")&&monkey.y >= 220) {
     monkey.velocityY=-10;

 }
   monkey.velocityY=monkey.velocityY+0.5 
 
  
  monkey.collide(ground)
  createObstacle()
   createbanana();
  drawSprites();
  
}

function createbanana(){
  if(frameCount%80===0){
  banana=createSprite(450,200,4,4)
 banana.velocityX=-7;
    banana.addImage("b",bananaImage)
  banana.scale=0.08;
   
 banana.lifetime=100;
    banana.y=Math.round(random(100,200))
    bananaGroup.add(banana);
  }
}

function createObstacle(){
  if(frameCount % 300===0){
  obstacle=createSprite(480,238,3,3)
  obstacle.addImage("obstacle", obstacleImage)
  obstacle.scale=0.17;
  obstacle.velocityX=-8;
   obstacle.lifetime=120;
    obstacleGroup.add(obstacle)
  }

}



