import HighScores from "./Highscores";
import NavBar from "./NavBar";
import PlayGameButton from "./PlayGameButton";
import { useState } from "react";



export default function Overlay() {

  // Create a piece of state to track whether the game is being played
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle isPlaying state
  const toggleIsPlaying = () => {
    setIsPlaying(true);
  }

  const restartGame = () => {
    setIsPlaying(false);
  }
 
  return (

    <div className={`flex flex-col w-screen backdrop-blur-sm fixed top-0 left-0 ${isPlaying ? '' : 'h-screen'}`}>
      <NavBar isPlaying={isPlaying} onLogoClick={restartGame}/>
      {!isPlaying && <HighScores />}
      {!isPlaying && <PlayGameButton onPlayClick={toggleIsPlaying}/>}
    </div>

  );
}