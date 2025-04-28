import React, { useRef, useState, useImperativeHandle, forwardRef, useEffect } from 'react';

// Definindo os tipos para o ref
interface VideoCarouselHandles {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const VideoCarousel = forwardRef<VideoCarouselHandles, unknown>((_, ref) => {
  const carouselRef = useRef<HTMLDivElement | null>(null); // Tipando o ref
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Tipando o estado

  // Expondo os métodos scrollLeft e scrollRight para o componente pai
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

  // Função para rolar para o vídeo específico
  const scrollToVideo = (index: number) => {
    const videoWidth = 350; // Largura do vídeo
    const offset = index * videoWidth;
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }
  };

  // Atualiza a posição do carrossel com base no índice
  useEffect(() => {
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
