import React from "react";
import { useState, useEffect } from "react";
import "./AnimatingText.css";

const AnimatingText = () => {
  const text = [
    "Market Research Is Tedious?",
    "Can't Spend Time & Effort?",
    "It Feels Complicated?",
  ];

  const [count, setCount] = useState(() => 0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      increaseCount();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (count > 2) {
    setCount(() => 0);
  }

  return (
    <span className="morphing">
      <span id="">{text[count]}</span>
      {/* <button onClick={increaseCount}>add</button> */}
    </span>
  );
};

export default AnimatingText;
