import React from "react";
import { Link } from 'react-scroll';
import "./Footer.css";
import Logo from "./imgs/proveitWhiteFade.png";
import btnDownload from "./imgs/Download_button 2.png";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div>
          <img src={Logo} />
        </div>
        <div className="boxFooter">
          <Link to="nosso-objetivo" smooth={true} duration={600}>Nosso Objetivo</Link>
          <Link to="funcionalidades" smooth={true} duration={600}>Funcionalidades</Link>
          <Link to="como-usar" smooth={true} duration={600}>Como Usar</Link>
          <Link to="quem-somos" smooth={true} duration={600}>Quem Somos</Link>
        </div>
        <div className="download">
          <img src={btnDownload} />
        </div>
      </div>
      <div className="copyright">
        <span>PROVEIT Copyright © 2023 ProveIT - All rights reserved</span>
      </div>
    </footer>
  );
}
