const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var bgImg 

function preload(){
    getBgImg();
}

function setup(){
    createCanvas(1400, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700, height, 1400, 40);
    stand1 = new Ground(600, 500, 400, 40);
    stand2 = new Ground(900, 250, 300, 40);
    polygon = new Polygon(50, 200, 40, 40);
    sling = new Slingshot(polygon.body, {x:100, y:200});

    //stand1
    block1 = new Block(450, 475, 40, 60);
    block2 = new Block(490, 475, 40, 60);
    block3 = new Block(530, 475, 40, 60);
    block4 = new Block(570, 475, 40, 60);
    block5 = new Block(610, 475, 40, 60);
    block6 = new Block(650, 475, 40, 60);
    block7 = new Block(690, 475, 40, 60);
    block8 = new Block(730, 475, 40, 60);
    block9 = new Block(770, 475, 40, 60);

    block10 = new Block(490, 410, 40, 60);
    block11 = new Block(530, 410, 40, 60);
    block12 = new Block(570, 410, 40, 60);
    block13 = new Block(610, 410, 40, 60);
    block14 = new Block(650, 410, 40, 60);
    block15 = new Block(690, 410, 40, 60);
    block16 = new Block(730, 410, 40, 60);

    block17 = new Block(530, 345, 40, 60);
    block18 = new Block(570, 345, 40, 60);
    block19 = new Block(610, 345, 40, 60);
    block20 = new Block(650, 345, 40, 60);
    block21 = new Block(690, 345, 40, 60);

    block22 = new Block(570, 280, 40, 60);
    block23 = new Block(610, 280, 40, 60);
    block24 = new Block(650, 280, 40, 60);

    block25 = new Block(610, 215, 40, 60);

    //stand2

    block26 = new Block(785, 225, 40, 60);
    block27 = new Block(825, 225, 40, 60);
    block28 = new Block(865, 225, 40, 60);
    block29 = new Block(905, 225, 40, 60);
    block30 = new Block(945, 225, 40, 60);
    block31 = new Block(985, 225, 40, 60);
    block32 = new Block(1025, 225, 40, 60);

    block33 = new Block(825, 160, 40, 60);
    block34 = new Block(865, 160, 40, 60);
    block35 = new Block(905, 160, 40, 60);
    block36 = new Block(945, 160, 40, 60);
    block37 = new Block(985, 160, 40, 60);

    block38 = new Block(865, 95, 40, 60);
    block39 = new Block(905, 95, 40, 60);
    block40 = new Block(945, 95, 40, 60);

    block41 = new Block(905, 30, 40, 60);

    Engine.run(engine);
    
}

function draw(){
    rectMode(CENTER);
    if(bgImg)
    background(bgImg);

    ground.display();
    stand1.display();
    stand2.display();
    sling.display();
    polygon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();
    block33.score();
    block34.score();
    block35.score();
    block36.score();
    block37.score();
    block38.score();
    block39.score();
    block40.score();
    block41.score();

    drawSprites();
    fill("white");
    textSize(26)
    text("Score: " + score, 50, 50);
}

function mouseDragged(){
    Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if (keyCode === 32){
        sling.attach(polygon.body);
    }
}
async function getBgImg() {
    var response = await fetch ("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    var dt = responseJSON.currentDateTime;
    console.log(responseJSON);
    console.log(dt);
    var hour = dt.slice(11, 13);
    console.log(hour);
    if (hour > 05 && hour < 18){
        bg = "day.png"
    }
    else{
        bg = "night.jpg"
    }
    bgImg = loadImage(bg);
}