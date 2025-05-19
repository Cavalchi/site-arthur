import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import './VideoCarousel.css';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Ícones modernos

const flickityOptions = {
  wrapAround: true,
  pageDots: false,
  cellAlign: 'center',
  prevNextButtons: false,
  freeScroll: false,
  selectedAttraction: 0.01,
  friction: 0.2,
};

const videos = [
  {
    title: 'Demo Reel 2024',
    url: 'https://player.vimeo.com/video/942738659?h=6cfe8141c3',
  },
  {
    title: 'Publicidade Natura',
    url: 'https://player.vimeo.com/video/931495052?h=a712cfbd3d',
  },
  {
    title: 'Curta Experimental',
    url: 'https://player.vimeo.com/video/931495052?h=a712cfbd3d',
  },
  {
    title: 'Curta Experimental 2',
    url: 'https://player.vimeo.com/video/931495052?h=a712cfbd3d',
  },
  {
    title: 'Curta Experimental 3',
    url: 'https://player.vimeo.com/video/931495052?h=a712cfbd3d',
  },
   {
    title: 'Curta Experimental 3',
    url: 'https://player.vimeo.com/video/931495052?h=a712cfbd3d',
  },
   {
    title: 'Curta Experimental 3',
    url: 'https://player.vimeo.com/video/931495052?h=a712cfbd3d',
  },
];

interface FlickityInstance {
  previous(): void;
  next(): void;
  resize(): void;
  selectedIndex: number;
  on(event: string, callback: () => void): void;
  off(event: string, callback: () => void): void;
}

export default function VideoCarousel() {
  const flickityRef = useRef<FlickityInstance | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const flickityInstance = flickityRef.current;

    const updateSelected = () => {
      setSelectedIndex(flickityInstance?.selectedIndex ?? 0);
    };

    flickityInstance?.on('change', updateSelected);

    // Evita reset visual
    setTimeout(() => flickityInstance?.resize(), 100);

    updateSelected();

    return () => {
      flickityInstance?.off('change', updateSelected);
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
        flickityRef={(c) => (flickityRef.current = c)}
      >
        {videos.map((video, index) => (
          <div
            className={`carousel-cell ${
              index === selectedIndex ? 'is-selected' : 'is-faded'
            }`}
            key={index}
          >
            <div className="video-frame">
              <iframe
                src={video.url}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={video.title}
              />
            </div>
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </Flickity>
      <button
        className="btn-prev"
        aria-label="Previous"
        onClick={() => flickityRef.current?.previous()}
      >
        <FiChevronLeft size={32} />
      </button>
      <button
        className="btn-next"
        aria-label="Next"
        onClick={() => flickityRef.current?.next()}
      >
        <FiChevronRight size={32} />
      </button>
    </div>
  );
}
