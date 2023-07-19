import HighScores from "./Highscores";
import NavBar from "./NavBar";
import PlayGame from "./PlayGame";



export default function Overlay() {


 
  return (

    <div className='flex flex-col w-screen h-screen backdrop-blur-sm fixed top-0 left-0'>
      <NavBar/>
      <HighScores/>
      <PlayGame/>
    </div>

  );
}