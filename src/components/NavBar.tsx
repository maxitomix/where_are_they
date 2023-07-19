import searchIcon from '../assets/search.png';
import userIcon from '../assets/user.png';
import Roster from './Roster';

export default function NavBar({onLogoClick, isPlaying}) {


 
  return (
    <>
    <div className='flex sm:mt-4 justify-between'>

        <img className='  sm:h-16 sm:w-16 place-self-center' src={searchIcon} alt="searchIcon" onClick={onLogoClick}/>

        {isPlaying ? 
        ' '
        :
        <h1 className={` mx-auto place-self-center  text-pink-500 font text-sm sm:text-3xl font-black bg-pink-100 bg-opacity-75 px-5 py-1 rounded-full shadow-lg`}
        >WHERE ARE THEY??</h1>
        }

      <div className="flex place-self-center ">

        {isPlaying ? 
        <>
        <div className="mr-auto ml-auto mt-0 place-self-center">timer</div>
        <Roster />
        </>
        :
        <img className={`object-scale-down h-12 sm:h-16 place-self-center `} src={userIcon} alt="searchIcon" />
       }

      </div>
        
    </div>
    
    </>
  );
}