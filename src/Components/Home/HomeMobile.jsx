import React, { useEffect, useState } from "react";
import { push as Menu } from 'react-burger-menu';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Home_cel.css";
import Logo from "./Imgs/proveitLogo.png";
import negao from "./Imgs/negao.png";
import cozinhando from "./Imgs/cozinhando.gif";
import InfoIcon from './Imgs/info_icon.png';
import BtnDownload from "./Imgs/Download_button 1.png";
import LogoOrange from "./Imgs/logoOrange.png";
import devlare from "./Imgs/devlare.png";
import proveit from "./Imgs/proveitWhite.png";

export default function Home() {
    return (
        <section className="section1_mobile" id="Home">
            <div className="fundo">
                <header>
                    <div className="container_logo">
                        <img src={Logo} className="logo" />
                    </div>
                    <div className="hamburguermenu">
                        <Menu right>
                            <div className="bm-logotitle">
                               {/*  <img className="bm-imgOrange" src={LogoOrange} /> */}
                                  <h2>Proveit!</h2>
                            </div>
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
                            <div className="container_logos">
                                <img src={devlare} id="img1" />

                                <img src={proveit} id="img2" />
                            </div>
                            <a className="bm-Box_BtnDownload" href="https://www.mediafire.com/file/j1jx3mrdmwwrjku/ProveitUsers.apk/file" target="_blank">
                                <img className="bm-BtnDownload" src={BtnDownload} />
                            </a>
                        </Menu>
                    </div>
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
                        <div className="Download_Icon">
                            <a className="Box_BtnDownload" href="https://www.mediafire.com/file/j1jx3mrdmwwrjku/ProveitUsers.apk/file" target="_blank">
                                <img className="BtnDownload" src={BtnDownload} />
                            </a>
                            <div className="pop_up ">
                                <Popup trigger={<img src={InfoIcon} className="img_infoicon" />} position="bottom center">
                                    <div className="back_gif">
                                        <img className="gif" src={cozinhando} />
                                        <h2 className="title_gif">Aviso!</h2>
                                    </div>
                                    <div className="text_popup">Só queremos avisar que devido a nossa API estar na nuvem,
                                        a nuvem esta "desligada" e graças a esse importudo,
                                        o nosso aplicativo só esta funcionando localmente, mas com certeza convido você a <span className="text_popup2">baixar o app</span>.</div>
                                </Popup>
                            </div>
                        </div>
                    </div>
                    <div className="imgBox">
                        <img src={negao} />
                    </div>
                </div>
            </div>
        </section>
    );
}

