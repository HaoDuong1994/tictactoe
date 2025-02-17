import { createContext, useContext, useState } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  const [nameWinner, setNameWinner] = useState("");
  const globalValue = {
    nameWinner,
    setNameWinner,
  };
  return <Context.Provider value={globalValue}>{children}</Context.Provider>;
}
export default GlobalContext;
export { Context };
