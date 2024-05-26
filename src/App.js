import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import "./App.scss";
import Home from "./Home";
import GsapTest from "./components/GsapTest";

function App() {
  return (
    <div id="appContainer">
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/gsap" element={<GsapTest />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
