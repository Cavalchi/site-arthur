import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const VideoCarousel = forwardRef((_, ref) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(4); // Voltar ao último vídeo
      }
    },
    scrollRight: () => {
      if (currentIndex < 4) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); // Voltar ao primeiro vídeo
      }
    }
  }));

  // Atualiza a posição do carrossel com base no índice
  const scrollToVideo = (index) => {
    const videoWidth = 350; // Largura do vídeo
    const offset = index * videoWidth;
    carouselRef.current.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  };

  // Chama a função para scroll quando o índice mudar
  React.useEffect(() => {
    scrollToVideo(currentIndex);
  }, [currentIndex]);

  return (
    <div className="video-carousel" ref={carouselRef}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="video-card">
          <div className="video-frame">
            <p className="video-title">Vídeo {i}</p>
          </div>
          <div className="video-description">
            <p>Descrição do vídeo {i}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default VideoCarousel;
