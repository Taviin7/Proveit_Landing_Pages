import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import "./Footer.css";
import "./Footer_cel.css";
import "./Footer_tablet.css";
import Logo from "./imgs/proveitWhiteFade.png";
import btnDownload from "./imgs/Download_button 2.png";

export default function Footer() {

  const [isCelular, setIsCelular] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const atualizarEstadoTela = () => {
      setIsCelular(window.innerWidth <= 768);
    };

    window.addEventListener('resize', atualizarEstadoTela);

    return () => {
      window.removeEventListener('resize', atualizarEstadoTela);
    };
  }, []);

  return (
    <footer>
      <div className="container-footer-MAIN">
        <div className="container-footer">
          <div className="img_logo">
            <img src={Logo} />
          </div>
          <div className="boxFooter_main" >
            {isCelular ? null :
              <div className="boxFooter">
                <Link to="nosso-objetivo" smooth={true} duration={600}>Nosso Objetivo</Link>
                <Link to="como-usar" smooth={true} duration={600}>Como Usar</Link>
                <Link to="funcionalidades" smooth={true} duration={600}>Funcionalidades</Link>
                <Link to="quem-somos" smooth={true} duration={600}>Quem Somos</Link>
              </div>
            }
            <div className="download_box">
              <div className="download" >
                <h1>Baixe</h1>
                <a className="btn_download" href="https://www.mediafire.com/file/j1jx3mrdmwwrjku/ProveitUsers.apk/file" target="_blank">
                  <img src={btnDownload} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>PROVEIT Copyright © 2023 ProveIT - All rights reserved</span>
      </div>
    </footer>
  );
}
