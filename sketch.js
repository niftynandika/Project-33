var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "play";
var particle;


var divisionHeight=300;
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 
 

    for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    } 
}
 


function draw() {
  background("black");

  if(gameState == "end"){
    textSize(60);
    text("Game Over",250,350);
  }

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

   if(particle!=null)
   {
     
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x >10 && particle.body.position.x<160) {
                 score=score+100;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x >160 && particle.body.position.x < 320 ) {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5) gameState ="end";
             }
             else if (particle.body.position.x >320 && particle.body.position.x <480 ) {
                   score = score + 300;
                   particle=null;
                   if ( count>= 5)  gameState ="end";
             }
             
             else if(particle.body.position.x>480&& particle.body.position.x<640){
               score = score+400;
               particle=null;
               if(count>=5) gameState = "end";
             }

             else if(particle.body.position.x>640 && particle.body.position.x<800){
               score = score+500;
               particle = null;
               if(count>=5) gameState="end";
             }
             
       }
 
     }

  
 
 
   for (var k = 0; k < divisions.length; k++) {
    
     divisions[k].display();
   }

    textSize(30);
    fill(255,22,0);
   text("100",10,530);
   text("100", 90,530);
   fill(255,146,0);
   text("200",170,530);
   text("200",250,530);
   fill(255,244,1);

   text("300",330,530);
   text("300",410,530);
   fill( 113,255,0);
   text("400",490,530);
   text("400",570,530);
   fill(0,86,255);
   text("500",650,530);
   text("500",730,530);
   fill(255,255,255);
   textSize(20);
   text("Score: "+score,20,30);
   textSize(15);
   text("Click on the desired horizontal position!!",520,30);
   text("You will get 5 chances to rock..",580,50)
  



  
   
}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle = new Particle(mouseX, 10,10,10);
  }
}