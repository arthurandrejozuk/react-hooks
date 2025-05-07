import { useContext, useReducer } from "react";
import styles from "./styles.module.css";
import useTarefa from "../hooks/useTarefa";
import { TarefaContext } from "../Contexts/TarefasContext";

export default function Form() {
  const { lista, tarefasReducer } = useContext(TarefaContext);
  const { tarefa, handleChange, clearTarefa } = useTarefa({ tarefa: "", descricao: "" });
  const [listaRedux, dispatch] = useReducer(tarefasReducer, lista);

  return (
    <form className={styles.form}>
      <div className={styles.input_config}>
        <label htmlFor="">Digite seu tarefa:</label>
        <input
          placeholder="ex: Ler"
          type="text"
          name="tarefa"
          value={tarefa.tarefa}
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_config}>
        <label htmlFor="">Digite seu descricao:</label>
        <input
          name="descricao"
          placeholder="ex: Leitura de 1h"
          type="text"
          value={tarefa.descricao}
          onChange={handleChange}
        />
      </div>
      <button
        className={styles.button}
        onClick={(event) => {
          event.preventDefault();
          dispatch({ type: "adicionar", tarefa: tarefa });
        }}
      >
        Enviar
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch({ type: "limpar" });
          clearTarefa();
        }}
      >
        Limpar
      </button>
      <div className={styles.lista}>
        Lista
        {listaRedux.map((item, index) => (
          <ul key={index}>
            <li>{item.tarefa}</li>
            <li>{item.descricao}</li>
          </ul>
        ))}
      </div>
    </form>
  );
}
