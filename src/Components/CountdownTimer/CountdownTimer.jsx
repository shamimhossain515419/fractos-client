'use client'
import { useState, useEffect } from 'react';

function CountdownTimer({time}) {
  

  const [countdown, setCountdown] = useState(time); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div>
      <div>   Lost Time :  {formattedTime}  minutes</div>
    </div>
  );
}

export default CountdownTimer;
