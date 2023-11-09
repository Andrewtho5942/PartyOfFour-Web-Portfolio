import React from "react";
import {useState, useEffect} from "react"
import About from "./components/About";

import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Insights from "./components/Insights"
import Conclusion from "./components/Conclusion"

export default function App() {
  
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false
  }

  const [mode, setMode] = useState(getMode);

  const changeMode = () => { setMode(!mode); }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))
  }, [mode])

  return (
    <main>
      <div className = {mode ? "dark" : ""}> 
        <div className = "bg-darkbg overscroll-none"> 
          <Navbar darkMode={mode} changeTheme={changeMode} />
          <About />
          <Process />
          <div className="h-40"> </div>
          <Insights />
          <Conclusion />
        </div>
      </div>
    </main>
  );
}
