import React from "react";
import Header from './Components/Header';
import Feature from "./Components/Feature";
import About from './Components/About';
import Presentation from "./Components/Presentation";
import aboutimage from './images/Frame-19.png';
import aboutimage1 from './images/download.png';
import Contact from "./Components/Contact";
function App(){
  return(
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Descubre la solucion de todas tus necesidades aqui' button='Obtener la app'/>
      <Presentation/>
      <About image={aboutimage1} title='Descarga la app Ahora' button='Descargar'/>
      <Contact/>
    </div>
  );
}

export default App;
