
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export default function PlayGame() {


 
  return (



    <>

    <button className='self-center h-36 w-60 bg-green-200 rounded'>
      <FontAwesomeIcon icon={faCirclePlay} size="5x" className='text-blue-500'/> 
      <p>Play Round</p>
    </button>

    </>



  );
}