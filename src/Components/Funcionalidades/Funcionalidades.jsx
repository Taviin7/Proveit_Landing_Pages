import React from "react";
import "./Funcionalidades.css";
import Celulares from "./imgs/celulares.png";
import add from "./icons/icon-add.png";
import fav from "./icons/icon-fav.png";
import search from "./icons/icon-search.png";
import user from "./icons/icon-user.png";

export default function Funcionalidades() {
  return (
    <section className="section3" id="funcionalidades">
      <div className="funcionalidades">
        <div className="title">
          <h1 className="font-White">As</h1>
          <h1 className="font-Orange2">Funcionalidades</h1>
        </div>
        <img src={Celulares} />
      </div>

      <div className="card">
        <div class="item1">
          <h1>
            <img src={add} />
            Adicionar Receitas
          </h1>
          <text>
            Essa tela é destinada aos usuários que além de aprender novas
            receitas, querem mostrar ao mundo suas práticas com a cozinha
            também.
          </text>
        </div>
        <div class="item2">
          <h1>
            <img src={fav} />
            Favoritos
          </h1>
          <text>
            Na tela favoritos você pode salvar as receitas que você mais gostou
            e quer colocar em prática.
          </text>
        </div>
        <div class="item3">
          <h1>
            <img src={user} />
            Perfil
          </h1>
          <text>
            No Perfil, você poderá colocar algumas informações que você gostaria
            de falar sobre você, sobre culinaria, sua foto etc.
          </text>
        </div>
        <div class="item4">
          <h1>
            <img src={search} />
            Buscar
          </h1>
          <text>
            A tela buscar é uma das principais, onde você poderá tanto
            pesquisar, quanto filtrar as receitas colocando os itens que você
            tem na sua casa!
          </text>
        </div>
      </div>
    </section>
  );
}
