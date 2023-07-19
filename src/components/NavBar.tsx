import searchIcon from '../assets/search.png';
import userIcon from '../assets/user.png';

export default function NavBar({onLogoClick, isPlaying}) {


 
  return (
    <>
    <div className='flex justify-stretch'>
      <div className="flex" >
        <img className='h-12 sm:h-16 place-self-center' src={searchIcon} alt="searchIcon" onClick={onLogoClick}/>
      </div>

        <h1 className='mx-auto place-self-center  text-pink-500 font text-sm sm:text-3xl font-black bg-pink-100 bg-opacity-75 px-5 py-1 rounded-full shadow-lg'
        >WHERE ARE THEY??</h1>

      <div className="flex">
        <img className={`object-scale-down h-12 sm:h-16 place-self-center ${isPlaying ? 'hidden' : ''}`} src={userIcon} alt="searchIcon" />
        <Roster className={`${isPlaying ? 'hidden' : ''}`}/>
      </div>
        
    </div>
    </>
  );
}