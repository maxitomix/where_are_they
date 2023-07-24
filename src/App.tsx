
import './App.css'
import {app} from "./services/firebase";
import mainImage from "./assets/characters.jpg"
import Overlay from './components/Overlay';
import { useRef } from 'react';
import { useState } from "react";


function App() {


  type Position = { x: number, y: number } | undefined | null;

  const [clickPosition, setClickPosition] = useState<Position>();

  console.log(app)

  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const handleBackGroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (backgroundRef.current) {
          const rect = backgroundRef.current.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          // console.log('Mouse position relative to image:', x, y);
          console.log({x,y})
          setClickPosition({x,y})
      }
  }

  const resetClickPosition = () => {
    setClickPosition(null);
  }

  return (

<>

 <div className='w-screen h-screen overflow-auto border-8  border-red-500 relative'>
      
   <div ref={backgroundRef} onClick={handleBackGroundClick} className='border-8 scrollbar-hide ' style={{ width: '1989px', height: '1989px', backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

   <Overlay clickPosition={clickPosition} resetClickPosition={resetClickPosition}/>
   
  </div>
      
  </div>
  </>
  );
}

export default App
