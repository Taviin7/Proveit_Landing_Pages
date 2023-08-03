import React, { useEffect, useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import "./Home_cel.css";
import hamburguer_menu from "./Imgs/hamburguer-menu.png";
import cross from "./Imgs/cross.png";
import Logo from "./Imgs/proveitLogo.png";
import negao from "./Imgs/negao.png";
import BtnDownload from "./Imgs/Download_button 1.png";

export default function Home() {
    return (
        <section className="section1" id="Home">
            <div className="fundo">
                <header>
                    <div className="container_logo">
                        <img src={Logo} className="logo" />
                    </div>
                    <Menu className="hamburguermenu"
                        width={'50%'}
                        customBurgerIcon={<img src={hamburguer_menu} />}
                        customCrossIcon={<img src={cross} />}>
                        <a id="#nosso-objetivo" className="menu-item" href="#nosso-objetivo">
                            Nosso Objetivo
                        </a>
                        <a id="#funcionalidades" className="menu-item" href="#funcionalidades">
                            Funcionalidades
                        </a>
                        <a id="#como-usar" className="menu-item" href="#como-usar">
                            Como Usar
                        </a>
                        <a id="#quem-somos" className="menu-item" href="#quem-somos">
                            Quem Somos
                        </a>
                    </Menu>
                </header>
                <div className="container_main">
                    <div className="container">
                        <div className="titleBox1">
                            <h1 className="font-WhiteOpace">A praticidade</h1>
                            <h1 className="fontOrange">na palma </h1>
                        </div>
                        <div className="titleBox2">
                            <h1 className="font-White">da sua
                                <span className="texts-container">
                                    <span className="text-orange">mão</span>
                                    <span className="exclamacao">!</span>
                                </span>
                            </h1>
                        </div>
                        <span className="subtitleBox">
                            Nunca foi tão fácil encontrar uma receita!
                        </span>
                        <a className="Box_BtnDownload" href="https://www.mediafire.com/file/j1jx3mrdmwwrjku/ProveitUsers.apk/file" target="_blank">
                            <img className="BtnDownload" src={BtnDownload} />
                        </a>
                    </div>
                    {<div className="imgBox">
                        <img src={negao} />
                    </div>}
                </div>
            </div>
        </section>
    );
}

