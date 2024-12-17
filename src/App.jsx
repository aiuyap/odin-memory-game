import { useState } from "react";
import { GameScreen } from "./components/GameScreen";
import { StartScreen } from "./components/StartScreen";

function App() {
  const [startGame, setStartGame] = useState(false);

  function handleStart() {
    setStartGame(true);
  }

  return (
    <>{!startGame ? <StartScreen onClick={handleStart} /> : <GameScreen />}</>
  );
}

export default App;
