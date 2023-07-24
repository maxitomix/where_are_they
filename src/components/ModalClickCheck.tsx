import find1 from '../assets/find1.jpg';
import find2 from '../assets/find2.jpg';
import find3 from '../assets/find3.jpg';
import correctPositions from '../data/correctPositionTable.json';

type ModalClickCheckProps = {
  onClose: () => void;
  resetClickPosition: () => void;
  clickPosition: { x: number, y: number } |null| undefined;
  isFound1: boolean;
  setIsFound1: (found: boolean) => void;
  isFound2: boolean;
  setIsFound2: (found: boolean) => void;
  isFound3: boolean;
  setIsFound3: (found: boolean) => void;

};

export default function ModalClickCheck({
  onClose, resetClickPosition, clickPosition, 
  isFound1,  isFound2, isFound3,
  setIsFound1, setIsFound2, setIsFound3
}: ModalClickCheckProps) {

  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation()
    onClose();
    resetClickPosition();
  }

  const checkPosition = (image: string, e: React.MouseEvent) => {
  e.stopPropagation()
  let clickX = -1;
  let clickY = -1;
  if (clickPosition) {
    ({ x: clickX, y: clickY } = clickPosition);
  }

  let foundImage = correctPositions.correctPosition.find(position => {
    let xMin = Number(position.xMin);
    let xMax = Number(position.xMax);
    let yMin = Number(position.yMin);
    let yMax = Number(position.yMax);
  
    return clickX >= xMin && clickX <= xMax && clickY >= yMin && clickY <= yMax && position.image === image;
  });
  
    if (foundImage) {
      console.log(`You found the image: ${foundImage.image}`);
      switch(foundImage.image) {
        case "find1":
          setIsFound1(true);
          break;
        case "find2":
          setIsFound2(true);
          break;
        case "find3":
          setIsFound3(true);
          break;
        default:
          break;
      }
    } else {
      console.log('No image found at this position');
    }
  }
 
  return (
    <>
      <div className="flex gap-2 mr-4 h-screen justify-center"> 
          <div className="flex  self-center justify-center min-h-screen">
           
            <div className="bg-white p-4 rounded shadow text-center absolute top-60">
              
              <h2 className='p-2' >Which one did you find?</h2>
              <div className="text-left">
              </div>

              <div className="flex justify-between m-4">
                <div 
                onClick={(e) => checkPosition('find1', e)}
                className={`bg-contain bg-center h-16 w-16  border-4 sm:border-8 ${ isFound1?  "border-green-900" : "border-red-900"}`} style={{  backgroundImage: `url(${find1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div 
                onClick={(e) => checkPosition('find2', e)}
                className={`bg-contain bg-center h-16 w-16  border-4 sm:border-8 ${ isFound2?  "border-green-900" : "border-red-900"}`} style={{  backgroundImage: `url(${find2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>

                <div 
                onClick={(e) => checkPosition('find3', e)}
                className={`bg-contain bg-center h-16 w-16  border-4 sm:border-8 ${ isFound3?  "border-green-900" : "border-red-900"}`} style={{  backgroundImage: `url(${find3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
              </div>

              <button 
              className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-4" 
              onClick={handleContinue}>Continue
              </button>

            </div>

          </div>
      </div>




    </>


  );
}

