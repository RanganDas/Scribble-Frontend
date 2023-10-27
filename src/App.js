import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./comppnents/Navbar";
import Home from "./comppnents/Home";
import About from "./comppnents/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./comppnents/Alert";
import Login from "./comppnents/Login";
import Signup from "./comppnents/Signup";
import { useState } from "react";

function App() {
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
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container " style={{ marginBottom: '20px' }}><Alert alert={alert} /></div>
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                index
                element={<Home showAlert={showAlert} />}
              />
              <Route exact path="/about" index element={<About />} />
              <Route
                exact
                path="/login"
                index
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                index
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
