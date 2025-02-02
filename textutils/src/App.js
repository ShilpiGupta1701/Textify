// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#262c4c';
      showAlert("Dark mode has been enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="extify" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/"
          element={<TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
