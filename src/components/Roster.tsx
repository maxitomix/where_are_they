import find1 from '../assets/find1.jpg';
import find2 from '../assets/find2.jpg';
import find3 from '../assets/find3.jpg';


export default function Roster({isFound1, isFound2, isFound3}) {


 
  return (
    <>
    <div className="flex gap-2 mr-4"> 
      <div className={`bg-contain bg-center h-16 w-16  border-4 sm:border-8 ${ isFound1?  "border-green-900" : "border-red-900"}`}
      style={{  backgroundImage: `url(${find1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      ></div>

      <div className={`bg-contain bg-center h-16 w-16  border-4 sm:border-8 ${ isFound2?  "border-green-900" : "border-red-900"}`} style={{  backgroundImage: `url(${find2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            ></div>

      <div className={`bg-contain bg-center h-16 w-16  border-4 sm:border-8 ${ isFound3?  "border-green-900" : "border-red-900"}`} style={{  backgroundImage: `url(${find3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            ></div>

    </div>
  
    </>
  );
}