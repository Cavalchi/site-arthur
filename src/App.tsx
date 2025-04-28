import { useRef } from 'react';
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
       
      </main>
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
      <footer className="footer">
        <div className="footer-info">© 2025 Arthur Micheloto</div>
        <div className="social-icons">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/arthur-micheloto-9429b419a/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM7.5 8.98h4.79v2.08h.07c.67-1.27 2.3-2.62 4.73-2.62 5.06 0 6 3.32 6 7.63V24h-5v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.42V24h-5V8.98z" fill="currentColor" />
            </svg>
          </a>

          {/* Vimeo */}
          <a href="https://vimeo.com/arthurmicheloto" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M23.977 6.236c-.1 2.229-1.648 5.282-4.639 9.15-3.096 4.01-5.713 6.016-7.847 6.016-1.326 0-2.453-1.224-3.382-3.673-.616-2.256-1.233-4.511-1.849-6.767-.685-2.473-1.418-3.709-2.199-3.709-.17 0-.764.356-1.775 1.066L0 6.266c1.133-.999 2.247-1.998 3.382-2.997 1.527-1.349 2.668-2.061 3.419-2.136 1.797-.175 2.898 1.063 3.295 3.709.45 2.921.764 4.741.941 5.46.525 2.4 1.102 3.599 1.73 3.599.489 0 1.224-.77 2.199-2.31.977-1.54 1.498-2.71 1.566-3.51.138-1.327-.384-1.992-1.566-1.992-.556 0-1.13.129-1.729.393 1.154-3.774 3.362-5.574 6.625-5.398 2.416.138 3.552 1.685 3.42 4.639z" fill="currentColor" />
            </svg>
          </a>

          {/* Behance */}
          <a href="https://www.behance.net/arthurmicheloto1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M7.7 10.5C8.6 10.5 9.3 9.8 9.3 9S8.6 7.5 7.7 7.5H5V10.5H7.7zM7.9 14.5C8.9 14.5 9.6 13.7 9.6 12.8C9.6 12 8.9 11.5 7.9 11.5H5V14.5H7.9zM20.2 14.4C19.7 15.1 19 15.4 18.1 15.4C16.6 15.4 15.4 14.2 15.4 12.6C15.4 11.1 16.6 9.8 18.1 9.8C19.5 9.8 20.3 10.9 20.5 12.3H22C21.8 9.9 20 8 18.1 8C15.8 8 14 10 14 12.6C14 15.1 15.8 17 18.1 17C19.9 17 21.3 15.7 21.6 14H20.2zM16 6V7H22V6H16zM2 4V20H11V17H9.6C9.9 16.7 10.1 16.3 10.2 15.9C10.8 15.5 11.3 14.9 11.3 13.8C11.3 12.3 10 11.3 8.3 11.3H5V7H9.3C11 7 12.3 8 12.3 9.5C12.3 10.6 11.8 11.2 11.2 11.5C11.8 11.8 12.5 12.5 12.5 13.6C12.5 15.2 11.4 16.1 10.2 16.5C10.1 16.9 9.9 17.2 9.7 17.5H14V4H2Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
