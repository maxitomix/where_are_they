import find1 from '../assets/find1.jpg';
import find2 from '../assets/find2.jpg';
import find3 from '../assets/find3.jpg';

type ModalProps = {
  onClose: () => void;
  resetClickPosition: () => void;
};

export default function ModalInstructions({ onClose, resetClickPosition }:ModalProps) {

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
    resetClickPosition();
  }
 
  return (
    <>
      <div className="flex gap-2 mr-4 h-screen justify-center" > 
          <div className="flex  self-center justify-center min-h-screen">
           
            <div className="bg-white p-4 rounded shadow text-center absolute top-60">
              
              <h2 className='p-2' >Instructions</h2>
              <div className="text-left">
                <p>1. Find these three characters. </p>
                <p>2. Get the best time. </p>
              </div>

              <div className="flex justify-between m-4">
                <div className="bg-contain bg-center h-16 w-16 border-red-900 border-4 sm:border-8" style={{  backgroundImage: `url(${find1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div className="bg-contain bg-center h-16 w-16 border-red-900 border-4 sm:border-8" style={{  backgroundImage: `url(${find2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div className="bg-contain bg-center h-16 w-16 border-red-900 border-4 sm:border-8" style={{  backgroundImage: `url(${find3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
              </div>

              <button 
              className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4" 
              onClick={handleContinue}>Start Game
              </button>

            </div>

          </div>
      </div>




    </>


  );
}

