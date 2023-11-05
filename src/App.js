import React from "react";

import About from "./components/About";

import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Insights from "./components/Insights"
import Conclusion from "./components/Conclusion"

export default function App() {
  return (
    <main class = "bg-purp text-white">
      <Navbar />
      <About />
      <Process />
      <div className="h-40"> 
      </div>
      <Insights />
      <Conclusion />
    </main>
  );
}
