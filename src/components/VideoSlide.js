import { useRef, useEffect } from 'react';

export default function VideoSlide({ url, isVisible }) {
  const ref = useRef();

  useEffect(() => {
    if (isVisible) {
      ref.current.play();
    } else {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  }, [isVisible]);

  return <video ref={ref} src={url} muted />;
}
