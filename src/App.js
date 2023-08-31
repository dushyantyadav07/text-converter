import React, { useState } from "react";
// import { Router } from "react-router-dom";

import "./App.css";
import Navvar from "./Component/Navvar";
import Textform from "./Component/Textform";
import About from "./Component/About";
// import Alert from "./Component/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
 
function App() {
  const [mode, setmode] = useState("light");
  const [dark, setdark] = useState("darkmode");

  // const [Alert, showAlert] = useState("alert");

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-succes')

  const togglemode = (cls) => {
    document.body.classList.add("bg-" + cls);
    // removeBodyClasses();
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setdark("Lightmode");
      //  showAlert("light mode is Disabled", "success")
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "darkred";
      setdark("Darkmode");
      //  showAlert("light mode is enabled", "success")
    }
  };

  return (
    <div>
     

      <BrowserRouter>
      <Navvar
        mode={mode}
        togglemode={togglemode}
        title="Textutlis"
        dark={dark}
      />
      <Routes>
        <Route path="/" element= { <Textform heading="Enter the text Analyze below" mode={mode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </BrowserRouter>

      {/* // {<Alert alert={alert} />}  */}

    </div>
  );
}

export default App;
