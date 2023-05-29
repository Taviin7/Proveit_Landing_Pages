import React from "react";
import "./ComoUsar.css";
import Home from "./Imgs/home.png";
import Buscar from "./Imgs/buscar.png";
import Cadastro from "./Imgs/cadastro.png";

export default function ComoUsar() {
  return (
    <section className="section4" id="como-usar">
      <div>
        <div className="title">
          <h1 className="font-Black">Como</h1>
          <h1 className="font-Orange2">usar?</h1>
        </div>
      </div>
      <div className="cardUse">
        <div className="imgdocarduse">
          <img src={Home} />
        </div>
        {/* Imagem da Tela Inicial*/}
        <div className="texto">
          <h2>Tela Inicial</h2>
          <br />
          <p>
            Nesta tela é onde você encontrará uma mar de receitas, nas diversas
            abas, por exemplo:
            <br />
          </p>
          <text className="fontOrange3">
            O que há de novo?
            <br />
            Popular hoje
            <br />
            Nossa seleção
            <br />
            dentre outros.
          </text>
        </div>
      </div>
      <div className="cardUse">
        <div className="imgdocarduse2">
          <img src={Home} />
        </div>
        {/* Imagem da Tela Inicial*/}
        <div className="texto">
          <h2>Tela Receita</h2>
          <br />
          <p>
            Aqui é onde você verá o passo a passo da sua receita detalhadamente,
            poderá favoritar pra fazer depois ou mais vezes, vai poder dar seu
            feedback sobre a receita e acrescentar algo que poderia ser
            interessante, além de compartilhar para qualquer pessoa e ver os
            outros comentários
          </p>
        </div>
      </div>
      <div className="cardUse">
        <div className="imgdocarduse3">
          <img src={Buscar} />
        </div>
        {/* Imagem da Tela Inicial*/}
        <div className="texto">
          <h2>Tela de Pesquisa</h2>
          <br />
          <p>
            Nesta tela é onde você vai encontrar todas as receitas que temos no
            nosso aplicativo, podendo até usar filtros para facilitar sua
            pesquisa!
          </p>
        </div>
      </div>
      <div className="cardUse">
        <div className="imgdocarduse4">
          <img src={Cadastro} />
        </div>
        {/* Imagem da Tela Inicial*/}
        <div className="texto">
          <h2>Tela de cadastro de receitas/dicas</h2>
          <br />
          <p>
            Como diz o próprio nome, caso você seja um cozinheiro nato, você
            pode mostrar ao mundo suas receitas, colocando fotos, videos, passo
            a passo etc.
          </p>
        </div>
      </div>
    </section>
  );
}
