import CirclePackCode from "../components/CirclePackPages/CirclePackCode";
import CirclePack from "../components/CirclePackPages/CirclePack";
import ExplanationBox from "../notUsed/ExplanationBox";
import CirclePackExplanation from "../components/CirclePackPages/CirclePackExplain";
import "../styles/PageStyles.css";

function CirclePackPage() {
  return (
    <div className="code-page">
      <div className="code-container">
        {/* Left Column: CirclePack */}
        <div className="left-column">
          <CirclePack />
        </div>

        {/* Right Column: SketchBox + ExplanationBox */}
        <div className="right-column">
          <CirclePackCode />
          <CirclePackExplanation />
        </div>
      </div>
    </div>
  );
}

export default CirclePackPage;
