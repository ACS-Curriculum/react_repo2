import SketchBox from "../components/HeartPages/SketchBox";
import HeartsCode from "../components/HeartPages/HeartsCode";
import ExplanationBox from "../components/ExplanationBox";
import "../styles/PageStyles.css";

function CodePage() {
  return (
    <div className="code-page">
      <div className="code-container">
        <div className="left-column">
          <SketchBox />
          <ExplanationBox />
        </div>
        <div className="right-column">
          <HeartsCode />
        </div>
      </div>
    </div>
  );
}

export default CodePage;
