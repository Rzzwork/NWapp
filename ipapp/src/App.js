


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import CreateAddress from './components/CreateAddress';
import Addresses from './components/Addresses';

function App() {

  return (
    <div className="App">

      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Address" element={<Addresses />} />
            <Route path="/create" element={<CreateAddress />} />      
        </Routes>
      </Router>

    </div >
  );
}

export default App;
