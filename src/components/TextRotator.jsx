import { useEffect, useState } from "react";

export default function TextRotator({
  words = [],
  interval = 2500,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  if (words.length === 0) return null;

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${className}`}>
      <span
        key={index}
        className="inline-block animate-fade-slide"
      >
        {words[index]}
      </span>
    </span>
  );
}
