import styles from "./Header.module.css";
import { useContext } from "react";
import { Context } from "../../Util/GlobalContext";
import cross from "../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
function Header() {
  return <div className={styles.container}>Tic Tac Toe Game</div>;
}
export default Header;
