import './App.css'; // Caminho correto para o seu arquivo CSS
import um from './sitesvideo/um.png';
import santosascegas from './sitesvideo/SAC_STILL_1.jpeg';
import resquícios from './sitesvideo/Resquícios_Frame_1.jpg';
import zonanoroeste from './sitesvideo/QC_ZN_STILL_4.jpg';
import './televisao.css'
function Cinema() {
  return (
    <div className="video-gallery">
    <div className="image-card">
      <img src={um} alt="Novos Óculos de Caetano" />
      <div className="image-title">Os Óculos Novos de Caetano</div>
    </div>
  
    <div className="image-card">
      <img src={santosascegas} alt="Santos às Cegas" />
      <div className="image-title">Santos às Cegas</div>
    </div>
  
    <div className="image-card">
      <img src={resquícios} alt="Resquícios" />
      <div className="image-title">Resquícios</div>
    </div>
  
    <div className="image-card">
      <img src={zonanoroeste} alt="Zona Noroeste" />
      <div className="image-title">Zona Noroeste</div>
    </div>
  </div>
  
  );
}

export default Cinema;
