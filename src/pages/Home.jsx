import Sketch from "../components/HomePage/Sketch";


function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to My Sketches</h1>
      
      <div className="sketch-wrapper">
        <Sketch />
        <Sketch /> {/* Render a second instance of Sketch */}
      </div>
    </div>
  );
}

export default Home;
