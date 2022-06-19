import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
// let name = "Navdeep Maheshwari";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About-TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} showAlert={showAlert}/>
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter Text" mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/contact">
           <Contact mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
