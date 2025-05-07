import { createContext, useState } from "react";

export const TarefaContext = createContext({ tarefa: "", descricao: "" });

export default function TarefaProvider({ children }) {
  const [tarefaObj, setTarefa] = useState({ tarefa: "", descricao: "" });
  const [lista, setLista] = useState([]);

  function criaTarefa() {
    setLista((prev) => [...prev, tarefaObj]);
    setTarefa({
      tarefa: "",
      descricao: "",
    });
  }

  function tarefasReducer(state, action) {
    switch (action.type) {
      case "adicionar":
        return [...state, action.tarefa];
      case "limpar":
        return [];
      default:
        return state;
    }
  }

  return (
    <TarefaContext.Provider value={{ tarefaObj, lista, setTarefa, criaTarefa, tarefasReducer }}>
      {children}
    </TarefaContext.Provider>
  );
}
