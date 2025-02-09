import "./App.css";
import React , {useState} from "react";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils"/> */}
      <div className="container my=5">
      <TextForm heading="Enter the text to analyze below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
