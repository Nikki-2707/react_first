import "./App.css";
import React , {useState} from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


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

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor='rgb(28 44 69)';
      showAlert("Dark mode has been enabled","success");
      // document.title='TextUtils - Dark Mode'; //not much needed
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title='TextUtils - Light Mode'; //not much needed
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils"/> */}
      <div className="container my=5">
      <Routes>
        {/* /user --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
      </Routes> 
      <Routes>
        <Route path="/" element={
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
        }/>
      </Routes>
      {/* <About/> */}
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
