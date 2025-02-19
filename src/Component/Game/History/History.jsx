import { useContext } from "react";
import { Context } from "../../../Util/GlobalContext";
function History(props) {
  const styles = props.styles;
  const value = useContext(Context);
  const { whoWin } = value;
  console.log(whoWin);
  return (
    <div className={styles.history}>
      {whoWin != [] ? (
        whoWin.map((winner, index) => {
          return (
            <div>
              {index + 1}. {winner} Win
            </div>
          );
        })
      ) : (
        <div>Scrore player...</div>
      )}
    </div>
  );
}
export default History;
