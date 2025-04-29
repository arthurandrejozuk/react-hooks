import styles from "./styles.module.css";
import play_arrowImg from "/src/assets/imgs/play_arrow.png";

const BotaoCronometro = ({ iniciaCronometro, tipo }) => {
  return (
    <div onClick={iniciaCronometro} className={styles["cronometer__primary-button-wrapper"]}>
      <button className={styles["cronometer__primary-button"]}>
        <img className={styles["cronometer__primary-button-icon"]} src={play_arrowImg} />
        <span>{tipo}</span>
      </button>
    </div>
  );
};

export default BotaoCronometro;
