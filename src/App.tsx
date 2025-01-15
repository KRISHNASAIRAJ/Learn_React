import NavBar from "./components/NavBar";
import "./App.css";
import Rewards from "./components/Rewards";
import CreditCards from "./components/CreditCards";
import Banks from "./components/Banks";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
        <NavBar />
        <div className="background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/banks" element={<Banks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
