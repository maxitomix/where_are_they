import searchIcon from '../assets/search.png';
import userIcon from '../assets/user.png';
import Roster from './Roster';
import Timer from './Timer';


type NavBarProps = {
  onLogoClick: () => void;
  isPlaying:boolean;
  startTimer: boolean;
  
  isFound1: boolean;

  isFound2: boolean;

  isFound3: boolean;

};

export default function NavBar({onLogoClick, isPlaying, startTimer, isFound1, isFound2, isFound3}:NavBarProps) {


 
  return (
    <>
    <div className='flex sm:mt-4 justify-between'>

        <img className='  h-16 w-16 sm:h-16 sm:w-16 place-self-center' src={searchIcon} alt="searchIcon" onClick={onLogoClick}/>

        {isPlaying ? 
         <Timer startTimer={startTimer} />
        :
        <h1 className={` mx-auto place-self-center  text-pink-500 font text-sm sm:text-3xl font-black bg-pink-100 bg-opacity-75 px-5 py-1 rounded-full shadow-lg`}
        >WHERE ARE THEY??</h1>
        }

      <div className="flex place-self-center ">

        {isPlaying ? 
        <>
       
        <Roster isFound1={isFound1} isFound2={isFound2} isFound3={isFound3}/>
        </>

        :
        
        <img className={`object-scale-down h-12 sm:h-16 place-self-center `} src={userIcon} alt="searchIcon" />
       }

      </div>
        
    </div>
    
    </>
  );
}