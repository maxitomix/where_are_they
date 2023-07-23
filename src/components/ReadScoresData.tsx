
import scoresData from '../data/scoresTable.json';

export default function ReadScoresData() {

  const formatTime = (time: string) => {
    const date = new Date(time);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
 
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

        {scoresData.scores.map((score, index) => (
                <tr key={index} className='flex justify-evenly gap-1 gap-x-8'>
                <td>{score.username}</td> 
                <td> {formatTime(score.time)}</td>
                </tr>
              ))}



        </tbody>
      </table>

    </div>
    </>
  );
}

