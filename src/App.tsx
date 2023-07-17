
import './App.css'
import {app} from "./services/firebase";
import mainImage from "./assets/characters.jpg"


function App() {

  console.log(app)

  return (
    <div className="w-screen h-screen overflow-auto ">
      <div className='border-8 scrollbar-hide' style={{ width: '1989px', height: '1989px', backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        
      </div>
    </div>
  );
}

export default App
