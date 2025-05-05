import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import musica from "../../../public/sons/luna-rise-part-one.mp3"; // substitua pelo caminho real do seu arquivo

// eslint-disable-next-line react/display-name
const Player = forwardRef((props, ref) => {
  const musicaRef = useRef(null);

  useEffect(() => {
    musicaRef.current = new Audio(musica);
    return () => {
      musicaRef.current?.pause();
      musicaRef.current = null;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => musicaRef.current?.play(),
    pause: () => musicaRef.current?.pause(),
    paused: () => musicaRef.current?.paused,
  }));

  return null;
});

export default Player;
