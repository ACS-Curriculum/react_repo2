import { useEffect, useRef } from "react";
import p5 from "p5";

function SketchBox() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let hearts = [];
      let slider, sliderContainer;

      p.setup = () => {
        p.createCanvas(400, 400);
        sliderContainer = p.createDiv().style("text-align", "center");
        slider = p.createSlider(1, 120, 5);
        slider.parent(sliderContainer);
        reset();
      };

      function reset() {
        hearts = [];
        for (let i = 0; i < slider.value(); i++) {
          let x = p.floor(p.random(100, 300));
          let y = p.floor(p.random(100, 300));
          let size = p.random(40, 80);
          hearts.push(new Heart(x, y, size));
        }
      }

      p.draw = () => {
        p.background(220, 50);
        if (p.frameCount % 10 === 0 && hearts.length !== slider.value()) {
          reset();
        }
        for (let heart of hearts) {
          heart.display();
          heart.move();
        }
      };

      class Heart {
        constructor(x, y, size) {
          this.x = x;
          this.y = y;
          this.size = size;
          this.r = p.random(150, 255);
          this.g = p.random(50, 150);
          this.b = p.random(50, 150);
          this.vx = p.random(-1, 1);
          this.vy = p.random(-1, 1);
        }

        display() {
          if (p.dist(p.mouseX, p.mouseY, this.x, this.y) < this.size / 2) {
            p.fill(255, 0, 0);
          } else {
            p.fill(this.r, this.g, this.b);
          }
          p.push();
          p.translate(this.x, this.y);
          p.scale(this.size / 100);
          p.beginShape();
          p.vertex(0, -50);
          p.bezierVertex(-50, -80, -80, -20, 0, 50);
          p.bezierVertex(80, -20, 50, -80, 0, -50);
          p.endShape(p.CLOSE);
          p.pop();
        }

        move() {
          this.x = p.lerp(this.x, this.x + this.vx, 0.8);
          this.y = p.lerp(this.y, this.y + this.vy, 0.8);
          if (this.x < this.size / 2 || this.x > p.width - this.size / 2) this.vx *= -1;
          if (this.y < this.size / 2 || this.y > p.height - this.size / 2) this.vy *= -1;
        }
      }

      p.mousePressed = () => {
        let clickedOnHeart = hearts.some(
          (heart) => p.dist(p.mouseX, p.mouseY, heart.x, heart.y) < heart.size / 2
        );
        if (!clickedOnHeart) reset();
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div className="sketch-box">
      <h2>p5.js Sketch</h2>
      <div ref={sketchRef}></div>
    </div>
  );
}

export default SketchBox;
