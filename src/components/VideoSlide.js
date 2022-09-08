import { useRef, useEffect } from 'react';
import { DEFAULT_AUTO_PLAY_TIME } from '../App';

export default function VideoSlide({ url, isVisible, setAutoPlay }) {
  const ref = useRef();

  useEffect(() => {
    if (isVisible) {
      ref.current.play();
      setAutoPlay(ref.current.duration);
    } else {
      ref.current.pause();
      ref.current.currentTime = 0;
      setAutoPlay(DEFAULT_AUTO_PLAY_TIME);
    }
  }, [isVisible]);

  return <video ref={ref} src={url} muted />;
}
