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

  return (
    <TarefaContext.Provider value={{ tarefaObj, setTarefa, criaTarefa, lista }}>
      {children}
    </TarefaContext.Provider>
  );
}
