import { useContext } from "react";
import { Context } from "../../Util/GlobalContext";
import styles from "./button.module.css";
function Button() {
  const value = useContext(Context);
  const { setResultGame, resultGame, count, setCount, setNameWinner } = value;
  const reset = () => {
    setResultGame(Array(9).fill(null));
    setCount(0);
    setNameWinner("");
  };
  return (
    <button
      className={styles.button}
      onClick={() => {
        reset();
      }}>
      Reset
    </button>
  );
}
export default Button;
