import { useEffect} from 'react';
import find1 from '../assets/find1.jpg';
import find2 from '../assets/find2.jpg';
import find3 from '../assets/find3.jpg';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../services/firebase';

type ModalWinProps = {
  onClose: () => void;
  resetClickPosition: () => void;
  onWin: () => void;
  user: User | null;
};

type User = {
  displayName: string | null;
  // any other properties that a user might have
};

type writeWinningScoreProps = {
  username : string;
  time : number;
};

const writeWinningScore = async ({username, time} : writeWinningScoreProps) => {
  try {
    const docRef = await addDoc(collection(db, "scoresTableFirestore"), {
      displayName: username || 'Guest',
      time: time,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default function ModalWin({ onClose, resetClickPosition, onWin, user }:ModalWinProps) {


  // const handleContinue = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   writeWinningScore(user.displayName, totalSeconds)
  //   onClose();
  //   resetClickPosition();
  // }

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation();
    // writeWinningScore((user===null ? 'Guest': user.displayName), totalSeconds);
    // writeWinningScore({
    //   username: (user===null ? 'Guest': user.displayName),
    //   time: totalSeconds});
    writeWinningScore({
      username: user?.displayName || 'Guest',
      time: totalSeconds
    });  
    onClose();
    resetClickPosition();
  }

 
  // Retrieve the time from localStorage
  const totalSeconds = JSON.parse(localStorage.getItem('timer') || '0');


  useEffect(() => {
    // This code will be executed when the component is first rendered
     console.log(user) 
    onWin();

}, []);

  return (
    <>
      <div className="flex gap-2 mr-4 h-screen justify-center" > 
          <div className="flex  self-center justify-center min-h-screen">
           
            <div className="bg-white p-4 rounded shadow text-center absolute top-60">
              
              <h2 className='p-2' >You WIN!</h2>
              <div className="text-left">
                <p> Your score will be added to the leaderboard. </p>
                {/* <p>Your time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p> */}
              </div>

              <div className="flex justify-between m-4">
                <div className="bg-contain bg-center h-16 w-16 border-green-900 border-4 sm:border-8" style={{  backgroundImage: `url(${find1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div className="bg-contain bg-center h-16 w-16 border-green-900 border-4 sm:border-8" style={{  backgroundImage: `url(${find2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div className="bg-contain bg-center h-16 w-16 border-green-900 border-4 sm:border-8" style={{  backgroundImage: `url(${find3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
              </div>

              <button 
              className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4" 
              onClick={handleContinue}>Great!
              </button>

            </div>

          </div>
      </div>




    </>


  );
}

