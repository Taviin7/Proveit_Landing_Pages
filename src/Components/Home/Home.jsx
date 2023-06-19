import React from "react";
import "./Home.css";
import Logo from "./Imgs/proveitLogo.png";
import Man from "./Imgs/negocomendo.png";
import BtnDownload from "./Imgs/Download_button 1.png";

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
              <a className="Baixar" href="">
                Baixar
              </a>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="titleBox">
            <h1 className="font-WhiteOpace">A praticidade</h1>
            <h1 className="fontOrange">na palma da </h1>
            <h1 className="font-White">sua mão!</h1>
            <span className="subtitleBox">
              Nunca foi tão fácil encontrar uma receita!
            </span>
            <img className="BtnDownload" src={BtnDownload} />
          </div>
          <div className="imgBox">
            <img src={Man} />
          </div>
        </div>
      </div>
    </section>
  );
}
