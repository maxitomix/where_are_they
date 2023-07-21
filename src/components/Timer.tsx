import  { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval); // This is called when the component unmounts
  }, []);

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return <div>Time: {minutes}:{displaySeconds < 10 ? '0' : ''}{displaySeconds}</div>;
}
