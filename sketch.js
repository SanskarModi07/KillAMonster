const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    background1 = loadImage("gamingbackground2.png");
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, 600, 1200, 20);
    box1 = new Box(900, 100, 70, 70);
    box2 = new Box(900, 100, 70, 70);
    box3 = new Box(900, 100, 70, 70);
    box4 = new Box(900, 100, 70, 70);
    box5 = new Box(900, 100, 70, 70);
    box6 = new Box(900, 100, 70, 70);

    box7 = new Box(800 , 100, 70,70);
    box8 = new Box(800 , 100, 70,70);
    box9 = new Box(800 , 100, 70,70);
    box10 = new Box(800 , 100, 70,70);
    box11 = new Box(800 , 100, 70,70);
    box12 = new Box(800 , 100, 70,70);

    box13 = new Box(700 , 100, 70,70);
    box14 = new Box(700 , 100, 70,70);
    box15 = new Box(700 , 100, 70,70);
    box16 = new Box(700 , 100, 70,70);
    box17 = new Box(700 , 100, 70,70);
    box18 = new Box(700 , 100, 70,70);
    box19 = new Box(700 , 100, 70,70);
    box20 = new Box(700 , 100, 70,70);

    ball1 = new Ball(200, 200, 200, 100);

    rope1 = new Rope(ball1.body , {x:500,y:50});

    monster1 = new Monster(1200,400, 200, 200);

    ground2 = new Ground(1200,500, 5, 10)

    
    



}

function draw(){
    background(background1);
    Engine.update(engine);
    
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ball1.display();

    rope1.display();

    monster1.display();

    //ground2.display();

    
    
}

function mouseDragged(){
   Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY})
    
}
