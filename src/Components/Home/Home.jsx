import React from "react";
import "./Home.css";
import Logo from "./Imgs/proveitLogo.png";
import Man from "./Imgs/negocomendo.png";
import GooglePlay from "./Imgs/getInGooglePlay.jpg";

export default function Home() {
  return (
    <section className="section1" id="Home">
      <div className="fundo">
        <header>
          <img className="logo" src={Logo} />
          <nav>
            <ul>
              <a href="#nosso-objetivo">Nosso Objetivo</a>
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#como-usar">Como Usar</a>
              <a href="#quem-somos">Quem Somos</a>
              <li className="Baixar">Baixar</li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="titleBox">
            <h1 className="font-WhiteOpace">A praticidade</h1>
            <h1 className="font-Orange">na palma da </h1>
            <h1 className="font-White">sua mão!</h1>
            <span className="subtitleBox">
              Nunca foi tão fácil encontrar uma receita!
            </span>
            <img className="getINGoogle" src={GooglePlay} />
          </div>
          <div className="imgBox">
            <img src={Man} />
          </div>
        </div>
      </div>
    </section>
  );
}
