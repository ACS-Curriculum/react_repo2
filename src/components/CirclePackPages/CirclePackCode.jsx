import { useEffect, useRef } from "react";
import p5 from "p5";


function CirclePackCode() {
  // Reference for attaching the p5 canvas
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let circles = []; // Array to store circle objects
      let numCircles = 14; // Initial number of circles

      // p5 setup function: initializes the canvas and circles
      p.setup = () => {
        p.createCanvas(400, 400);
        startCircles();
      };

      // Adds a new circle at a random position
      function addCircle() {
        circles.push(
          new Circle(p.random(10, p.width - 10), p.random(10, p.height - 10), p.random(5, 20))
        );
      }

      // Initializes circles at random positions
      function startCircles() {
        for (let i = 0; i < numCircles; i++) {
          circles.push(
            new Circle(
              p.random(10, p.width - 10),
              p.random(10, p.height - 10),
              p.random(10, 20)
            )
          );
        }
      }

      // p5 draw function: runs continuously to update the sketch
      p.draw = () => {
        p.background(220);

        let collisions = [];
        // Check for collisions between all circle pairs
        for (let i = 0; i < circles.length; i++) {
          for (let j = i + 1; j < circles.length; j++) {
            let overlap = circles[i].checkCollision(circles[j]);
            if (overlap) {
              collisions.push({ circle1: circles[i], circle2: circles[j], overlap });
            }
          }
        }

        // Every 120 frames, add a new circle
        if (p.frameCount % 120 === 0) {
          addCircle();
        }

        // Resolve detected collisions
        for (let collision of collisions) {
          resolveCollision(collision.circle1, collision.circle2, collision.overlap);
        }

        // Display and update each circle
        for (let circle of circles) {
          circle.display();
          circle.move();
        }
      };

      // Resolves overlapping circles by adjusting their positions and swapping velocities
      function resolveCollision(circle1, circle2, overlap) {
        let dx = circle2.x - circle1.x;
        let dy = circle2.y - circle1.y;
        let angle = p.atan2(dy, dx);

        // Move circles apart to prevent overlap
        circle1.x -= (p.cos(angle) * overlap) / 2;
        circle1.y -= (p.sin(angle) * overlap) / 2;
        circle2.x += (p.cos(angle) * overlap) / 2;
        circle2.y += (p.sin(angle) * overlap) / 2;

        // Swap velocities to simulate bouncing effect
        [circle1.velocityx, circle2.velocityx] = [circle2.velocityx, circle1.velocityx];
        [circle1.velocityy, circle2.velocityy] = [circle2.velocityy, circle1.velocityy];
      }

      // Circle class representing each bouncing circle
      class Circle {
        constructor(x, y, rad) {
          this.x = x;
          this.y = y;
          this.rad = rad;
          this.r = p.random(0, 255);
          this.g = p.random(0, 255);
          this.b = p.random(0, 255);
          this.wind = p.random(-0.04, 0.04);
          this.gravity = 0.02;
          this.speedx = p.random(-0.005, 0.005);
          this.speedy = p.random(-0.005, 0.005);
          this.velocityx = 0;
          this.velocityy = 0;
        }

        // Draws the circle
        display() {
          p.noFill();
          p.stroke(this.r, this.g, this.b);
          p.strokeWeight(3);
          p.ellipse(this.x, this.y, this.rad * 2);
        }

        // Updates circle position and handles boundary collisions
        move() {
          this.velocityx += this.speedx;
          this.velocityy += this.speedy;
          this.x += this.velocityx + this.wind;
          this.y += this.velocityy;

          // Bounce off the right wall
          if (this.x + this.rad > p.width) {
            this.x = p.width - this.rad;
            this.velocityx *= -1;
          }

          // Bounce off the left wall
          if (this.x - this.rad < 0) {
            this.x = this.rad;
            this.velocityx *= -1;
          }

          // Bounce off the bottom wall
          if (this.y + this.rad > p.height) {
            this.y = p.height - this.rad;
            this.velocityy *= -1;
          }

          // Bounce off the top wall
          if (this.y - this.rad < 0) {
            this.y = this.rad;
            this.velocityy *= -1;
          }
        }

        // Checks if two circles overlap (collision detection)
        checkCollision(other) {
          let dx = this.x - other.x;
          let dy = this.y - other.y;
          let distance = p.sqrt(dx * dx + dy * dy);

          if (distance < this.rad + other.rad) {
            return this.rad + other.rad - distance; // Return overlap distance
          }
          return null; // No collision
        }
      }


    };

    // Initialize p5 instance and attach to ref
    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove(); // Cleanup function to remove p5 instance
    };
  }, []);

  return (
    <div className="sketch-box">
      <h2>p5.js Sketch</h2>
      <div ref={sketchRef}></div>
    </div>
  );
}

export default CirclePackCode;
