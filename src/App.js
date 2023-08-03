import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import HomeMobile from './Components/Home/HomeMobile'
import CardIntegrantes from './Components/CardIntegrantes/CardIntegrantes';
import ComoUsar from './Components/ComoUsar/ComoUsar';
import Footer from './Components/Footer/Footer';
import Funcionalidades from './Components/Funcionalidades/Funcionalidades';
import Objetivo from './Components/Objetivo/Objetivo';


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const atualizarEstadoTela = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', atualizarEstadoTela);

    return () => {
      window.removeEventListener('resize', atualizarEstadoTela);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? null : <Home />}
      {isMobile && <HomeMobile/>}
      
      <Objetivo />
      <Funcionalidades />
      <ComoUsar />
      <CardIntegrantes />
      <Footer />
    </div>
  );
}

export default App;
