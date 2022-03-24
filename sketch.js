/***********************************************************************************
  Sprite Navigation

  Simple use of the p5.play library
------------------------------------------------------------------------------------
  To use:
  Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// This is a 'sprite' which we can move
var ghost;
var speed = 10;

// Second 'sprite'
var bird;

// The is a static sprite
var star;
var starImg;

// Tree static sprite
var tree1;
var tree2;
var tree3;

function preload() {
  starImg = loadImage('assets/fullStar.png');
}
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a sprite with dimensions
  ghost = createSprite(400, 150);
  bird = createSprite(500, 150);

  // This is a *numbered* sequence of PNG files
  // We add animation to different sprites
  ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  bird.addAnimation('floating', 'assets/blob01.png', 'assets/blob08.png');

  // Create static sprites
  tree1 = createSprite(100, 100);
  tree1.addAnimation('floating', 'assets/tree01.png', 'assets/tree03.png')
  tree2 = createSprite(300, 500);
  tree2.addAnimation('floating', 'assets/tree01.png', 'assets/tree03.png')
  tree3 = createSprite(700, 300);
  tree3.addAnimation('floating', 'assets/tree01.png', 'assets/tree03.png')
}

// Draw code goes here
function draw() {

  // Spirtes disappear if they collide with the tree
  if (ghost.overlap(tree1) || ghost.overlap(tree2) || ghost.overlap(tree3)) {
    ghost.visible = false;
  } else {
    ghost.visible = true;
  }

  if (bird.overlap(tree1) || bird.overlap(tree2) || bird.overlap(tree3)) {
    bird.visible = false;
  } else {
    bird.visible = true;
  }

  // could draw a PNG file here
  background(255);

  // trap keyboard arrow keys
  checkMovement();

  // drawSprites is a function in p5.play, draws all the sprites
  drawSprites();

  // callback function
  //ghost.overlap(star, ghostCollision);
}

// This will reset position
function keyPressed() {
  if (key === ' ') {
    ghost.position.x = width / 2;
    ghost.position.y = height / 2;

    bird.position.x = (width / 2) + 100;
    bird.position.y = height / 2;
  }
}

function checkMovement() {
  // Check x movement
  if (keyIsDown(RIGHT_ARROW)) {
    ghost.velocity.x = speed;
    bird.velocity.x = speed;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    ghost.velocity.x = -speed;
    bird.velocity.x = -speed;
  }
  else {
    ghost.velocity.x = 0;
    bird.velocity.x = 0;
  }

  // Check y movement
  if (keyIsDown(DOWN_ARROW)) {
    ghost.velocity.y = speed;
    bird.velocity.y = speed;
  }
  else if (keyIsDown(UP_ARROW)) {
    ghost.velocity.y = -speed;
    bird.velocity.y = -speed;
  }
  else {
    ghost.velocity.y = 0;
    bird.velocity.y = 0;
  }

}

// SpriteA is the sprite in question, spriteA will be ghost in this case
// SpriteB is the one that it collided with
function ghostCollision(spriteA, spriteB) {
  ghost.position.x = 100;
  ghost.position.y = 100;

  //spriteB.remove();
}