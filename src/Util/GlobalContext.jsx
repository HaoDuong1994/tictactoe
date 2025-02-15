import { createContext, useContext } from "react";
const Context = createContext();
function GlobalContext({ children }) {
  return <Context.Provider value={1}>{children}</Context.Provider>;
}
export default GlobalContext;
