var bgImg
let snowflakes = []; // array to hold snowflake objects

function preload(){
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800, 400);

}

function draw() {
  background(bgImg);
  let t = frameCount / 100000; // update time

  
  for (let i = 0; i < random(0,1); i++) {
    snowflakes.push(new snowflake()); 
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  
  this.posX = random(0,800);
  this.posY =  0 ;
  this.velocityY=0.001
  this.initialangle = random(0, 4 * PI);
  this.size = random(0,2);
  this.image = loadImage("snow5.webp");



  this.update = function(time) {
   
    

    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {

    push();
    translate(this.posX, this.posY);
    imageMode(CENTER);
    image(this.image,0,0,random(0,50),random(0,50));
    scale(0.05) 
    
    pop();
  };
}
