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
import CardIntegrantesMobile from './Components/CardIntegrantes/CardIntegrantesMobile';
import Footer from './Components/Footer/Footer';
import FooterMobile from './Components/Footer/FooterMobile';


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
      {isMobile && <HomeMobile />}

      {isMobile ? null : <Objetivo />}
      {isMobile && <ObjetivoMobile />}

      {isMobile ? null : <Funcionalidades />}
      {isMobile && <FuncionalidadesMobile />}

      {isMobile ? null : <ComoUsar />}
      {isMobile && <ComoUsarMobile />}

      {isMobile ? null : <CardIntegrantes />}
      {isMobile && <CardIntegrantesMobile />}

      {isMobile ? null : <Footer />}
      {isMobile && <FooterMobile />}
    </div>
  );
}

export default App;
