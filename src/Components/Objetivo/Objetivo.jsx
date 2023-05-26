import React from 'react';
import "./Objetivo.css";
import Salada from "./imgs/saladafoda.png";

export default function Objetivo() {
    return (
        <section className="section2">
            <div className="titleBox">
                <h1 className="fontBlack">Qual o nosso</h1>
                <h1 className="font-Orange2">objetivo?</h1>
                <text className="font-Text">
                    Nosso objetivo por meio do nosso aplicativo é conseguir facilitar a
                    prática da culinária para os nossos usuários através das nossa
                    principais ferramentas.
                </text>
            </div>
            <div className="imgOrange">
                <img src={ Salada } />
            </div>
        </section>
    )
}
