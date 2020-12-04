 var car;
 var wall;
 var speed;
 var weight;




function setup(){
createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1000);
car=createSprite(50,200,50,50);
car.shapeColor="purple";

wall=createSprite(1200,200,60,height/2);
wall.shapeColor=rgb(80,80,80);
car.velocityX=speed;
}

function draw(){
    background("black");
    if(wall.x-car.x < (car.width+wall.width)/2)
      {
          car.velocityX=0;
          var deformation=0.5 * weight * speed* speed/22509;
        if(deformation>180)
        {
            car.shapeColor=rgb(255,0,0);
        }
    
        if(deformation<180 && deformation>100)
        {
            car.shapeColor=rgb(230,230,0);
        }
    
        if(deformation<100)
        {
            car.shapeColor=rgb(0,255,0);
        }
    }
drawSprites();
}