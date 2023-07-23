import  { useState, useEffect } from 'react';

interface TimerProps {
  startTimer: boolean;
}

export default function Timer({ startTimer}: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds >= 59) {
            setMinutes((minutes) => minutes + 1);
            return 0;
          } else {
            return seconds + 1;
          }
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [startTimer]);

  return (
    <div className="flex ml-auto mr-auto  mt-0 p-0 place-self-center text-3xl text-pink-500  bg-pink-200 bg-opacity-30 rounded font-black">Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
  );
}