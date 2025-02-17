import styles from "./Board.module.css";
import { useState, useEffect, useRef } from "react";
import cross from "../../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
import circle from "../../../Img/pngimg.com - circle_PNG63.png";
import checkWin from "../../../Service/checkResultGame";
import { useContext } from "react";
import { Context } from "../../../Util/GlobalContext";
function Board() {
  const [count, setCount] = useState(0);
  const [endGame, setEndGame] = useState(false);
  const [winner, setWinner] = useState(false);
  const value = useContext(Context);
  const { setNameWinner, nameWinner, resultGame, setResultGame } = value;
  const boxClick = (e, num) => {
    if (endGame) return;
    let newArray = [...resultGame];
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'/>`;
      newArray[num] = "cross";
      setResultGame([...newArray]);
      setCount(count + 1);
    }
    if (count % 2 !== 0) {
      e.target.innerHTML = `<img src='${circle}' />`;
      newArray[num] = "circle";
      setResultGame([...newArray]);
      setCount(count + 1);
    }
  };
  useEffect(() => {
    const winner = checkWin(resultGame);
    if (winner) {
      setEndGame(true);
      setWinner(true);
      setNameWinner(winner);
    } else {
      setEndGame(false);
      setWinner(false);
    }
  }, [resultGame]);
  return (
    <div>
      <div className={styles.row}>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 0);
          }}></div>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 1);
          }}></div>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 2);
          }}></div>
      </div>
      <div className={styles.row}>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 3);
          }}></div>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 4);
          }}></div>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 5);
          }}></div>
      </div>
      <div className={styles.row}>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 6);
          }}></div>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 7);
          }}></div>
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 8);
          }}></div>
      </div>
    </div>
  );
}
export default Board;
