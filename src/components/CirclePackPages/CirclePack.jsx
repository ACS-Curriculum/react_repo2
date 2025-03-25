// CodeBox.jsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";


function CirclePack() {
  const codeString = `
var circs = [];
var numCircles = 9;
var more = false;
//put faces on circles
//if tehre is a certain number make em smaller
//start over afger certin numbe
//find space, size and place
//proper circle pack algo thatg uses a boolean
//get all names of algos together

function setup() {
  createCanvas(400, 400);
  startCircles();
}
function addCircle() {
  circs.push(
    new Circle(random(10, width - 10), random(10, height - 10), random(5, 20))
  );
}
function startCircles() {
  for (var i = 0; i < 14; i++) {
    circs.push(
      new Circle(
        random(10, width - 10),
        random(10, height - 10),
        random(10, 20)
      )
    );
  }
}
function draw() {
  background(220);
  let collisions = [];
  // Detect all collisions without resolving them yet
  for (let i = 0; i < circs.length; i++) {
    for (let j = i + 1; j < circs.length; j++) {
      let collision = circs[i].checkCollision(circs[j]);
      if (collision) {
        collisions.push({
          circle1: circs[i],
          circle2: circs[j],
          overlap: collision,
        });
      }
    }
  }

  if (frameCount % 120 == 0) {
    addCircle();
  }

  // After detecting all collisions, resolve them
  for (let collision of collisions) {
    resolveCollision(collision.circle1, collision.circle2, collision.overlap);
  }

  // Display and move circles
  for (let i = 0; i < circs.length; i++) {
    circs[i].display();
    circs[i].move();
  }
}

function resolveCollision(circle1, circle2, overlap) {
  // Calculate the angle of the collision
  var dx = circle2.x - circle1.x;
  var dy = circle2.y - circle1.y;
  var angle = atan2(dy, dx);

  // Adjust positions to prevent overlap
  circle1.x -= (cos(angle) * overlap) / 2;
  circle1.y -= (sin(angle) * overlap) / 2;
  circle2.x += (cos(angle) * overlap) / 2;
  circle2.y += (sin(angle) * overlap) / 2;

  // Optional: Adjust velocities (simplified)
  var tempSpeedX = circle1.velocityx;
  var tempSpeedY = circle1.velocityy;
  circle1.velocityx = circle2.velocityx;
  circle1.velocityy = circle2.velocityy;
  circle2.velocityx = tempSpeedX;
  circle2.velocityy = tempSpeedY;
}

class Circle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.wind = random(-0.04, 0.04);
    this.g = 0.02;
    this.speedx = random(-0.005, 0.005);
    this.speedy = random(-0.005, 0.005);
    this.velocityx = 0;
    this.velocityy = 0;
  }

  display() {
    noFill();
    stroke(this.r, this.g, this.b);
    strokeWeight(3);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 2);
  }

  move() {
    this.velocityx += this.speedx;
    this.velocityy += this.speedy;
    this.x += this.velocityx + this.wind;
    this.y += this.velocityy;
    //this.x += this.wind;
    //this.y += this.g;

    if (this.x + this.rad > width) {
      this.x = this.x - this.rad;
      this.velocityx *= -1;
      more = true;
    }

    if (this.x - this.rad < 0) {
      this.x = this.x + this.rad;
      this.velocityx *= -1;
    }

    if (this.y + this.rad > height) {
      this.y = this.y - this.rad;
      this.velocityy *= -1;
    }

    if (this.y - this.rad < 0) {
      this.y = this.y + this.rad;
      this.velocityy *= -1;
    }
  }

  checkCollision(other) {
    var dx = this.x - other.x;
    var dy = this.y - other.y;
    var d = sqrt(dx * dx + dy * dy);

    if (d < this.rad + other.rad) {
      var overlap = this.rad + other.rad - d;
      return overlap; // Return the overlap amount for resolution
    }
    return null; // No collision
  }
}

function touchStarted() {
  if (!fullscreen()) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function (event) {
  event.preventDefault();
};

  `.trim();

  return (
    <div className="code-box">
      <h2>Code</h2>
      <SyntaxHighlighter language="javascript" style={prismStyles.tomorrow} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CirclePack;
