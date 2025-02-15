import styles from "./Board.module.css";
import { useState } from "react";
import cross from "../../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
import circle from "../../../Img/pngimg.com - circle_PNG63.png";
function Board() {
  const [resultGame, setResultGame] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  console.log(resultGame);
  const [count, setCount] = useState(0);
  const boxClick = (e, num) => {
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
