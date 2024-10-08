"use client";

import { useEffect } from 'react';
import FlyIn from "../components/FlyAnimation";
import Terminal from "../components/Terminal";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen p-2 pt-20 flex flex-col justify-center h-screen min-w-lg mx-auto max-w-7xl mb-4">
      <h1 className="font-bold mb-6">
        wyclifflumumba:$ <span className="text-gray-500">
          <Typewriter
            words={['welcome to my portfolio!']}
            cursor
            cursorBlinking={false}
            typeSpeed={100}
            delaySpeed={2000}
          />
        </span>
      </h1>

      <FlyIn delay={4}>
        <Terminal />
      </FlyIn>
    </div>
  );
}