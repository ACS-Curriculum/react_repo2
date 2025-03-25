import { useEffect, useRef } from "react";
import p5 from "p5";


function Sketch() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.pixelDensity(2); // Improves quality on high-DPI screens
        p.createCanvas(400, 400).parent(sketchRef.current);
      };

      p.draw = () => {
        p.background(200);
        p.fill(255, 0, 0);
        p.ellipse(p.width / 2, p.height / 2, 100, 100);
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove(); // Cleanup on unmount
    };
  }, []); // Empty dependency array prevents duplicate sketches

  return <div ref={sketchRef} className="sketch-container"></div>;
}

export default Sketch;
