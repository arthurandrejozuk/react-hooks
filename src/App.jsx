import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import BotaoCronometro from "./components/Cronometro";
import AppTarefas from "./components/AppTarefas";
import Rodape from "./components/Rodape";
import Form from "./components/Form";
import Timer from "./components/Cronometro/Timer";
import { useRef, useState } from "react";
import Player from "./components/Player";
import TarefaProvider from "./components/Contexts/TarefasContext";
import CronometroProvider from "./components/Contexts/CronometroContext";

function App() {
  const modoCronometro = {
    id: "foco",
    nome: "Foco",
    frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    tempoInicialEmSegundos: 30,
  };

  const [iniciarTimer, setIniciarTimer] = useState(false);
  const refPai = useRef(null);

  function alternarMusica() {
    if (refPai.current.paused()) {
      refPai.current.play();
    } else {
      refPai.current.pause();
    }
  }

  return (
    <div className={styles[`app--${modoCronometro.id}`]}>
      <Cabecalho />
      <main>
        <BotaoCronometro
          tipo={iniciarTimer ? "Pausar" : "Começar"}
          iniciaCronometro={() => setIniciarTimer((prev) => !prev)}
        />
        <AppTarefas />
        <CronometroProvider>
          <Timer iniciar={iniciarTimer} />
        </CronometroProvider>
        <Player ref={refPai} />
        <button onClick={alternarMusica}>Tocar</button>
        <TarefaProvider>
          <Form />
        </TarefaProvider>
      </main>
      <Rodape />
    </div>
  );
}

export default App;
