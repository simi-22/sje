import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
