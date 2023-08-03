import React, { useEffect, useState } from "react";
import "./Funcionalidades.css";
import "./Funcionalidades_cel.css";
import "./Funcionalidades_tablet.css";
import Celulares from "./imgs/celulares.png";
import add from "./icons/icon-add.png";
import fav from "./icons/icon-fav.png";
import search from "./icons/icon-search.png";
import user from "./icons/icon-user.png";

export default function Funcionalidades() {

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
    <section className="section3" id="funcionalidades">
      <div className="funcionalidades">
        <div className="title">
          <h1 className="font-White">As</h1>
          <h1 className="font-Orange2">funcionalidades</h1>
        </div>
        <img src={Celulares} />
      </div>
    {isCelular ? null :
      <div className="card">
        <div class="item1">
          <h1>
            <img src={add} />
            <div className="cardtext">
              Adicionar Receitas
            </div>
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
            <div className="cardtext">
              Favoritos
            </div>
          </h1>
          <text>
            Na tela favoritos você pode salvar as receitas que você mais gostou
            e quer colocar em prática.
          </text>
        </div>
        <div class="item3">
          <h1>
            <img src={user} />
            <div className="cardtext">
              Perfil
            </div>
          </h1>
          <text>
            No Perfil, você poderá colocar algumas informações que você gostaria
            de falar sobre você, sobre culinaria, sua foto etc.
          </text>
        </div>
        <div class="item4">
          <h1>
            <img src={search} />
            <div className="cardtext">
              Buscar
            </div>
          </h1>
          <text>
            A tela buscar é uma das principais, onde você poderá tanto
            pesquisar, quanto filtrar as receitas colocando os itens que você
            tem na sua casa!
          </text>
        </div>
      </div>}
    </section>
  );
}
