
import scoresData from '../data/scoresTable.json';
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../services/firebase"
import { useEffect, useState } from 'react';

export default function ReadScoresData() {

  // const formatTime = (time: string) => {
  //   const date = new Date(time);
  //   const minutes = date.getMinutes().toString().padStart(2, '0');
  //   const seconds = date.getSeconds().toString().padStart(2, '0');
  //   return `${minutes}:${seconds}`;
  // };
 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainderSeconds.toString().padStart(2, '0')}`;
  };

  const [scoresData, setScoresData] = useState([]);

  useEffect(() => {
    const fetchScoresData = async () => {
      const querySnapshot = await getDocs(collection(db, "scoresTableFirestore"));
      const scores = querySnapshot.docs.map((doc) => ({
        displayName: doc.data().displayName,
        time: doc.data().time
        
      }));
  
      setScoresData(scores);
    };
  
    fetchScoresData();
  }, []);



  return (
    <>
    <div className='text-center'>
      <h2 className=' text-pink-500 font text-sm sm:text-3xl font-black bg-pink-100 bg-opacity-75 px-5 py-1 rounded-full shadow-lg'>HIGH SCORES</h2>

      <table className="table-auto grid justify-evenly gap-1">
        <thead>
          <tr>
            <th>User Name</th>
            <th> Time</th>
          </tr>
        </thead>
        <tbody className='grid justify-evenly gap-1 gap-x-8'>
{/* 
         {scoresData.map((score, index) => (
            <tr key={index} className='flex justify-evenly gap-1 gap-x-8'>
              <td>{score.displayName}</td>
              <td>{formatTime(score.time)}</td>
            </tr>
          ))} */}

        {[...scoresData]
          .sort((a, b) => a.time - b.time)
          .map((score, index) => (
            <tr key={index} className='flex justify-evenly gap-1 gap-x-8'>
              <td>{score.displayName}</td>
              <td>{formatTime(score.time)}</td>
            </tr>
        ))}


        </tbody>
      </table>

    </div>
    </>
  );
}

