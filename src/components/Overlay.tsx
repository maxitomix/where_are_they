import HighScores from "./Highscores";
import ModalClickCheck from "./ModalClickCheck";
import ModalInstructions from "./ModalInstructions";
import NavBar from "./NavBar";
import PlayGameButton from "./PlayGameButton";
import { useState, useEffect } from "react";



export default function Overlay({clickPosition, resetClickPosition}) {

  // Create a piece of state to track whether the game is being played
  const [isPlaying, setIsPlaying] = useState(false);

// modal with instructions
  const [showModal, setShowModal] = useState(false); 

  // timer
  const [startTimer, setStartTimer] = useState(false);

  // modal for checking click
  const [showClickCheckModal, setShowClickCheckModal] = useState(false);

 // check open modals
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle isPlaying state
  const toggleIsPlaying = () => {
    setIsPlaying(true);
    setShowModal(true); 
  }

  const restartGame = () => {
    setIsPlaying(false);
    setStartTimer(false)
    setShowClickCheckModal(false);
    setIsModalOpen(false); 
  }

  const closeModalAndStartTimer = () => {
    setShowModal(false); 
    setStartTimer(true)
    setIsModalOpen(false); 
  }

  const closeClickCheckModal = () => {
    setShowClickCheckModal(false); 
    resetClickPosition();
    setIsModalOpen(false);
  }

  
  // if timer has started and user clicked on the background,
  // show ModalClickCheck
  useEffect(() => {
    if (startTimer && clickPosition && !isModalOpen) {
      setShowClickCheckModal(true);
      setIsModalOpen(true);
      console.log('useffect')
    }
  }, [startTimer, clickPosition, isModalOpen]);
 
  return (

    <div className={`flex flex-col w-screen backdrop-blur-sm fixed top-0 left-0 ${isPlaying ? '' : 'h-screen'}`}>
      <NavBar isPlaying={isPlaying} onLogoClick={restartGame} startTimer={startTimer}/>
      {!isPlaying && <HighScores />}
      {!isPlaying && <PlayGameButton onPlayClick={toggleIsPlaying}/>}
      {showModal && <ModalInstructions onClose={closeModalAndStartTimer} resetClickPosition={resetClickPosition}/>}
      {showClickCheckModal && <ModalClickCheck onClose={closeClickCheckModal} resetClickPosition={resetClickPosition}/>}
    </div>

  );
}