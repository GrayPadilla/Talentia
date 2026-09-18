import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import DetalleCurso from "./pages/DetalleCurso";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<DetalleCurso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;