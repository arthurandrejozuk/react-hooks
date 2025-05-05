import { useContext } from "react";
import styles from "./styles.module.css";
import { TarefaContext } from "../Contexts/TarefasContext";

export default function Form() {
  const { tarefaObj, setTarefa, criaTarefa, lista } = useContext(TarefaContext);

  function handleChange(field, value) {
    setTarefa((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <form className={styles.form}>
      <div className={styles.input_config}>
        <label htmlFor="">Digite seu tarefa:</label>
        <input
          placeholder="ex: Ler"
          type="text"
          value={tarefaObj.tarefa}
          onChange={(event) => handleChange("tarefa", event.target.value)}
        />
      </div>
      <div className={styles.input_config}>
        <label htmlFor="">Digite seu descricao:</label>
        <input
          placeholder="ex: Leitura de 1h"
          type="text"
          value={tarefaObj.descricao}
          onChange={(event) => handleChange("descricao", event.target.value)}
        />
      </div>
      <button
        className={styles.button}
        onClick={(event) => {
          event.preventDefault();
          criaTarefa();
        }}
      >
        Enviar
      </button>
      <div className={styles.lista}>
        Lista
        {lista.map((item, index) => (
          <ul key={index}>
            <li>{item.tarefa}</li>
            <li>{item.descricao}</li>
          </ul>
        ))}
      </div>
    </form>
  );
}
