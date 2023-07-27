
import ReadScoresData from './ReadScoresData';

export default function HighScores() {


 
  return (
    <>
	
    <div className="self-center container my-auto overflow-auto w-11/12 sm:w-4/6 m-4 px-4 py-4 bg-pink-100 bg-opacity-75 rounded">
      <ReadScoresData/>
    </div>

    </>
  );
}

