import { useState } from "react";

export default function useTarefa(initialValue) {
  const [tarefa, setTarefa] = useState(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;
    setTarefa({ ...tarefa, [name]: value });
  }

  function clearTarefa(initialValues) {
    setTarefa(initialValues);
  }

  return { tarefa, handleChange, clearTarefa };
}
