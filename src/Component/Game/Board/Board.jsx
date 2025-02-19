import styles from "./Board.module.css";
import { useState, useEffect, useRef } from "react";
import cross from "../../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
import circle from "../../../Img/pngimg.com - circle_PNG63.png";
import checkWin from "../../../Service/checkResultGame";
import { useContext } from "react";
import { Context } from "../../../Util/GlobalContext";
function Board() {
  const [endGame, setEndGame] = useState(false);
  const [winner, setWinner] = useState(false);
  const value = useContext(Context);
  const {
    setNameWinner,
    nameWinner,
    resultGame,
    setResultGame,
    count,
    setCount,
  } = value;
  const boxClick = (e, index) => {
    if (endGame) return;
    if (count % 2 === 0) {
      let newArray = [...resultGame];
      newArray[index] = "cross";
      setResultGame(newArray);
      setCount(count + 1);
    }
    if (count % 2 != 0) {
      let newArray = [...resultGame];
      newArray[index] = "circle";
      setResultGame(newArray);
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
    <div className={styles.container}>
      {resultGame.map((_, index) => {
        return (
          <div
            onClick={(e) => {
              boxClick(e, index);
            }}>
            {resultGame[index] == "cross" && <img src={cross} />}
            {resultGame[index] == "circle" && <img src={circle} />}
          </div>
        );
      })}
    </div>
  );
}
export default Board;
