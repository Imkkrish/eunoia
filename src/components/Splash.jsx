import { useEffect, useState } from "react";

export default function Splash({ onComplete }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // start animation on mount

    const timer = setTimeout(() => {
      setAnimate(false); // start fade out
    }, 1200);

    const endTimer = setTimeout(() => {
      onComplete(); // notify parent after animation finishes
    }, 1600);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${
        animate ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/logo.png"
        alt="Eunoia Logo"
        className={`h-32 transition-transform duration-700 ${
          animate ? "scale-100" : "scale-50"
        }`}
      />
    </div>
  );
}
