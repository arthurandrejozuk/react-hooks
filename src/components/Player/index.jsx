import { useEffect, useRef } from "react";
import musica from "../../../public/sons/luna-rise-part-one.mp3";
export default function Player() {
  const musicaRef = useRef(null);

  useEffect(() => {
    musicaRef.current = new Audio(musica);
    return () => {
      musicaRef.current?.pause();
      musicaRef.current = null;
    };
  }, []);

  function alternarMusica() {
    if (musicaRef.current.paused) {
      musicaRef.current.play();
    } else {
      musicaRef.current.pause();
    }
  }

  return (
    <div>
      <button onClick={alternarMusica}>Tocar som</button>
    </div>
  );
}
