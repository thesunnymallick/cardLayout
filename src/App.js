import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import "./Style/app.scss"
import "./Style/Home.scss"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     <Routes>

      <Route path="/" element={<Home/>}/>
     </Routes>

    </BrowserRouter>
  );
}

export default App;
