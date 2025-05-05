import './App.css';
import arthurabout from './images/arthur-about.jpg'
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h2 className="Title">Sobre mim</h2>
      <h2 className="Sub">"Nós juntamos o filme, contamos uma história,<br /> damos clareza. Esse é o nosso trabalho." <br /> Michael Kahn</h2>

      <div className="about-content">
        <div className="img-container">
          <img src={arthurabout} alt="Arthur Micheloto" className="arthur-img" />
        </div>

        <div className="text-container">
          <h2 className="Name">ARTHUR MICHELOTO</h2>
          <p className="description">
            Estudou cinema nas Oficinas Querô, ministradas pelo Instituto Querô - uma instituição sem fins lucrativos que busca promover acesso à arte e a cultura e estimular a transformação humana e cidadã de jovens de baixa renda por meio da capacitação e produção audiovisual. Em 2022 se formou em Cinema e Audiovisual pela Universidade São Judas Campus Unimonte.
            Atuou em diversas áreas do audiovisual, mas foi em 2019 que se encontrou na área de pós-produção. Trabalhando como editor e colorista de filmes publicitários e curtas-metragens de ficção e documentário.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
