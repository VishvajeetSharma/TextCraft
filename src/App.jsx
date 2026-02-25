import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [name, setName] = useState('Enable Dark Mode');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typo) => {
    setAlert({
      msg: message,
      typo: typo
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33 37 50)';
      document.body.style.color = 'white';
      setName('Disable Dark Mode');
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setName('Enable Dark Mode');
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Navbar
          title="TextCraft"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          name={name}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextCraft - Word & Character Counter | Case Converter | Text Formatter"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;