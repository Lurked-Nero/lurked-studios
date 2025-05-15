'use client';

import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

// motion img 包裝
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

  const breathing = {
    opacity: [0.4, 1, 0.4],
  };
  const breathTransition = {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  };

  const staticHide = {
    opacity: 0,
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* ✅ 右上彎月：一開始浮現，切換 + 呼吸 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <MotionImg
          src="/LOGO-WhiteMoonV11.png"
          alt="White Moon"
          className="absolute w-full h-full object-contain"
          animate={isWhite ? breathing : staticHide}
          transition={breathTransition}
        />
        <MotionImg
          src="/LOGO-YellowMoonV11.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          animate={!isWhite ? breathing : staticHide}
          transition={breathTransition}
        />
      </motion.div>

      {/* ✅ 中央箭頭切換 + 呼吸 */}
      <motion.div className="flex flex-col items-center text-center mt-32 px-4 gap-6">
        <div className="w-[80vw] max-w-4xl h-[300px] relative">
          <MotionImg
            src="/LOGO-WhiteArrowV8.svg"
            alt="White Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            animate={isWhite ? breathing : staticHide}
            transition={breathTransition}
          />
          <MotionImg
            src="/LOGO-YellowArrowV8.svg"
            alt="Yellow Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            animate={!isWhite ? breathing : staticHide}
            transition={breathTransition}
          />
        </div>

        {/* ✅ 標語也呼吸 */}
        <motion.p
          className="text-sm md:text-lg tracking-widest font-light text-center"
          animate={breathing}
          transition={breathTransition}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
