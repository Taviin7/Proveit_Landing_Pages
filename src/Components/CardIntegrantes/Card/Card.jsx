import React from "react";
import "./Card.css";

export default function Card({
  integrante,
  função,
  imagem,
  linkedin,
  github,
  instagram,
  linkinstagram,
  linklinkedin,
  linkgithub,
}) {
  return (
    <div className="containerIntegrantes">
      <div className="imgIntegrantes">
        <img src={imagem} />
      </div>
      <div className="cardIntegrantes">
        <div className="infoIntegrantes">
          <h1>{integrante}</h1>
          <h4>{função}</h4>
          <a href={linkgithub} target="__blank">
            <img src={github} />
          </a>
          <a href={linklinkedin} target="__blank">
            <img src={linkedin} />
          </a>
          <a href={linkinstagram} target="__blank">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
}
