import styles from "./Board.module.css";
import { useState } from "react";
import cross from "../../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
import circle from "../../../Img/pngimg.com - circle_PNG63.png";
function Board() {
  let resultGame = ["", "", "", "", "", "", "", "", ""];
  console.log(resultGame);
  const [count, setCount] = useState(0);
  console.log(count);
  const boxClick = (e, num) => {
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'/>`;
      setCount(count + 1);
    }
    if (count % 2 !== 0) {
      e.target.innerHTML = `<img src='${circle}' />`;
      setCount(count + 1);
    }
  };
  return (
    <div>
      <div className={styles.row}>
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
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 3);
          }}></div>
      </div>
      <div className={styles.row}>
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
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 6);
          }}></div>
      </div>
      <div className={styles.row}>
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
        <div
          className={styles.box}
          onClick={(e) => {
            boxClick(e, 9);
          }}></div>
      </div>
    </div>
  );
}
export default Board;
