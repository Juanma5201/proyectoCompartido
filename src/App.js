import Home from "./pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import Contacto from "./pages/Contacto/Contacto";

function App() { 
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ul><li>Fede</li>
        <li>Bruno</li></ul>} />
        <Route path="/:id" element={<p>Ruta dinámica</p>} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default App;
