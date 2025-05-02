'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// ✅ 正確定義 MotionImg
const MotionImg = motion<HTMLImageElement>('img');

export default function Home() {
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsWhite(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48">
      <MotionImg
        src="/LOGO-WhiteMoonV8.png"
        alt="white"
        className="absolute w-full h-full object-contain"
        animate={{ opacity: isWhite ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
      <MotionImg
        src="/LOGO-YellowMoonV8.png"
        alt="yellow"
        className="absolute w-full h-full object-contain"
        animate={{ opacity: isWhite ? 0 : 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
