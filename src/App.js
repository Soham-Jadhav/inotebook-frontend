import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }

  return (
    <NoteState>
      <Router>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/home" element={<Home showAlert={showAlert} />}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/login" element={<Login showAlert={showAlert} />}>
            </Route>
            <Route exact path="/signup" element={<Signup showAlert={showAlert} />}>
            </Route>
            <Route exact path="/" element={<Home showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
