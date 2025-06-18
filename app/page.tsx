'use client';

import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

// ✅ 支援 <img> 的 motion 包裝
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
    <main className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* ✅ 右上彎月：初始浮現 + 呼吸 + 切換 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <MotionImg
          src="/LOGO-WhiteMoonV16.png"
          alt="White Moon"
          className="absolute w-full h-full object-contain"
          animate={isWhite ? breathing : staticHide}
          transition={breathTransition}
        />
        <MotionImg
          src="/LOGO-YellowMoonV16.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          animate={!isWhite ? breathing : staticHide}
          transition={breathTransition}
        />
      </motion.div>

      {/* ✅ 中央箭頭區：切換 + 呼吸 + 響應式尺寸 */}
      <motion.div className="flex flex-col items-center text-center px-4 gap-6 translate-y-[-20%] md:translate-y-[-25%] lg:translate-y-[-30%]">
        <div className="w-[80vw] max-w-2xl h-[180px] md:h-[240px] lg:h-[300px] xl:h-[360px] relative">
          <MotionImg
            src="/LOGO-WhiteArrowV9.svg"
            alt="White Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            animate={isWhite ? breathing : staticHide}
            transition={breathTransition}
          />
          <MotionImg
            src="/LOGO-YellowArrowV9.svg"
            alt="Yellow Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            animate={!isWhite ? breathing : staticHide}
            transition={breathTransition}
          />
        </div>

        {/* ✅ 同步呼吸的標語 */}
        <motion.p
          className="text-sm md:text-lg tracking-widest font-light text-center"
          animate={breathing}
          transition={{ ...breathTransition, delay: 0.5 }}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
