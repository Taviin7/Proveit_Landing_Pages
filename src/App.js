import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import HomeMobile from './Components/Home/HomeMobile'
import Objetivo from './Components/Objetivo/Objetivo';
import ObjetivoMobile from './Components/Objetivo/ObjetivoMobile';
import Funcionalidades from './Components/Funcionalidades/Funcionalidades';
import FuncionalidadesMobile from './Components/Funcionalidades/FuncionalidadesMobile';
import ComoUsar from './Components/ComoUsar/ComoUsar';
import ComoUsarMobile from './Components/ComoUsar/ComoUsarMobile';
import CardIntegrantes from './Components/CardIntegrantes/CardIntegrantes';
import Footer from './Components/Footer/Footer';


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
      
      {isMobile ? null : <Objetivo/>}
      {isMobile && <ObjetivoMobile/>}

      {isMobile ? null : <Funcionalidades/>}
      {isMobile && <FuncionalidadesMobile/>}

      {isMobile ? null : <ComoUsar/>}
      {isMobile && <ComoUsarMobile/>}

      <CardIntegrantes />
      <Footer />
    </div>
  );
}

export default App;
