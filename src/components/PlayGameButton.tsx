
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

export default function PlayGameButton({onPlayClick}) {


 
  return (



    <>

    <button className='self-center h-36 w-60 bg-green-200 rounded'
      onClick={onPlayClick}>
        
      <FontAwesomeIcon icon={faCirclePlay} size="5x" className='text-blue-500'/> 
      <p>Play Round</p>
    </button>

    </>



  );
}