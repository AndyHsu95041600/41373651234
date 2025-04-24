let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fefae0');
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(50, 100),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background('#fefae0');
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    let newSize = map(mouseX, 0, width, 40, 120);
    ellipse(circle.x, circle.y, newSize, newSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
