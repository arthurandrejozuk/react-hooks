import { useState } from "react";
import { createContext } from "react";

export const CronometroContext = createContext({
  tempoCronometro: 0,
  inserirTempoCronometro: () => {},
  setTempoCronometro: () => {},
});

export default function CronometroProvider({ children }) {
  const [tempoCronometro, setTempoCronometro] = useState(null);

  function inserirTempoCronometro(tempo) {
    if (tempo > 0) {
      setTempoCronometro(tempo);
    } else {
      setTempoCronometro(null);
    }
  }

  return (
    <CronometroContext.Provider value={{ tempoCronometro, inserirTempoCronometro }}>
      {children}
    </CronometroContext.Provider>
  );
}
