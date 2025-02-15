import styles from "./Board.module.css";
import { useState, useEffect, useRef } from "react";
import cross from "../../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
import circle from "../../../Img/pngimg.com - circle_PNG63.png";
import checkWin from "../../../Service/checkResultGame";
function Board() {
  const [resultGame, setResultGame] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [endGame, setEndGame] = useState(false);
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
    console.log(winner);
    if (winner) {
      setEndGame(true);
    } else {
      setEndGame(false);
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
      <div>Hello</div>
    </div>
  );
}
export default Board;
