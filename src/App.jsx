import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import BotaoCronometro from "./components/Cronometro";
import AppTarefas from "./components/AppTarefas";
import Rodape from "./components/Rodape";
import Form from "./components/Form";
import Timer from "./components/Cronometro/Timer";
import { useState } from "react";

function App() {
  const modoCronometro = {
    id: "foco",
    nome: "Foco",
    frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    tempoInicialEmSegundos: 30,
  };

  const [iniciarTimer, setIniciarTimer] = useState(false);

  return (
    <div className={styles[`app--${modoCronometro.id}`]}>
      <Cabecalho />
      <main>
        <BotaoCronometro
          tipo={iniciarTimer ? "Pausar" : "Começar"}
          iniciaCronometro={() => setIniciarTimer((prev) => !prev)}
        />
        <AppTarefas />
        <Timer iniciar={iniciarTimer} />
        <Form />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
