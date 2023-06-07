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
          <h1 className="font-Orange">usar?</h1>
        </div>
      </div>

      {/* Imagem da Tela Inicial*/}
      <div className="cardUse">
        <div>
          <img src={Home} />
        </div>
        <div className="texto">
          <h2>Tela Inicial</h2>
          <br />
          <p>
            Nesta tela é onde você encontrará uma mar de receitas, nas diversas
            abas, por exemplo:
            <br />
          </p>
          <text className="fontOrange">
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

      {/* Imagem da Tela Receita*/}
      <div className="cardUse">
        <div>
          <img src={Home} />
        </div>
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

      {/* Imagem da Tela de Busca*/}
      <div className="cardUse">
        <div>
          <img src={Buscar} />
        </div>
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

      {/* Imagem da Tela de Cadastro*/}
      <div className="cardUse">
        <div>
          <img src={Cadastro} />
        </div>
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
