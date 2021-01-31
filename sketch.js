var Cat;
var Cat_image1;
var Cat_image2;
var Cat_image3;
var Cat_image4;

var Rat;
var Rat_image1;
var Rat_image2;
var Rat_image3;
var Rat_image4;

var Garden;
var Garden_image;
 

function preload()
{
     Cat_image1 = loadAnimation("cat1.png");
     Cat_image2 = loadAnimation("cat2.png");
     Cat_image3 = loadAnimation("cat3.png");
     Cat_image4 = loadAnimation("cat4.png");

     Garden_image = loadImage("garden.png");

     Rat_image1 = loadAnimation("mouse1.png");
     Rat_image2 = loadAnimation("mouse2.png");
     Rat_image3 = loadAnimation("mouse3.png");
     Rat_image4 = loadAnimation("mouse4.png");
}


function setup()
{
createCanvas(800,500)

Cat = createSprite(676,254,50,40);
Cat.addAnimation("catrunning",Cat_image1);

Garden = createSprite(400,250,40,40);
Garden.addImage(Garden_image);




}

function draw()
{
KeyPressed();

drawSprites();

}


function KeyPressed()
{
if(keyCode === LEFT_ARROW)
{
Cat.velocityX = -5;
Cat.addAnimation("catRunning",Cat_image2);
Cat.changeAnimation("catRunning");



}
    
}