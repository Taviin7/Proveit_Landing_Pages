import React from "react";
import "./Card.css";

export default function Card({ integrante, imagem }) {
  return (
    <div className="containerIntegrantes">
      <div className="imgIntegrantes">
        <img src={imagem}></img>
      </div>
      <div className="cardIntegrantes">
        <h1>{integrante}</h1>
      </div>
    </div>
  );
}
