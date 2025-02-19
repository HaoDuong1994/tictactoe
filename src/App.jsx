import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Game from "./Component/Game/Game";
import Button from "./Component/Button/button";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Header />
      <Game />
      <Button />
    </div>
  );
}

export default App;
