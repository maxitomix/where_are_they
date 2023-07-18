
import './App.css'
import {app} from "./services/firebase";
import mainImage from "./assets/characters.jpg"
import Overlay from './components/Overlay';


function App() {

  console.log(app)

  return (

<>

 <div className='w-screen h-screen overflow-auto border-8  border-red-500 relative'>
  
          
   <div className='border-8 scrollbar-hide ' style={{ width: '1989px', height: '1989px', backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
   <Overlay/>
  </div>
      
  </div>
  </>
  );
}

export default App
