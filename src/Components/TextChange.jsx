import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Vedangi Barve",
    "Frontend Developer",
    "Aspiring Project Manager",
    "Bridging Tech and Business",
    "Building Products, Not Just Features",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
      }

      // When typing is complete
      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 1000); // pause
      }

      // When deleting is complete
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  // Highlight "Vedangi"
  const renderText = (text) => {
    const fullName = "Vedangi Barve";

    if (text.includes(fullName)) {
      const parts = text.split(fullName);
      return (
        <>
          {parts[0]}
          <span className="text-sky-400">{fullName}</span>
          {parts[1]}
        </>
      );
    }

    return text;
  };

  return (
    <span className="inline-block">
      {renderText(displayText)}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

export default TextChange;
