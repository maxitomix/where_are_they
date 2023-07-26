import { useEffect } from 'react';
import find1 from '../assets/find1.jpg';
import find2 from '../assets/find2.jpg';
import find3 from '../assets/find3.jpg';

type ModalWinProps = {
  onClose: () => void;
  resetClickPosition: () => void;
};

export default function ModalWin({ onClose, resetClickPosition, onWin }:ModalWinProps) {

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
    resetClickPosition();
  }
 
  // Retrieve the time from localStorage
  const totalSeconds = JSON.parse(localStorage.getItem('timer') || '0');

  // Calculate minutes and seconds
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    // This code will be executed when the component is first rendered
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

