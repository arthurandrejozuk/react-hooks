import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CronometroContext } from "../../Contexts/CronometroContext";

export default function Timer({ iniciar }) {
  const { tempoCronometro, inserirTempoCronometro } = useContext(CronometroContext);
  const [tempoRestante, setTempoRestante] = useState(tempoCronometro);

  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  // Atualiza tempoRestante sempre que tempoCronometro mudar (ex: ao clicar "Cronometrar")
  useEffect(() => {
    setTempoRestante(tempoCronometro);
  }, [tempoCronometro]);

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
    <div className={styles["cronometer-container"]}>
      <input
        type="number"
        value={tempoCronometro == 0 ? null : tempoCronometro}
        onChange={(event) => inserirTempoCronometro(Number(event.target.value))}
      />
      <div className={styles["cronometer-timer"]}>
        {minutos}:{segundos < 10 ? `0${segundos}` : segundos}
      </div>
    </div>
  );
}
