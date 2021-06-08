var dyso,king;
var gorilla,rhino,crocodile,Fly,Attack,bear,snake,panther,eagle,wolf,lion;
var sceptre,scoreHeart,food,fastrun,shield,heal;
var bg2,bg3;
var bg,bgimg,dysoimg,gorillaimg,rhinocerosimg,crocodileimg,flyimg,attackimg,sceptreimg,scoreheartimg,kingimg;
var foodimg,bearimg,snakeimg,pantherimg,eagleimg,wolfimg,lionimg,fastrunimg,shieldimg,healimg;
var homescreen,homescreenImg;
var gameState=0;
var gorillaGroup,rhinocerosGroup,crocodileGroup,foodGroup;
var edges;
var score=0;

function  preload() {
    bgimg=loadAnimation("images/bg.jpg");
    bg2=loadAnimation("images/second background.jpg");
    bg3=loadAnimation("images/third background.jpg");
    dysoimg=loadImage("images/Clear dyso.png");
    gorillaimg=loadImage("images/Clear gorilla.png"); 
    rhinocerosimg=loadImage("images/Clear rhino.png");
    crocodileimg=loadImage("images/Clear crocodile.png");
    bearimg=loadImage("images/Clear bear.png");
    snakeimg=loadImage("images/Clear snake.png");
    pantherimg=loadImage("images/Clear panther.png");
    eagleimg=loadImage("images/Clear eagle.png");
    wolfimg=loadImage("images/Clear wolf.png");
    lionimg=loadImage("images/Lion.png");
    foodimg=loadImage("images/Tiger food.png");
    attackimg=loadImage("images/Attack.jpg");
    flyimg=loadImage("images/Wings.png");
    fastrunimg=loadImage("images/Fast run.png");
    shieldimg=loadImage("images/Immunity perk.png");
    healimg=loadImage("images/heal perk.png");
    sceptreimg=loadImage("images/The Sceptre.png");
    scoreheartimg=loadImage("images/Score Heart.png");
    kingimg=loadImage("images/Evil king.png");
    homescreenImg=loadImage("images/Home page img.jpg"); 
}

function setup(){
    createCanvas(1000,600);

    bg=createSprite(500,250,10,10);
    bg.addAnimation("background",bgimg);
    bg.scale=0.3;
    bg.visible=false;
    bg.velocityY=1;

    dyso=createSprite(534,559,20,20);
    dyso.addImage("Dyso",dysoimg);
    dyso.scale=0.7;
    // change the collider radius of dyso
    dyso.setCollider("rectangle",0,0,60,200);
   // dyso.debug=true;
    dyso.visible=false;

for(var i=1;i<=4;i++){
    scoreheart=createSprite((20+i+15)*i,21,10,10);
    scoreheart.addImage("Lives",scoreheartimg)
    scoreheart.scale=0.21
}
   
    button1 = createButton('Start');
    button1.position(474,369);
    button1.style('background', 'yellow'); 
    
    homescreen=createSprite(500,300,displayWidth,displayHeight);
    homescreen.addImage("home screen",homescreenImg);
    homescreen.scale=1.2;

    button1.mousePressed(()=>{
        button1.hide();
        gameState=1;
        homescreen.visible=false;
    })
    
    

   
    gorillaGroup= new Group();
    rhinocerosGroup=new Group();
    crocodileGroup=new Group();
    foodGroup=new Group();
}

function draw(){   
    background(0);

    if(gameState===1){
        startgame();    
        spawngorilla();
        spawnrhinoceros();
        spawncrocodile();
        spawnfood();
        
    }

    if(gorillaGroup.isTouching(dyso)){
        //  gorillaGroup.destroyEach();
          dyso.x=534;
          dyso.y=559;
      }
    if(crocodileGroup.isTouching(dyso)){
        crocodileGroup.destroyEach();
        score=score-1;
    }
    if(rhinocerosGroup.isTouching(dyso)){
        rhinocerosGroup.destroyEach();
        score=score-1;
    }
    if(foodGroup.isTouching(dyso)){
        score=score+3;
        foodGroup.destroyEach();
    }

    if(score>=3){
        gameState=2
    }

    if(gameState===2){
        score=0;
        level2();
    }
    // To make dyso not leave canvas
    edges= createEdgeSprites();
    dyso.bounceOff(edges);
  
    drawSprites();

   textSize(20);
   strokeWeight(3)
   stroke("black")
    fill("red")
   //text(mouseX+","+mouseY,mouseX,mouseY);
   text("SCORE: "+score,858,32)
  
}

function level2(){
    dyso.x=534;
          dyso.y=559;
         bg.addAnimation("level 2",bg2); 
        bg.changeAnimation("level 2",bg2); 
       
    if(bg.y>355){
        bg.y=250
    }
    
    if(keyDown("LEFT_ARROW")){
        dyso.x-=5;
       }
      else if (keyDown("RIGHT_ARROW")){
        dyso.x+=5;
       }
     else if (keyDown("UP_ARROW")){
        dyso.y-=5;
       }
      else if (keyDown("DOWN_ARROW")){
        dyso.y+=5;
       }
  
    bg.visible=true;
    dyso.visible=true;

    gorillaGroup.destroyEach();
    rhinocerosGroup.destroyEach();
    crocodileGroup.destroyEach();

    
    function spawnrunFast(){
        if(frameCount%100===0){
        fastrun=createSprite(Math.round(random(10,700)),0,20,20);
        fastrun.velocity=1
        fastrun.addImage("Run",fastrunimg);
        fastrun.lifetime=100
        }
    }
    
  
}

function startgame(){
         
    if(bg.y>355){
        bg.y=250
    }
    
    if(keyDown("LEFT_ARROW")){
        dyso.x-=5;
       }
      else if (keyDown("RIGHT_ARROW")){
        dyso.x+=5;
       }
     else if (keyDown("UP_ARROW")){
        dyso.y-=5;
       }
      else if (keyDown("DOWN_ARROW")){
        dyso.y+=5;
       }
  
    bg.visible=true;
    dyso.visible=true;
  
}

function spawngorilla(){
   if(frameCount%200===0){
    gorilla=createSprite(Math.round(random(10,700)),0,20,20);
   // gorilla.setCollider("rectangle",0,0,200,200);
   // gorilla.debug=true;
    gorilla.velocityY=1;
    gorilla.addImage("Gorilla",gorillaimg);
    gorilla.scale=0.5;
    gorilla.lifetime=500;
    gorillaGroup.add(gorilla);
   } 
}

function spawnrhinoceros(){
    if(frameCount%300===0){
    rhinoceros=createSprite(Math.round(random(10,700)),0,20,20);
    rhinoceros.velocityY=1;
    rhinoceros.addImage("Rhinoceros",rhinocerosimg);
    rhinoceros.scale=0.5;
    rhinoceros.lifetime=500;
    rhinocerosGroup.add(rhinoceros);     
    }
}

function spawncrocodile(){
    if(frameCount%500===0){
     crocodile=createSprite(Math.round(random(10,700)),0,20,20);
     crocodile.velocityY=1;
     crocodile.addImage("Crocodile",crocodileimg);
     crocodile.scale=0.3;
     crocodile.lifetime=500;    
     crocodileGroup.add(crocodile);
    } 
 }

 function spawnfood(){
    if(frameCount%600===0){
     food=createSprite(Math.round(random(10,700)),0,20,20);
     food.velocityY=1;
     food.addImage("Food",foodimg);
     food.scale=0.3;
     food.lifetime=600;  
     foodGroup.add(food);

    } 
 }


    
