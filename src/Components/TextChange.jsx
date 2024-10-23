import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Vedangi", "Hi, I'm Vedangi", "Hi, I'm Vedangi"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Loop through texts
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  // Function to color 'Vedangi' while being typed
  const renderText = (text) => {
    const vedangiStart = text.indexOf("Vedangi");

    if (vedangiStart !== -1) {
      const beforeVedangi = text.substring(0, vedangiStart);
      const vedangi = text.substring(vedangiStart, vedangiStart + 7); // length of 'Vedangi' is 7 characters
      const afterVedangi = text.substring(vedangiStart + 7);

      return (
        <>
          {beforeVedangi}
          <span className="text-cyan-800">{vedangi}</span> {/* Change color here */}
          {afterVedangi}
        </>
      );
    }

    return text; // return the text if 'Vedangi' isn't found
  };

  return (
    <div className="transition ease duration-300">{renderText(currentText)}</div>
  );
};

export default TextChange;
