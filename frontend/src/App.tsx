import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RoadMap from './pages/RoadMap/RoadMap';
import NavBar from './components/NavBar/NavBar';
import navLinks from "./constants/navLinksData";
import About from './pages/About/About';

function App() {
  return (
    <div className='App'>
      <NavBar navLinks={navLinks} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="*" element={<>Not Found</>} />
        <Route path="/RoadMap" element={<RoadMap />} />
      </Routes>
    </div>
  );
}

export default App;
