import Board from "./Board/Board";
import History from "./History/History";
import styles from "./Game.module.css";
function Game() {
  return (
    <div className={styles.container}>
      <div className={styles.empty}>hello</div>
      <Board />
      <div className={styles.history}>History</div>
    </div>
  );
}
export default Game;
