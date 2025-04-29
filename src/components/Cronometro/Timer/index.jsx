import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Timer({ iniciar, tempo }) {
  const [tempoRestante, setTempoRestante] = useState(tempo | 30);
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  useEffect(() => {
    let interval = null;

    if (iniciar && tempoRestante > 0) {
      interval = setInterval(() => {
        setTempoRestante((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [iniciar, tempoRestante]);
  return (
    <div className={styles["cronometer-timer"]}>
      {minutos}:{segundos < 10 ? `0${segundos}` : segundos}
    </div>
  );
}
