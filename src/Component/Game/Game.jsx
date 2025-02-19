import Board from "./Board/Board";
import History from "./History/History";
import styles from "./Game.module.css";
import WinnerTitle from "./WinnerTitle/WinnerTitle";
function Game() {
  return (
    <div className={styles.container}>
      <WinnerTitle styles={styles} />
      <Board />
      <History styles={styles} />
    </div>
  );
}
export default Game;
