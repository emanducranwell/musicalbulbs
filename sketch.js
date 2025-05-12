

let bulbImage;
let bulbs = [];

let cordX, cordY;
let cordLength = 700;
let cordPullMax = 770;
let isPulling = false;
let bulbOpacity = 255;

let concertSound;
let hasPlayedSound = false;

function preload() {
  bulbImage = loadImage("lightbulbsingle.png");
  lightson = loadImage("northcote.jpg")
  lightsdim =loadImage("northcotelightson.jpg")
  concertSound = loadSound("rock-jazz.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cordX = windowWidth *0.95;
  cordY = 0;

  for (let i = 0; i < 30; i++) {
    let bulbX = random(50, width - 50);
    let bulbY = random(100, height / 1.5);
    let bulbSize = random(30, 100);
    
    bulbs.push({
      x: bulbX,
      y: bulbY,
      size: bulbSize
    });
  }
}

function draw() {
  // background(20, 3, 1);
  imageMode(CENTER)
  if (cordLength >= cordPullMax) {
    image(lightson, width / 2, height / 2, width, height);
  } else {
    image(lightsdim, width / 2, height / 2, width, height);
  }

  // Animation cord
  if (isPulling && cordLength < cordPullMax) {
    cordLength += 2;
    if (bulbOpacity > 10) {
      bulbOpacity -= 2; 
    }
  }

  if (isPulling && cordLength < cordPullMax) {
    cordLength += 2;
    if (bulbOpacity > 10) {
      bulbOpacity -= 2;
    }
  } else if (isPulling && cordLength >= cordPullMax && !hasPlayedSound) {
    concertSound.play();
    hasPlayedSound = true;
  }

  // cord
  stroke(255);
  strokeWeight(4);
  line(cordX, cordY, cordX, cordLength);
  fill(255);
  ellipse(cordX, cordLength, 20, 20); 

  // bulbs
  for (let bulb of bulbs) {
    let aspect = bulbImage.height / bulbImage.width;
    let w = bulb.size;
    let h = bulb.size * aspect;
    let centerX = bulb.x;
    let centerY = bulb.y;

    // bulb wire
    stroke(0);
    strokeWeight(2);
    line(centerX, 0, centerX, centerY);

    // dimming 
    tint(255, bulbOpacity);
    noStroke();
    image(bulbImage, centerX, centerY, w, h);
  }

  noTint();
}

// Start pulling on click near the handle
function mousePressed() {
  if (dist(mouseX, mouseY, cordX, cordLength) < 30) {
    isPulling = true;
  }
}



















// let bulbImage;
// let bulbs = []; // array to store bulb info

// function preload(){
//   bulbImage = loadImage("lightbulbsingle.png");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(20, 3, 1);

//   for (let x = 0; x < 30; x++) {
//     let bulbX = random(0, windowWidth);
//     let bulbY = random(0, windowHeight);
//     let bulbSize = random(10, 150); // Make sure to use "let" here!
//     bulbs.push({x: bulbX, y: bulbY, size: bulbSize}); // save the data
//   }

//   for (let bulb of bulbs) {
//     stroke(0);
//     strokeWeight(5);
//     line(bulb.x + bulb.size/2, 0, bulb.x + bulb.size/2, bulb.y + bulb.size/2);
//     noStroke();
//     image(bulbImage, bulb.x, bulb.y, bulb.size, bulb.size);
//   }
// }

// function draw() {
//   // nothing here
// }


