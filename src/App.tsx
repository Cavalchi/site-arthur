import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FaLinkedin, FaVimeoV, FaBehance } from 'react-icons/fa';
import VideoCarousel from './components/VideoCarousel';
import arthurImage from './images/arthur_micheloto.jpg';
import Cinema from './cinema';
import Publicidade from './publicidade';
import Televisao from './televisao';
import About from './about';

function App() {
  return (
    <Router>
      <div className="layout">
        <header className="custom-header">
          <h1 className="logo">Arthur Micheloto</h1>
          <nav className="nav-buttons">
            <Link to="/">Início</Link>
            <Link to="/cinema">Cinema</Link>
            <Link to="/publicidade">Publicidade</Link>
            <Link to="/televisao">Televisão</Link>
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
                    <Link to="/televisao" className="section-link">TV</Link>
                  </h2>
                </div>

                <div className="carousel-container">
                  <VideoCarousel />
                </div>
              </main>
            }
          />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/publicidade" element={<Publicidade />} />
          <Route path="/televisao" element={<Televisao />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <div className="footer-info">© 2025 Arthur Micheloto</div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/arthur-micheloto-9429b419a/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://vimeo.com/arthurmicheloto" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
              <FaVimeoV />
            </a>
            <a href="https://www.behance.net/arthurmicheloto1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <FaBehance />
            </a>
          </div>

        </footer>
      </div>
    </Router>
  );
}

export default App;
