import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Contract from "./pages/Contract";
import Intro from "./pages/Intro";
import Research from "./pages/Research";
import Information from "./pages/Information";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/research" element={<Research />} />
          <Route path="/information" element={<Information />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
