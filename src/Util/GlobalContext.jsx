import { createContext, useContext, useState } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  const [nameWinner, setNameWinner] = useState("");
  const [resultGame, setResultGame] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [whoWin, setWhoWin] = useState([]);
  const globalValue = {
    nameWinner,
    setNameWinner,
    resultGame,
    setResultGame,
    count,
    setCount,
    setWhoWin,
    whoWin,
  };
  return <Context.Provider value={globalValue}>{children}</Context.Provider>;
}
export default GlobalContext;
export { Context };
