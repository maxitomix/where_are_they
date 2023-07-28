
type ModalLoginProps = {
  onClose: () => void;
  onChoice: (choice: string) => void; // replace `void` with the type you are expecting if it's not void
};


export default function ModalLogin( {onClose, onChoice} : ModalLoginProps ) {

  const onGoogleChoice = () => {
    onChoice('google');  // communicate the choice to parent
    onClose();  // Close the modal
  };

  const onGuestChoice = () => {
    onChoice('guest'); // communicate the choice to parent
    onClose(); // Close the modal
  }

  return (
    <>
      <div className="flex gap-2 mr-4 h-screen justify-center" > 
          <div className="flex  self-center justify-center min-h-screen">
           
            <div className="bg-white p-4 rounded shadow text-center absolute top-60">
              
              <h2 className='p-2' >Login or be our Guest</h2>



              <button 
              className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4" 
              onClick={onGoogleChoice}>Log in with Google!
              </button>
              <button 
              className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4" 
              onClick={onGuestChoice}>Continue as Guest
              </button>

            </div>

          </div>
      </div>




    </>


  );
}

