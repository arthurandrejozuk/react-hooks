import { useState } from "react";
import styles from "./styles.module.css";

export default function Form() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [lista, setLista] = useState([]);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }
  function onClick() {
    setLista((prev) => [...(prev ?? []), form]);
    console.log(lista);
    setForm({
      nome: "",
      email: "",
    });
  }

  return (
    <form className={styles.form}>
      <div className={styles.input_config}>
        <label htmlFor="">Digite seu nome:</label>
        <input
          placeholder="Nome"
          type="text"
          value={form.nome}
          onChange={(event) => handleChange("nome", event.target.value)}
        />
      </div>
      <div className={styles.input_config}>
        <label htmlFor="">Digite seu email:</label>
        <input
          placeholder="Email"
          type="text"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
        />
      </div>
      <button
        className={styles.button}
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }}
      >
        Enviar
      </button>
      <div className={styles.lista}>
        Lista
        {lista.map((item, index) => (
          <ul key={index}>
            <li>{item.nome}</li>
            <li>{item.email}</li>
          </ul>
        ))}
      </div>
    </form>
  );
}
