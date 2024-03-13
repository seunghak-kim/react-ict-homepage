import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import Contract from "./pages/Contract";
import Intro from "./pages/Intro";
import Research from "./pages/Research";
import Information from "./pages/Information";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/intro" element={<Intro></Intro>} />
        <Route path="/research" element={<Research></Research>} />
        <Route path="/information" element={<Information />} />
        <Route path="/contract" element={<Contract />} />
      </Routes>
    </div>
  );
}

export default App;
