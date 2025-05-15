'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setIsWhite(prev => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  const moonTransition = { duration: 1.2, ease: 'easeInOut' };

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* 右上角彎月 Logo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={moonTransition}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <motion.img
          src="/LOGO-WhiteMoonV11.png"
          alt="White Moon"
          className="w-full h-full object-contain absolute"
          animate={{ opacity: isWhite ? 1 : 0 }}
          transition={moonTransition}
        />
        <motion.img
          src="/LOGO-YellowMoonV11.png"
          alt="Yellow Moon"
          className="w-full h-full object-contain absolute"
          animate={{ opacity: isWhite ? 0 : 1 }}
          transition={moonTransition}
        />
      </motion.div>

      {/* 中央箭頭 + 標語 */}
      <motion.div
        className="flex flex-col items-center text-center mt-32 px-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* ⛔ 不用 absolute，不用 scale */}
        {/* ✅ 兩張圖交錯顯示 + 真實佔位 */}
        <div className="w-[80vw] max-w-4xl h-[300px] relative">
          <motion.img
            src="/LOGO-WhiteArrowV8.svg"
            alt="White Arrow"
            className="w-full h-full object-contain transition-opacity duration-700"
            animate={{ opacity: isWhite ? 1 : 0 }}
          />
          <motion.img
            src="/LOGO-YellowArrowV8.svg"
            alt="Yellow Arrow"
            className="w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-700"
            animate={{ opacity: isWhite ? 0 : 1 }}
          />
        </div>

        {/* ✅ 貼圖下方穩定顯示文字 */}
        <motion.p
          className="text-sm md:text-lg tracking-widest font-light text-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
