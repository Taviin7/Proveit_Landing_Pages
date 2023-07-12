import React from "react";
import { Link } from 'react-scroll';
import "./Home.css";
import Logo from "./Imgs/proveitLogo.png";
import Man from "./Imgs/negocomendo.png";
import BtnDownload from "./Imgs/Download_button 1.png";

export default function Home() {

  return (
    <section id="Home">
      <div className="fundo">
        <header>
          <img className="logo" src={Logo} />
          <nav>
            <ul>
              <Link to="nosso-objetivo" className="ancoras" smooth={true} duration={600}>Nosso Objetivo</Link>
              <Link to="funcionalidades" className="ancoras" smooth={true} duration={600}>Funcionalidades</Link>
              <Link to="como-usar" className="ancoras" smooth={true} duration={600}>Como Usar</Link>
              <Link to="quem-somos" className="ancoras" smooth={true} duration={600}>Quem Somos</Link>
              <a className="Baixar" href="">
                Baixe o app
              </a>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="titleBox1">
            <h1 className="font-WhiteOpace">A praticidade</h1>
            <h1 className="fontOrange">na palma </h1>
            <div className="titleBox2">
              <h1 className="font-White">da sua</h1>
              <div className="wordmao">
                <h1 className="fontOrange">mão!</h1>
              </div>
            </div>
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

