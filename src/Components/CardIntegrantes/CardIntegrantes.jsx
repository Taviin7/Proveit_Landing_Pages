import React from 'react';
import "./CardIntegrantes.css";
import Card from "./Card/Card";
import romario from "./Imgs/romario.png";
import instagram from "./Imgs/Instagram.png";
import github from "./Imgs/GitHub.png";
import linkedin from "./Imgs/LinkedIn.png";

export default function CardIntegrantes() {
    return (
        <section className="section5" >
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
            <div className="integrantes">
                <Card integrante="Romario" função="Frontend" imagem={romario} github={github} instagram={instagram} linkedin={linkedin}/>
            </div>
        </section>
    )
}
