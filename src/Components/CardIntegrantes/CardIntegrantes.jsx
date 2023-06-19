import React from "react";
import "./CardIntegrantes.css";
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

export default function CardIntegrantes() {
  return (
    <section className="section5" id="quem-somos">
      <div className="textofinal">
        O ProveIt! nasceu em um TCC proposto na ETEC em 2022, com a ideia
        principal de facilitar os processos culinários das pessoas, trazendo
        mais praticidade e agilidade.
        <br />
        <br />
        Pesquisamos e procuramos diversas culinárias diferentes, pra ter uma
        melhor abrangência de publico, além das pessoas poderem adicionar suas
        próprias receitas, trouxemos um novo modo de pesquisa para aqueles que
        não sabem o que cozinhar com o que tem na cozinha!
      </div>
      <div className="boxIntegrantes">
        <Card
          integrante="Romario Silva"
          função="Frontend"
          imagem={romario}
          github={github}
          instagram={instagram}
          linkedin={linkedin}
        />
        <Card
          integrante="Lucas Ferreira"
          função="Frontend"
          imagem={lucas}
          github={github}
          instagram={instagram}
          linkedin={linkedin}
        />
        <Card
          integrante="Marcos Alves"
          função="Frontend"
          imagem={marcos}
          github={github}
          instagram={instagram}
          linkedin={linkedin}
        />
        <Card
          integrante="Renan Rodrigues"
          função="Backend"
          imagem={renan}
          github={github}
          instagram={instagram}
          linkedin={linkedin}
        />
        <Card
          integrante="Raul Murilo"
          função="Backend"
          imagem={raul}
          github={github}
          instagram={instagram}
          linkedin={linkedin}
        />
        <Card
          integrante="Otavio Lago"
          função="Backend"
          imagem={otavio}
          github={github}
          instagram={instagram}
          linkedin={linkedin}
        />
      </div>
    </section>
  );
}
