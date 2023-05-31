import React from "react";
import "./Footer.css";
import Logo from "./proveitLogo.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container-footer">
        <div>
          <img src={Logo} />
        </div>
        <div className="boxFooter">
          <text>Nosso Objetivo</text>
          <text>Como Usar</text>
          <text>Funcinalidades</text>
          <text>Quem Somos</text>
        </div>
      </div>
    </section>
  );
}
