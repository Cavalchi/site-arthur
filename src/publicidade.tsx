import './App.css'; // Caminho correto para o seu arquivo CSS
import Agrishow from './images/agrishow.png';
import Natal from './images/natal.png';
import Portal from './images/novoportal.png';
import Zap from './images/zapbens.png'
import './publicidade.css'
function Cinema() {
  return (
    <div className="video-gallery">
    <div className="image-card">
      <img src={Agrishow} alt="Novos Óculos de Caetano" />
      <div className="image-title">Mercedes-Benz  Agrishow 2025</div>
    </div>
  
    <div className="image-card">
      <img src={Natal} alt="Santos às Cegas" />
      <div className="image-title">Natal Mercedes-Benz 2024</div>
    </div>
  
    <div className="image-card">
      <img src={Zap} alt="Resquícios" />
      <div className="image-title">ZapBenz</div>
    </div>
  
    <div className="image-card">
      <img src={Portal} alt="Zona Noroeste" />
      <div className="image-title">Novo Portal Mercedes-Benz Clube</div>
    </div>
  </div>
  
  );
}

export default Cinema;
