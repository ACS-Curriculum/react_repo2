import SketchBox from "../components/HeartPages/SketchBox";
import HeartsCode from "../components/HeartPages/HeartsCode";
import ExplanationBox from "../notUsed/ExplanationBox";
import HeartsExplain from "../components/HeartPages/HeartsExplain";
import "../styles/PageStyles.css";

function CodePage() {
  return (
    <div className="code-page">
      <div className="code-container">
        {/* Left Column: CodeBox */}
        <div className="left-column">
          <HeartsCode />
        </div>

        {/* Right Column: SketchBox + ExplanationBox */}
        <div className="right-column">
          <SketchBox />
          <HeartsExplain />
        </div>
      </div>
    </div>
  );
}

export default CodePage;
