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
          <text>Olá</text>
          <text>Olá</text>
          <text>Oi</text>
          <text>Oi</text>
        </div>
      </div>
    </section>
  );
}
