import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 偶数の時にlogを出力したい
    const outputEvenNumber = () => {
      if (count % 2 === 0) {
        console.log(count);
      }
    };
    outputEvenNumber();
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>カウント</button>
    </div>
  );
};

export default Counter;
