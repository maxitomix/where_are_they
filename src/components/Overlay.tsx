import NavBar from "./NavBar";



export default function Overlay() {


 
  return (

    <div className='w-screen backdrop-blur-sm fixed top-0 left-0'>
      <NavBar/>
    </div>

  );
}