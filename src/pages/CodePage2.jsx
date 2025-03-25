import HeartsCode from "../components/HeartPages/HeartsCode";

const initialCode = `
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
`;

function CodePage2() {
  return (
    <div className="code-page">
      <h1>Experiment with the Code!</h1>
      <HeartsCode initialCode={initialCode} />
    </div>
  );
}

export default CodePage2;
