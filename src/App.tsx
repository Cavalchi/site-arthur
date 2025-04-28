import React, { useRef } from 'react';
import './App.css';
import VideoCarousel from './components/VideoCarousel.tsx';

function App() {
  // Tipando o ref corretamente para VideoCarousel
  const carouselRef = useRef<{ scrollLeft: () => void; scrollRight: () => void }>(null);

  // Função para rolar para a esquerda
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft();
    }
  };

  // Função para rolar para a direita
  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollRight();
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
          <div className="carousel-container">
            <VideoCarousel ref={carouselRef} />
          </div>
          <button className="carousel-arrow right" onClick={handleScrollRight}>
            ›
          </button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-info">© 2025 Arthur Micheloto</div>
        <div className="social-icons">
          {/* Redes sociais */}
        </div>
      </footer>
    </div>
  );
}

export default App;
