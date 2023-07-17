
import './App.css'
import {app} from "./services/firebase";
import mainImage from "./assets/characters.jpg"


function App() {

  console.log(app)

  return (
    <div className="w-screen h-screen overflow-auto">
      <div className='shadow-2xl border-8' style={{ width: '7956px', height: '7956px' }}>
        <div className="w-full h-full" style={{ backgroundImage: `url(${mainImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
      </div>
    </div>
  );
}

export default App
