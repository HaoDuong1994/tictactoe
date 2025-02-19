import { useContext } from "react";
import { Context } from "../../Util/GlobalContext";
function Button() {
  const value = useContext(Context);
  console.log(value);
  const { setResultGame, resultGame, count, setCount } = value;
  console.log(resultGame);
  console.log(count);
  const reset = () => {
    setResultGame(Array(9).fill(null));
    setCount(0);
  };
  return (
    <button
      onClick={() => {
        reset();
      }}>
      Reset
    </button>
  );
}
export default Button;
