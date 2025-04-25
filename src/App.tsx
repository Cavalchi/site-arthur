import React, { useState, useRef } from 'react';
import './App.css';
import VideoCarousel from './VideoCarousel';

function App() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Função para rolar para a esquerda
  const handleScrollLeft = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setActiveIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * 300, // Move o carrossel
        behavior: 'smooth',
      });
    }
  };

  // Função para rolar para a direita
  const handleScrollRight = () => {
    if (activeIndex < 4) {
      const newIndex = activeIndex + 1;
      setActiveIndex(newIndex);
      carouselRef.current.scrollTo({
        left: newIndex * 300, // Move o carrossel
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="layout">
      <header className="custom-header">
        <h1 className="logo">Arthur Micheloto</h1>
        <nav className="nav-buttons">
          <a href="#inicio">Início</a>
          <a href="#cinema">Cinema</a>
          <a href="#publi">Publicidade</a>
          <a href="#televisao">Televisão</a>
          <a href="#about">Sobre mim</a>
        </nav>
      </header>

      <main className="main-content">
        <h2 className="welcome-title">Bem-vindo!</h2>

        <div className="video-placeholder">Espaço reservado para o vídeo</div>

        <div className="intro-section">
          <div className="intro-text">
            <h2 className="intro-name">
              Me chamo <span className="highlight-red">Arthur Micheloto</span><br />
              e sou <span className="highlight-yellow">Editor e Colorista</span>
            </h2>

            <h1 className="intro-description">
              Cinéfilo com muita vontade de aprender e experimentar,<br />
              o meu principal objetivo é somar em seu projeto. <br />
              <span className="intro-subtext">
                Contribuir com uma montagem assertiva na mensagem do filme e criar <br />
                camadas de profundidade com uma colorização cinematográfica.
              </span>
            </h1>

            <div className="intro-button-wrapper">
              <button className="intro-button">
                Conheça mais de mim
              </button>
            </div>
          </div>

          <div className="intro-image-placeholder">
            Imagem Arthur (logo temporário)
          </div>
        </div>

        <div className="AboutInicial">
          <h2 className="more-title">Veja um pouco mais</h2>
          <h2 className="links-group">
            <a href="/cinema" className="section-link">Cinema</a>
            <span className="separator"> - </span>
            <a href="/publicidade" className="section-link">Publicidade</a>
            <span className="separator"> - </span>
            <a href="/tv" className="section-link">TV</a>
          </h2>
        </div>

        {/* Carrossel de vídeos */}
        <div className="video-carousel-wrapper">
          <button className="carousel-arrow left" onClick={handleScrollLeft}>
            ‹
          </button>
          <VideoCarousel ref={carouselRef} activeIndex={activeIndex} />
          <button className="carousel-arrow right" onClick={handleScrollRight}>
            ›
          </button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-info">© 2025 Arthur Micheloto</div>
        <div className="social-icons">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/arthur-micheloto-9429b419a/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.44 8h4.12v12H.44V8zM7.34 8h3.94v1.71h.06c.55-1.04 1.89-2.14 3.9-2.14 4.17 0 4.94 2.75 4.94 6.33V20H15.1v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V20H7.34V8z"/>
            </svg>
          </a>
          <a href="https://vimeo.com/arthurmicheloto" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
            <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.23 6.38c-.1 2.21-1.65 5.25-4.64 9.12-3.1 4.05-5.71 6.07-7.84 6.07-1.33 0-2.46-1.24-3.37-3.7-.62-2.26-1.24-4.52-1.86-6.78-.69-2.46-1.42-3.7-2.18-3.7-.17 0-.78.36-1.81 1.07L0 7.62C1.04 6.65 2.07 5.68 3.11 4.71c1.4-1.3 2.45-1.98 3.15-2.04 1.65-.16 2.67.98 3.04 3.42.42 2.7.71 4.38.87 5.04.49 2.23 1.03 3.34 1.62 3.34.46 0 1.15-.77 2.05-2.3.9-1.54 1.39-2.71 1.47-3.52.13-1.34-.38-2.01-1.52-2.01-.54 0-1.1.12-1.66.36 1.1-3.6 3.2-5.33 6.3-5.18 2.3.13 3.37 1.57 3.2 4.22z"/>
            </svg>
          </a>

          {/* Behance */}
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M8.022 10.74c.668 0 1.113-.083 1.335-.25.223-.167.334-.454.334-.86 0-.408-.116-.701-.349-.88-.233-.179-.645-.269-1.238-.269H5.555v2.26h2.467zm.393 2.88c.697 0 1.156-.093 1.38-.278.224-.184.336-.52.336-1.007 0-.426-.127-.748-.38-.966-.253-.217-.711-.325-1.38-.325H5.555v2.576H8.415zm14.05-1.418c-.189-.66-.557-1.167-1.103-1.523-.545-.355-1.233-.534-2.061-.534-.881 0-1.616.207-2.206.619-.591.413-.97.972-1.139 1.678l-.034.143h6.192c-.041.678-.295 1.191-.764 1.537-.468.347-1.098.521-1.893.521-.656 0-1.255-.115-1.794-.344-.54-.228-.979-.552-1.312-.972l-1.303 1.06c.475.633 1.108 1.119 1.9 1.463.793.345 1.705.517 2.738.517 1.411 0 2.51-.365 3.294-1.093.785-.728 1.178-1.727 1.178-2.995 0-.5-.094-.992-.281-1.474zM15.765 8.584h4.277v1.13h-4.277v-1.13zM10.096 12.674c.483.13.868.39 1.152.779.285.39.428.855.428 1.395 0 .683-.17 1.244-.507 1.682-.337.437-.783.747-1.338.93-.556.183-1.322.273-2.296.273H2.935V5.281h4.665c1.278 0 2.208.248 2.79.745.581.496.872 1.234.872 2.211 0 .652-.156 1.19-.47 1.615-.313.426-.738.73-1.273.911v.042c.699.146 1.244.474 1.638.984.392.51.59 1.131.59 1.865 0 .771-.192 1.434-.575 1.991-.382.558-.925.971-1.63 1.239-.704.267-1.599.4-2.688.4H2.935v-3.148h7.161v-.003z"/>
                </svg>
            </a>

            <a href="https://www.instagram.com/amicheloto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.76 3.76 0 004 7.75v8.5A3.76 3.76 0 007.75 20h8.5A3.76 3.76 0 0020 16.25v-8.5A3.76 3.76 0 0016.25 4h-8.5zm4.25 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
              </svg>
            </a>


        </div>
      </footer>
    </div>
  );
}

export default App;
