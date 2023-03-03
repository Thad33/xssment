import React, { useState } from 'react';

function NumberSum() {
  const [sum, setSum] = useState(0);

  const handleButtonClick = () => {
    const input = window.prompt("Enter numbers separated by commas:");
    const numbers = input.split(",").map(Number);
    const newSum = numbers.reduce((acc, cur) => acc + cur, 0);
    setSum(newSum);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Enter numbers and calculate sum</button>
      <p>The sum of the numbers is: {sum}</p>
    </div>
  );
}

export default NumberSum;
