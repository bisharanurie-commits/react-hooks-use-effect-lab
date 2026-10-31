import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // PUT THE useEffect CODE HERE
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining === 1) {
        onAnswered(false);
      } else {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;