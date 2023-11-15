import React from "react";
import {useState, useEffect} from "react"
//import About from "./components/About";
import Navbar from "./components/Navbar"
//import Process from "./components/Process"
//import Insights from "./components/Insights"
//import Conclusion from "./components/Conclusion"
import Main from "./components/Main"

export default function App() {
  
  const [mode, setMode] = useState(true);

  const changeMode = () => { 
    setMode(!mode);
   }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode))
  }, [mode])

  return (
    <div className = {mode ? "dark bg-darkbg" : "bg-lightbg"}> 
        <Navbar darkMode={mode} changeTheme={changeMode} />
        <Main />
        
    </div>
  );
}
