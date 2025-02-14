import Board from "./Board/Board";
import History from "./History/History";
import styles from "./Game.module.css";
function Game() {
  return (
    <div className={styles.container}>
      <Board />
      <History />
    </div>
  );
}
export default Game;
