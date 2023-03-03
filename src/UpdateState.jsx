import React, { useState, useEffect } from 'react';

function UpdateState() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Time elapsed: {time} seconds</p>
    </div>
  );
}

export default UpdateState;
