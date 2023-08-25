import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Home.css";
import "./Home_tablet.css";
import InfoIcon from './Imgs/info_icon.png';
import Logo from "./Imgs/proveitLogo.png";
import negao from "./Imgs/negao.png";
import BtnDownload from "./Imgs/Download_button 1.png";

export default function Home() {

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const IconComponent = ({ onClick }) => (
    <div className="icon" onClick={onClick}>
      <img src={InfoIcon} alt="Info Icon" />
    </div>
  );

  const PopupComponent = ({ isOpen, onClose }) => (
    <Popup open={isOpen} onClose={onClose} modal>
      <div className="popup-content">
        {/* Coloque suas informações aqui */}
        <p>Só queremos avisar que devido a nossa API estar na nuvem,
          a nuvem esta "desligada" e graças a esse importudo,
          o nosso aplicativo só esta funcionando localmente, mas com certeza convido você a baixar o app.</p>
      </div>
    </Popup>
  );

  return (
    <section className="section1" id="Home">
      <div className="fundo">
        <header>
          <div className="container_logo">
            <img src={Logo} className="logo" />
          </div>
          <nav className="navegation">
            <div className="container_nav">
              <Link to="nosso-objetivo" className="ancoras" smooth={true} duration={600}>Nosso Objetivo</Link>
              <Link to="funcionalidades" className="ancoras" smooth={true} duration={600}>Funcionalidades</Link>
              <Link to="como-usar" className="ancoras" smooth={true} duration={600}>Como Usar</Link>
              <Link to="quem-somos" className="ancoras" smooth={true} duration={600}>Quem Somos</Link>
              <a className="baixeoapp" href="https://www.mediafire.com/file/j1jx3mrdmwwrjku/ProveitUsers.apk/file" target="_blank">
                Baixe o app
              </a>
            </div>
          </nav>
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
              <IconComponent onClick={openPopup} />
              <PopupComponent isOpen={popupOpen} onClose={closePopup} />
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

