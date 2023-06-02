import React from "react";
import "./Card.css";


export default function Card({integrante, função, imagem, linkedin, github, instagram, linkgit, linkinstagram, linklinkedin}) {
  return (
    <div className="containerIntegrantes">
      <div className="imgIntegrantes">
        <img src={imagem} />
      </div>
      <div className="cardIntegrantes">
        <div className="infoIntegrantes">
          <h1>{integrante}</h1>
          <h4>{função}</h4>
          <img src={github} href={linkgit}/>
          <img src={instagram} href={linkinstagram}/>
          <img src={linkedin} href={linklinkedin}/>
        </div>
      </div>
    </div>
  );
}
