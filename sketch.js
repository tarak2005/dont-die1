var car,wall,indicator;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(800,200,60,height/2);
 indicator=createSprite(400,370,50,50);

wall.shapeColor=color(80,80,80)
  speed=random(55,90);
  weight=random(400,1500);
}

console.log(car.velocityX);

function draw() {
  background(0,255,0);  
  drawSprites();
  car.collide(wall);
  deformation=weight*speed*speed/22500;
  
  car.velocityX=speed;

  if(deformation<100){
car.shapeColor=color(0,225,0);
indicator.shapeColor=color(0,225,0);
  }

  if(deformation>=100  &&  deformation<180){
    car.shapeColor=color(230,230,0);
    indicator.shapeColor=color(230,230,0);
      }

      if(deformation>180){
        car.shapeColor=color(255,0,0);
        indicator.shapeColor=color(255,0,0);
          }

          

  drawSprites();

}