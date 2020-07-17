var trex,monkey1,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7;
var monkey9,monkey10,restart,ground,jungle,banana,stone,gameover;
var invisibleGround;
function preload(){
  gameover=loadImage("gameOver.png");
banana=loadImage("Banana.png")
stone=loadImage("stone.png")
ground=loadImage("ground.jpg")
jungel=loadImage("jungle.jpg")


restart=loadImage("restart.png")
Monkey1=loadImage("Monkey_01.png")
Monkey2=loadImage("Monkey_02.png")
Monkey3=loadImage("Monkey_03.png")
Monkey4=loadImage("Monkey_04.png")
Monkey5=loadImage("Monkey_05.png")
Monkey6=loadImage("Monkey_06.png")  
Monkey7=loadImage("Monkey_07.png")
Monkey8=loadImage("Monkey_08.png")
Monkey9=loadImage("Monkey_09.png")  
Monkey10=loadImage("Monkey_10.png")  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addImage("monkey", Monkey1);
  trex.scale = 0.5;
  
                                         
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",ground);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  cloudgroup=new Group();
  obstaclegroup=new Group();
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(400,120,40,10);
    cloud.y = Math.round (random (80,120));
    cloud.addImage("banana",banana);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudgroup.add(cloud)
  }
  
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
     obstacle.addImage("stone",stone)
    
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclegroup.add (obstacle)
  }
}