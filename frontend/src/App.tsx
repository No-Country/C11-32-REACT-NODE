import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RoadMap from './pages/RoadMap/RoadMap';
import NavBar from './components/NavBar/NavBar';
import navLinks from "./constants/navLinksData";
import About from './pages/About/About';
import Login from './pages/login/Login';
import VideoCalling from './pages/VideoCalling/VideoCalling';
import ContainerBlog from './pages/Blog/ContainerBlog';

function App() {
  return (
  

 <>
  <NavBar navLinks={navLinks} />
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />

        <Route path="/RoadMap" element={<RoadMap />} />
        <Route path="/Blog" element={<ContainerBlog/>} />
        <Route path="/Salas" element={<VideoCalling/>} />
        <Route path="/Login" element= {<Login/>}/>

        <Route path="*" element={<>Not Found</>} />
      </Routes>
 </>
      

  );
}

export default App;
