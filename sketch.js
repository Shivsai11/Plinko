const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, div1, div2, div3, div4, div5, div6, particle1;

var particles = [];
var plinkos = [];
var divisions = [];
function preload(){

}

function setup() {
  createCanvas(350, 600);

  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
  
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(175, 590, 350, 30, options);
  World.add(world, ground);

  div1 = new Division(50, 475, 10, 200);
  div2 = new Division(100, 475, 10, 200);
  div3 = new Division(150, 475, 10, 200);
  div4 = new Division(200, 475, 10, 200);
  div5 = new Division(250, 475, 10, 200);
  div6 = new Division(300, 475, 10, 200);
  //particle1 = new Particle(200, 300);

}

function draw() {
  background("lightgreen");  
  drawSprites();
  
  Engine.update(engine);
  fill("yellow");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 350, 30);

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  //particle1.display();
  for(var i = 40; i <= width; i = i + 40){
    plinkos.push(new Plinko(i, 75));
  }
  for(var i = 15; i <=width-10; i = i + 50){
    plinkos.push(new Plinko(i, 125));
  }
  for(var i = 40; i <=width; i = i + 50){
    plinkos.push(new Plinko(i, 175));
  }
  for(var i = 15; i <=width-10; i = i + 50){
    plinkos.push(new Plinko(i, 225));
  }
  for(var i = 40; i <=width; i = i + 50){
    plinkos.push(new Plinko(i, 275));
  }
  for(var i = 15; i <=width-10; i = i + 50){
    plinkos.push(new Plinko(i, 325));
  }

  for (var i = 0; i < plinkos.length; i++) 
  {
     plinkos[i].display(); 
  }

  if(frameCount % 30 === 0){
      particles.push(new Particle(random(100, 200), 20));
  }
  for (var j = 0; j < particles.length; j++) 
  {
     particles[j].display(); 
  }
} 