import { useRef, useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import './VideoCarousel.css';

interface VideoCarouselHandles {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const VideoCarousel = forwardRef<VideoCarouselHandles, unknown>((_, ref) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    scrollLeft: () => {
      setCurrentIndex((prev) => (prev === 0 ? 4 : prev - 1));
    },
    scrollRight: () => {
      setCurrentIndex((prev) => (prev === 4 ? 0 : prev + 1));
    }
  }));

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const offset = carousel.offsetWidth * currentIndex;
      carousel.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container">
    <div className="video-carousel" ref={carouselRef}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`video-card ${currentIndex === i - 1 ? 'active' : ''}`}>
          <div className="video-frame">
            <p className="video-title">Vídeo {i}</p>
          </div>
          <div className="video-description">
            <p>Descrição do vídeo {i}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
});

export default VideoCarousel;
