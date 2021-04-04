const Engine=Matter.Engine
const World =Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter. Constraint;
const Body= Matter.Body

var engine , world;
var box1 , box2 , box3 ,box4 ,box5 ,box6, box7, box8,box9,box10, box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball,sling

function preload(){

    pimg = loadImage("polygon.png")
}
function setup (){

    createCanvas(900,400)
    engine=Engine.create()

    world=engine.world
    ground=new Ground()
    stand1 =new Stand(390,300,250,10)
    //stand2 = new Stand (700,200,200,10)
    box1=new Box(300,275,30,40)
    box2=new Box(330,275,30,40)
    box3=new Box(390,275,30,40)
    box4=new Box(420,275,30,40)
    box5=new Box(450,275,30,40)
    box6=new Box(330,235,30,40)
    box7=new Box(360,235,30,40)
    box8=new Box(390,235,30,40)
    box9=new Box(420,235,30,40)
    box10=new Box(450,235,30,40)
    box11=new Box(360,195,30,40)
    box12=new Box(390,195,30,40)
    box13=new Box(420,195,30,40)
    box14=new Box(480,275,30,40)
    box15=new Box(390,155,30,40)
   // box16=new Box(800,100,30,40)
    
   // box17=new Box(800,100,70,70)
   // box18=new Box(800,100,70,70)
   // box19=new Box(800,100,70,70)
  //  box20=new Box(800,100,70,70)
    ball = Bodies.circle (50,200,20)
    World . add (world,ball)
   // sling = new Sling (ball.body,{x:500,y:50});

}
function draw (){

    background(180);
    Engine.update(engine);
    ground.display();
    stand1 . display();
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
   // box16.display();
   // box17.display();
    //box18.display();
   // box19.display();
    //box20.display();

   // ball.display();
   // sling.display();
    image (pimg,ball.position.x,ball.position.y,40,40)    
}
   
function mouseDragged(){

    Matter.Body . setPosition(ball.body,{x:mouseX,y:mouseY})
}
