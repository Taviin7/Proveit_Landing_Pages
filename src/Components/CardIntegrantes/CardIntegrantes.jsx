import React, { useState, useEffect } from "react";
import "./CardIntegrantes.css";
import "./CardIntegrantes_tablet.css";
import Card from "./Card/Card";
import romario from "./Imgs/romario.png";
import lucas from "./Imgs/Lucas.png";
import marcos from "./Imgs/marcos.png";
import instagram from "./Imgs/Instagram.png";
import github from "./Imgs/GitHub.png";
import linkedin from "./Imgs/LinkedIn.png";
import renan from "./Imgs/renan.png";
import raul from "./Imgs/raul.png";
import otavio from "./Imgs/otavio.png";
import devlare from "./Imgs/devlare.png";
import proveit from "./Imgs/proveitWhite.png";

export default function CardIntegrantes() {

  const [isCelular, setIsCelular] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const atualizarEstadoTela = () => {
      setIsCelular(window.innerWidth <= 768);
    };

    window.addEventListener('resize', atualizarEstadoTela);

    return () => {
      window.removeEventListener('resize', atualizarEstadoTela);
    };
  }, []);

  return (
    <section className="section5" id="quem-somos">
      <div className="container1">
        <div className="title-weare">
          <h1 className="font-WhiteWe">Quem</h1>
          <h1 className="font-OrangeAre">somos?</h1>
        </div>
        <div className="textofinal">
          <div className="textfinal">
            <p>
              O ProveIt! nasceu em um TCC proposto na ETEC em 2022, com a ideia
              principal de facilitar os processos culinários das pessoas, trazendo
              mais praticidade e agilidade.
              <br />
              <br />
              Pesquisamos e procuramos diversas culinárias diferentes, pra ter uma
              melhor abrangência de publico, além das pessoas poderem adicionar suas
              próprias receitas, trouxemos um novo modo de pesquisa para aqueles que
              não sabem o que cozinhar com o que tem na cozinha!
            </p>
          </div>
          <div className="container_logos">
            <img src={devlare} id="img1" />
            {isCelular ? null :
            <img src={proveit} id="img2" />}
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="container-ourteam">
          <div className="title-ourteam">
            <h1 className="font-WhiteOur2">Our</h1>
            <h1 className="font-OrangeTeam2">TEAM</h1>
          </div>
{isCelular ? null :
          <div className="boxIntegrantes">
            <Card
              integrante="Romario Silva"
              função="Frontend"
              imagem={romario}
              github={github}
              instagram={instagram}
              linkedin={linkedin}
              linkinstagram={"https://www.instagram.com/_zroma_/"}
              linkgithub={"https://github.com/romagrinho"}
              linklinkedin={"https://br.linkedin.com/in/romario-silva-53371224b"}
            />
            <Card
              integrante="Lucas Ferreira"
              função="Frontend"
              imagem={lucas}
              github={github}
              instagram={instagram}
              linkgithub={"https://github.com/404lucas"}
              linkinstagram={"https://www.instagram.com/luucaslul/"}
            />
            <Card
              integrante="Marcos Alves"
              função="Frontend"
              imagem={marcos}
              github={github}
              instagram={instagram}
              linkinstagram={"https://www.instagram.com/marquinhos.jpeg/"}
              linkgithub={"https://github.com/marquinhosjpg"}
            />
            <Card
              integrante="Renan Rodrigues"
              função="Backend"
              imagem={renan}
              github={github}
              instagram={instagram}
              linkinstagram={"https://www.instagram.com/renanroliveira_/"}
              linkgithub={"https://github.com/renan328"}
            />
            <Card
              integrante="Raul Murilo"
              função="Backend"
              imagem={raul}
              instagram={instagram}
              linkinstagram={"https://www.instagram.com/rraul.mav/"}
            />
            <Card
              integrante="Otavio Lago"
              função="Backend"
              imagem={otavio}
              github={github}
              instagram={instagram}
              linkinstagram={"https://www.instagram.com/taviin9_/"}
              linkgithub={"https://github.com/Taviin7"}
            />
          </div>}
        </div>
      </div>
    </section>
  );
}
