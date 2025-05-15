'use client';

import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

// ✅ 支援 src 屬性的 motion.img
const MotionImg = motion(
  forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
    (props, ref) => <img ref={ref} {...props} />
  )
);

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
  const breathingAnimation = {
    opacity: [0.4, 1, 0.4],
  };
  const breathingTransition = {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* ✅ 右上角彎月 Logo（呼吸） */}
      <motion.div
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
        animate={breathingAnimation}
        transition={breathingTransition}
      >
        <MotionImg
          src="/LOGO-WhiteMoonV11.png"
          alt="White Moon"
          className="absolute w-full h-full object-contain"
          style={{ opacity: isWhite ? 1 : 0 }}
        />
        <MotionImg
          src="/LOGO-YellowMoonV11.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          style={{ opacity: isWhite ? 0 : 1 }}
        />
      </motion.div>

      {/* 中央箭頭 Logo + 呼吸動畫 + 標語 */}
      <motion.div
        className="flex flex-col items-center text-center mt-32 px-4 gap-6"
        animate={breathingAnimation}
        transition={breathingTransition}
      >
        <div className="w-[80vw] max-w-4xl h-[300px] relative">
          <MotionImg
            src="/LOGO-WhiteArrowV8.svg"
            alt="White Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{ opacity: isWhite ? 1 : 0 }}
          />
          <MotionImg
            src="/LOGO-YellowArrowV8.svg"
            alt="Yellow Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{ opacity: isWhite ? 0 : 1 }}
          />
        </div>

        {/* ✅ 呼吸動畫同步的標語 */}
        <motion.p className="text-sm md:text-lg tracking-widest font-light text-center">
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
