import styles from "./App.module.css";

import Cabecalho from "./components/Cabecalho";
import Cronometro from "./components/Cronometro";
import AppTarefas from "./components/AppTarefas";
import Rodape from "./components/Rodape";
import Form from "./components/Form";

function App() {
  const modoCronometro = {
    id: "foco",
    nome: "Foco",
    frase: ["Otimize sua produtividade,", "mergulhe no que importa."],
    tempoInicialEmSegundos: 30,
  };

  return (
    <div className={styles[`app--${modoCronometro.id}`]}>
      <Cabecalho />
      <main>
        <Cronometro />
        <AppTarefas />
        <Form />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
