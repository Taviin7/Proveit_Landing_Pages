import React from "react";
import "./Objetivo.css";
import "./Objetivo_cel.css";
import Salada from "./imgs/saladafoda.png";
import Pontos from "./imgs/pontos.png";

export default function Objetivo() {
  return (
    <section className="section2" id="nosso-objetivo">
      <div className="titleBox">
        <div className="titleBox2">
          <h1 className="fontBlack">Qual o nosso</h1>
          <h1 className="font-Orange2">objetivo?</h1>
        </div>
        <text className="font-Text">
          Nosso objetivo por meio do nosso aplicativo é conseguir facilitar a
          prática da culinária para os nossos usuários através das nossa
          principais ferramentas.
        </text>
      </div>
 {/*      <div className="imgPontos">
        <img src={Pontos} />
      </div> */}
      <div className="imgOrange">
        <img src={Salada} />
      </div>
    </section>
  );
}
