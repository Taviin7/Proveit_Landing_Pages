import React from "react";
import "./ComoUsar.css";
import "./ComoUsar_tablet.css";
import Home from "./Imgs/home.png";
import animeHome from "./Imgs/Home.gif";
import Receita from "./Imgs/Receita.png";
import animeReceita from "./Imgs/Receita.gif";
import Perfil from "./Imgs/Perfil.png";
import animePerfil from "./Imgs/Perfil.gif";
import Pesquisa from "./Imgs/Pesquisa1.png";
import animePesquisa from "./Imgs/Tela de Pesquisa.gif";
import AddReceita from "./Imgs/Cad_Receita.png";
import animeAddReceita from "./Imgs/Add_Receita.gif";

export default function ComoUsar() {
  return (
    <section className="section4" id="como-usar">
      <div className="titlemain">
        <div className="titles">
          <h1 className="font-Black">Como</h1>
          <h1 className="font-Orange">usar?</h1>
        </div>
      </div>
      {/* Imagem da Tela Inicial*/}
      <div className="cardUse">
        <div className="card-imagem">
          <img className="previa" src={Home} />
          <img src={animeHome} />
        </div>
        <div className="texto">
          <h2>Tela Inicial</h2>
          <div className="containermain_1">
            <div className="retangle_1"></div>
            <p>
              Nesta tela é onde você encontrará um mar de receitas, nas diversas
              abas, por exemplo:
            </p>
          </div >
          <div className="containermain_1">
            <div className="invisible_retangle"></div>
            <text className="exemplos">
              Mais acessadas;
              <br />
              Explore!;
              <br />
              Seleção PROVEIT;
              <br />
              Receitas reaproveitáveis;
              <br />
              Baixas calorias, <u>dentre outros.</u>
            </text>
          </div>
        </div>
      </div>

      {/* Imagem da Tela Receita*/}
      <div className="cardUse">
        <div className="card-imagem">
          <img className="previa" src={Receita} />
          <img src={animeReceita} />
        </div>
        <div className="texto">
          <h2>Tela Receita</h2>
          <div className="containermain_2">
            <div className="retangle_2"></div>
            <p>
              Aqui é onde você verá o passo a passo da sua receita detalhadamente,
              poderá favoritar pra fazer depois ou mais vezes, vai poder dar seu
              feedback sobre a receita e acrescentar algo que poderia ser
              interessante, além de compartilhar para qualquer pessoa e ver os
              outros comentários
            </p>
          </div>
        </div>
      </div>

      {/* Imagem da Tela de Busca*/}
      <div className="cardUse">
        <div className="card-imagem">
          <img className="previa" src={Perfil} />
          <img src={animePerfil} />
        </div>
        <div className="texto">
          <h2>Tela de Perfil</h2>
          <div className="containermain_3">
            <div className="retangle_3"></div>
            <p>
              No perfil é onde você verá seu histórico de receitas, seu dados e
              poderá adicionar as suas receitas!
            </p>
          </div>
        </div>
      </div>

      {/* Imagem da Tela de Cadastro*/}
      <div className="cardUse">
        <div className="card-imagem">
          <img className="previa" src={Pesquisa} />
          <img src={animePesquisa} />
        </div>
        <div className="texto">
          <h2>Tela de pesquisa</h2>
          <div className="containermain_4">
            <div className="retangle_4"></div>
            <p>
              Nesta tela é onde você vai encontrar todas as receitas que temos no
              nosso aplicativo, podendo até usar filtros para facilitar sua
              pesquisa!
            </p>
          </div>
          <div className="containermain_4">
            <div className="retangle_4-1"></div>
            <div className="texts">
              <h5>Pesquisa por ingredientes</h5>
              <p>
                Imagine que você tem um certo numero de ingredientes dentro da sua
                casa, e você não tem ideia do que fazer com eles, na barra de “<u>Pesquisa
                  por ingredientes</u>” você irá colocar os ingredientes, e nós iremos te mandar
                receitas com esses ingredientes!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagem da Tela de Cadastro Receita*/}
      <div className="cardUse">
        <div className="card-imagem">
          <img className="previa" src={AddReceita} />
          <img src={animeAddReceita} />
        </div>
        <div className="texto">
          <h2>Tela de cadastro de receitas</h2>
          <div className="containermain_5">
            <div className="retangle_5"></div>
            <p>
              Como diz o próprio nome, caso você seja um cozinheiro nato, você
              pode mostrar ao mundo suas receitas, colocando fotos, videos, passo
              a passo etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
