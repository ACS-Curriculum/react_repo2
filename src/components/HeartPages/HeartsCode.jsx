// CodeBox.jsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";


function HeartsCode() {
  const codeString = `
let hearts = [];
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 120, 5);
  slider.position(10, height + 10);
  reset();
}

function reset() {
  hearts = [];
  for (let i = 0; i < slider.value(); i++) {
    let x = floor(random(100, 300));
    let y = floor(random(100, 300));
    let size = random(40, 80);
    hearts.push(new Heart(x, y, size));
  }
}

function draw() {
  background(220, 50);
  if (hearts.length !== slider.value()) reset();
  for (let heart of hearts) {
    heart.display();
    heart.move();
  }
}

class Heart {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = random(150, 255);
    this.g = random(50, 150);
    this.b = random(50, 150);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
  }

  display() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.size / 2) {
      fill(255, 0, 0);
    } else {
      fill(this.r, this.g, this.b);
    }
    push();
    translate(this.x, this.y);
    scale(this.size / 100);
    beginShape();
    vertex(0, -50);
    bezierVertex(-50, -80, -80, -20, 0, 50);
    bezierVertex(80, -20, 50, -80, 0, -50);
    endShape(CLOSE);
    pop();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.size / 2 || this.x > width - this.size / 2) this.vx *= -1;
    if (this.y < this.size / 2 || this.y > height - this.size / 2) this.vy *= -1;
  }
}

function mousePressed() {
  reset();
}
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

export default HeartsCode;
