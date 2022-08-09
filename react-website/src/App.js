import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Bergen from "./pages/Bergen";
import Hardangerfjord from "./pages/Hardangerfjord";
import Itinerary from "./pages/Itinerary";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Itinerary" element={<Itinerary/>} />
          <Route path="/Bergen" element={<Bergen/>} />
          <Route path="/Hardangerfjord" element={<Hardangerfjord/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
