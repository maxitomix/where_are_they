import searchIcon from '../assets/search.png';

export default function NavBar() {


 
  return (
    <>
    <div className='flex justify-stretch'>
      <img className='ml-4 mu-2' src={searchIcon} alt="searchIcon" />
        <h1 className='mx-auto place-self-center  text-pink-500 font text-3xl font-black bg-pink-100 bg-opacity-75 px-5 py-1 rounded-full'>WHERE ARE THEY??</h1>
    </div>
    </>
  );
}