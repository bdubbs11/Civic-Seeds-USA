import { useEffect, useState } from "react";

export default function TextRotator({
  words = [],
  interval = 2500,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const longestWord = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    "",
  );

  useEffect(() => {
    if (words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  if (words.length === 0) return null;

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      <span className="invisible whitespace-nowrap">{longestWord}</span>
      <span
        key={index}
        className="absolute left-0 top-0 inline-block animate-fade-slide whitespace-nowrap"
      >
        {words[index]}
      </span>
    </span>
  );
}
