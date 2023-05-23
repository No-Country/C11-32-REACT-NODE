import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RoadMap from './pages/RoadMap/RoadMap';
import NavBar from './components/NavBar/NavBar';
import navLinks from "./constants/navLinksData";
import Login from './pages/login/Login';
import About from './pages/About/About';
import VideoCalling from './pages/VideoCalling/VideoCalling';

function App() {
  return (
    <div className='App'>

  <NavBar navLinks={navLinks} />
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Salas" element={<VideoCalling/>} />
        <Route path="/RoadMap" element={<RoadMap />} />
        <Route path="/Login" element= {<Login/>}/>
        <Route path="*" element={<>Not Found</>} />
      </Routes>
      

    </div>
  );
}

export default App;
