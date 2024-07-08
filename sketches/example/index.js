// assets/sketch.js

export const sketch = ({ xrplAddress }) => (p) => {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(100);
  };

  p.draw = function () {
    console.log(xrplAddress)
    p.fill(255);
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
  }
}

export default {
  sketch
}
