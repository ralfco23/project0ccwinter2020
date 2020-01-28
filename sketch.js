function setup() {
  // put setup code here
  createCanvas(1500, 700);

}

function draw() {
  // put drawing code here
  
  fill(random(255), random(255), random(255), random(255));

  ellipse(mouseX, mouseY, 200, 200)
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
  

  var size = width * 0.2;
  fill(255, 255, 51)
rect(width/2, height/2, size, size);

var size = width * 0.10;
fill(100, 200, 100)
translate(width/4, height/4);
triangle(0, 0, size, size*2, -size, size*2);

var size = width * 0.1;
fill(0, 191, 255)
ellipse(width/5, height/5, size, size);

}