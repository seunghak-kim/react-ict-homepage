import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Contract from "./pages/contract";
import Intro from "./pages/Intro";
import Research from "./pages/Research";
import Information from "./pages/Information";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={MainPage} />
        <Route path="/intro" element={Intro} />
        <Route path="/research" element={Research} />
        <Route path="/information" element={information} />
        <Route path="/contract" element={Contract} />
      </Routes>
    </div>
  );
}

export default App;
