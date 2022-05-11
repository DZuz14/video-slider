import { useState } from 'react';
import './App.css';

const slides = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
];

function App() {
  const [index, setIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  const moveRight = () => {
    if (index === slides.length - 1) {
      setIndex(0);
      setTranslate(0);
    } else {
      setIndex((prev) => prev + 1);
      setTranslate((prev) => prev - 600);
    }
  };

  const moveLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex((prev) => prev - 1);
      setTranslate((prev) => prev + 600);
    }
  };

  return (
    <div className="App">
      <div className="slider">
        <div
          className="slider-inner"
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide}
              className="slide"
              style={{
                backgroundImage: `url('${slide}')`,
              }}
            />
          ))}
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
