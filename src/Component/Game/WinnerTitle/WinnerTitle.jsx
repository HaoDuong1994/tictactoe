import { useContext } from "react";
import { Context } from "../../../Util/GlobalContext";
import cross from "../../../Img/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
function WinnerTitle(props) {
  const styles = props.styles;
  const value = useContext(Context);
  const { nameWinner } = value;
  if (nameWinner == "cross") {
    return (
      <div className={styles.titleWinner}>
        Congratulation <img src={cross} /> Win{" "}
      </div>
    );
  } else if (nameWinner == "circle") {
    return (
      <div className={styles.titleWinner}>
        Congratulation <span> O </span> Win
      </div>
    );
  } else {
    return <div className={styles.titleWinner}></div>;
  }
}
export default WinnerTitle;
