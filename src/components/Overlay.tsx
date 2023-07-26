
import HighScores from "./Highscores";
import ModalClickCheck from "./ModalClickCheck";
import ModalInstructions from "./ModalInstructions";
import ModalWin from "./ModalWin";
import NavBar from "./NavBar";
import PlayGameButton from "./PlayGameButton";
import { useState, useEffect } from "react";
import ModalLogin from "./ModalLogIn";

import {app} from "../services/firebase";
import { auth, firestore } from '../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { GoogleAuthProvider , signInWithPopup} from "firebase/auth";



type OverlayProps = {
  resetClickPosition: () => void;
  clickPosition: { x: number, y: number } |null| undefined;
};


export default function Overlay({clickPosition, resetClickPosition}:OverlayProps) {

// winning conditions
const [isFound1, setIsFound1] = useState(false);
const [isFound2, setIsFound2] = useState(false);
const [isFound3, setIsFound3] = useState(false);

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
    setIsFound1(false);
    setIsFound2(false);
    setIsFound3(false);
    setHasWon(false);
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

  const [hasWon, setHasWon] = useState(false);

  const detectHasWon = () => {
    setHasWon(true);
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



 
//------------AUTH--------------------

const  [user] = useAuthState(auth)

const [isLoggedIn, setIsLoggedIn] = useState(false);

const [isUser, setIsUser] = useState('Guest');

const closeModalLogin= () => {
  setIsLoggedIn(true)
}


async function handleLoginChoice(choice) {
  try {
    if (choice === 'google') {
      console.log('google')
      // handle Google login
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log(user.displayName);
      setIsUser(user.displayName)
 
    } else if (choice === 'guest') {
      // handle guest login
      console.log('guest')
      // Whatever you want to do for guest login

    }
  } catch (error) {
    console.error(error);
  }
}

//------------AUTH--------------------
  return (

    <div className={`flex flex-col w-screen backdrop-blur-sm fixed top-0 left-0 ${isPlaying ? '' : 'h-screen'}`}>
        <NavBar isFound1={isFound1}  isFound2={isFound2} isFound3={isFound3}  isPlaying={isPlaying} onLogoClick={restartGame} startTimer={startTimer} isUser={isUser} hasWon={hasWon}/>

        {!isLoggedIn && <ModalLogin onClose={closeModalLogin} onChoice={handleLoginChoice} />}

        {!isPlaying && <HighScores />}
        {!isPlaying && <PlayGameButton onPlayClick={toggleIsPlaying}/>}
        {showModal && <ModalInstructions onClose={closeModalAndStartTimer} resetClickPosition={resetClickPosition}/>}
        {showClickCheckModal &&
        <ModalClickCheck 
        onClose={closeClickCheckModal} 
        resetClickPosition={resetClickPosition} 
        clickPosition={clickPosition} 
        isFound1={isFound1}  
        isFound2={isFound2} 
        isFound3={isFound3}
        setIsFound1={setIsFound1} 
        setIsFound2={setIsFound2} 
        setIsFound3={setIsFound3} 
        />}
        {isFound1 && isFound2 && isFound3 && <ModalWin onClose={restartGame} resetClickPosition={resetClickPosition} onWin={detectHasWon} />}

    </div>

  );
}