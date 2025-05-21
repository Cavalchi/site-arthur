import './App.css';
import arthurabout from './images/arthur-about.jpg'
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h2 className="Title">Sobre mim</h2>
      <h2 className="Sub">"Nós <span className="highlight-yellow">juntamos</span> o filme, contamos uma <span className="highlight-red">história</span>,<br /> damos <span className="highlight-yellow">clareza</span>. Esse é o <span className="highlight-red">nosso trabalho</span>."</h2>
      <h2 className='Michaelkahn'>Michael Kahn</h2>
      <div className="about-content">
        <div className="img-container">
          <img src={arthurabout} alt="Arthur Micheloto" className="arthur-img" />
        </div>

        <div className="text-container">
          <h2 className="Name">ARTHUR MICHELOTO</h2>
          <p className="description">
            Estudou cinema nas Oficinas Querô, ministradas pelo Instituto Querô - uma instituição sem fins lucrativos que busca promover acesso à arte e a cultura e estimular a transformação humana e cidadã de jovens de baixa renda por meio da capacitação e produção audiovisual. <br/><br/>Em 2022 se formou em Cinema e Audiovisual pela Universidade São Judas Campus Unimonte.
            Atuou em diversas áreas do audiovisual, mas foi em 2019 que se encontrou na área de pós-produção. Trabalhando como editor e colorista de filmes publicitários e curtas-metragens de ficção e documentário.
          </p>
        </div>        
      </div>
              <h2 className='contato'>Entre em contato</h2>
                  <form className="form-container">
                    <div className="form-group">
                      <input type="text" name="nome" id="nome" placeholder="Nome" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" id="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" name="assunto" id="assunto" placeholder="Assunto" required />
                    </div>
                    <div className="form-group">
                      <textarea name="descricao" id="descricao" placeholder="Descrição" rows={5} required></textarea>
                    </div>
                    <button className="button" type="submit">
                      <span className="text">Enviar</span>
                      <span className="icon">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="20px" aria-hidden="true">
                          <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </button>

                  </form>    
                </div>
  );
}

export default About;
