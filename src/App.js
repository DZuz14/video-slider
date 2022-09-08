import { useState, useRef, useEffect } from 'react';
import VideoSlide from './components/VideoSlide';
import ImageSlide from './components/ImageSlide';
import './App.css';

const slides = [
  {
    type: 'img',
    url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
  },
  { type: 'video', url: 'oregon-canyon.mp4' },
  {
    type: 'img',
    url: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
  },
  { type: 'video', url: 'abstract.mp4' },
];

function App() {
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [autoPlay] = useState(3);

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = moveRight;
  });

  const moveRight = () => {
    if (index === slides.length - 1) {
      setIndex(0);
      setTranslate(0);
    } else {
      setIndex((prev) => prev + 1);
      setTranslate((prev) => prev - window.innerWidth);
    }
  };

  const moveLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex((prev) => prev - 1);
      setTranslate((prev) => prev + window.innerWidth);
    }
  };

  useEffect(() => {
    const play = () => {
      console.log('oky');
      autoPlayRef.current();
    };

    let interval = setInterval(play, autoPlay * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index, autoPlay]);

  return (
    <div className="App">
      <div className="slider">
        <div
          className="slider-inner"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          {slides.map((slide, i) => {
            if (slide.type === 'video') {
              return (
                <VideoSlide
                  key={slide.url}
                  url={slide.url}
                  isVisible={i === index}
                />
              );
            } else {
              return <ImageSlide key={slide.url} url={slide.url} />;
            }
          })}
        </div>

        <div className="arrow left" onClick={moveLeft}>
          <i className="fa fa-chevron-left" />
        </div>

        <div className="arrow right" onClick={moveRight}>
          <i className="fa fa-chevron-right" />
        </div>
      </div>
    </div>
  );
}

export default App;
