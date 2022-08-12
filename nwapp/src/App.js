


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import LinacPage from './components/LinacPage';
import MQPage from './components/MQPage';

function App() {

  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linacPage" element={<LinacPage />} />
          <Route path="/MQPage" element={<MQPage />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
