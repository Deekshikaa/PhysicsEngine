const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var dworld,dengine;
var box, ground;
var ball;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  dengine=Engine.create(); //dengine.world
  dworld=dengine.world;

  box=Bodies.rectangle(300,200,50,50);
  World.add(dworld,box);
  var goption= { isStatic:true}      //jason format- we use , instead of = we use :
  ground=Bodies.rectangle(400,390,800,30,goption);
  World.add(dworld,ground);
  console.log(box);

  var boption = {restitution:1.0}
  ball=Bodies.circle(500,200,30, boption);
  World.add(dworld,ball);

}

function draw() {
  background(255,255,255); 
  Engine.update(dengine); 
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,30);
  
  ellipse(ball.position.x, ball.position.y,60,60);

  drawSprites();
}