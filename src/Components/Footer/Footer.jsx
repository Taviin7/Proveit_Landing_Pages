import React from "react";
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
          <a href="#nosso-objetivo">Nosso Objetivo</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#como-usar">Como Usar</a>
          <a href="#quem-somos">Quem Somos</a>
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
