import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import FilterIng from "./components/FilterIng";
import FilterNameMeal from "./components/FilterNameMeal";

function App() {
  const [showModal, setShowModal] = useState(false);
  //create handleclick in this section

  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr className="line-navbar" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path={`/filterIng`}
            element={<FilterIng />}
          />
          <Route 
          path="/filterNameMeal" 
          element={<FilterNameMeal />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
