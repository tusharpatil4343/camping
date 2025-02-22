import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const ghostRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
    
    gsap.to(textRef.current, {
      y: "10px",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
    });
    
    gsap.to(ghostRef.current, {
      y: "15px",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center" ref={containerRef}>
      <div className="relative">
        <div className="text-9xl font-bold">4<span className="text-blue-500">0</span>4</div>
        <div ref={ghostRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          👻
        </div>
      </div>
      <p className="text-xl mt-4" ref={textRef}>Whoops! Looks like you're lost in the void.</p>
      <p className="text-lg mt-2">The page you are looking for might be removed or is temporarily unavailable.</p>
      <NavLink to="/" className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition shadow-lg text-lg">Return to Home</NavLink>
    </div>
  );
};

export default PageNotFound;
