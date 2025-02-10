import "./App.css";
import React , {useState} from "react";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";


function App() {
  const [mode,setMode]=useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor='rgb(28 44 69)';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils"/> */}
      <div className="container my=5">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
