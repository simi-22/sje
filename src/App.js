import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import "./App.css";
import Home from "./Home";
import GsapTest from "./components/GsapTest";

function App() {
  return (
    <div id="appContainer">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/gsap" element={<GsapTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
