import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import VideoCarousel from './components/VideoCarousel.tsx';
import arthurImage from './images/arthur_micheloto.jpg';
import Cinema from './cinema.tsx';
import Publicidade from './publicidade.tsx';
import Televisao from './televisao.tsx';
import About from './about.tsx';

function App() {
  const carouselRef = useRef<{ scrollLeft: () => void; scrollRight: () => void }>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft();
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollRight();
    }
  };

  return (
    <Router>
      <div className="layout">
        <header className="custom-header">
          <h1 className="logo">Arthur Micheloto</h1>
          <nav className="nav-buttons">
            <Link to="/">Início</Link>
            <Link to="/cinema">Cinema</Link>
            <Link to="/publicidade">Publicidade</Link>
            <Link to="/televisao">Televisão</Link> {/* Corrigido aqui */}
            <Link to="/about">Sobre mim</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
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
                      <Link to="/about">
                        <button className="intro-button">Conheça mais sobre mim</button>
                      </Link>
                    </div>
                  </div>

                  <div className="intro-image-placeholder">
                    <img src={arthurImage} alt="Arthur Micheloto" />
                  </div>
                </div>

                <div className="AboutInicial">
                  <h2 className="more-title">Veja mais um pouco</h2>
                  <h2 className="links-group">
                    <Link to="/cinema" className="section-link">Cinema</Link>
                    <span className="separator"> - </span>
                    <Link to="/publicidade" className="section-link">Publicidade</Link>
                    <span className="separator"> - </span>
                    <Link to="/televisao" className="section-link">TV</Link> {/* Corrigido aqui */}
                  </h2>
                </div>

                {/* Carrossel de vídeos */}
                <div className="video-carousel-wrapper">
                  <button className="carousel-arrow left" onClick={handleScrollLeft}>‹</button>
                  <div className="carousel-container">
                    <VideoCarousel ref={carouselRef} />
                  </div>
                  <button className="carousel-arrow right" onClick={handleScrollRight}>›</button>
                </div>
              </main>
            }
          />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/publicidade" element={<Publicidade />} />
          <Route path="/televisao" element={<Televisao />} /> {/* Corrigido aqui */}
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <div className="footer-info">© 2025 Arthur Micheloto</div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/arthur-micheloto-9429b419a/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {/* SVG do LinkedIn */}
            </a>
            <a href="https://vimeo.com/arthurmicheloto" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
              {/* SVG do Vimeo */}
            </a>
            <a href="https://www.behance.net/arthurmicheloto1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              {/* SVG do Behance */}
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
