import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeartsPage from "./pages/HeartsPage"; 
import CodePage2 from "./pages/CodePage2"; 
import CirclePackPage from "./pages/CirclePackPage"; // ✅ Import new page
import Menu from "./components/Menu";
import Footer from "./components/Footer"; // ✅ Import Footer
import "./styles/PageStyles.css";
import "./styles/App.css";

function App() {
  return (
    <Router basename="/react_repo2/">
      {/* Navigation Menu - Stays Fixed at the Top */}
      <Menu />

      {/* Main Content Area */}
      <main> 
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />

          {/* Pages for Code-Based Content */}
          <Route path="/hearts" element={<HeartsPage />} />
          <Route path="/experiment" element={<CodePage2 />} />
          <Route path="/circle-pack" element={<CirclePackPage />} /> {/* ✅ New page route */}
        </Routes>
      </main>

      {/* Footer - Stays at the Bottom */}
      <Footer />
    </Router>
  );
}

export default App;
