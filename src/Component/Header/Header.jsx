import styles from "./Header.module.css";
import { useContext } from "react";
import { Context } from "../../Util/GlobalContext";
import cross from "../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
function Header() {
  const value = useContext(Context);
  const { nameWinner, setNameWinner } = value;
  if (nameWinner == "cross") {
    return (
      <div className={styles.container}>
        Congratulation <img src={cross} /> Win
      </div>
    );
  } else if (nameWinner == "circle") {
    return (
      <div className={styles.container}>
        Congratulation <span>O</span> Win
      </div>
    );
  } else {
    return <div className={styles.container}>Tic Tac Toe Game</div>;
  }
}
export default Header;
