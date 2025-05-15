'use client';

import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

// ✅ 支援 <img> 的 motion 元件
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

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* ✅ 右上角彎月 Logo：初始浮現 + 呼吸動畫 */}
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
          style={{ opacity: isWhite ? 1 : 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <MotionImg
          src="/LOGO-YellowMoonV11.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          style={{ opacity: isWhite ? 0 : 1 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ✅ 中央箭頭 + 呼吸動畫 + 標語 */}
      <motion.div
        className="flex flex-col items-center text-center mt-32 px-4 gap-6"
      >
        <div className="w-[80vw] max-w-4xl h-[300px] relative">
          <MotionImg
            src="/LOGO-WhiteArrowV8.svg"
            alt="White Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{ opacity: isWhite ? 1 : 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <MotionImg
            src="/LOGO-YellowArrowV8.svg"
            alt="Yellow Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{ opacity: isWhite ? 0 : 1 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* ✅ 同步呼吸動畫的標語 */}
        <motion.p
          className="text-sm md:text-lg tracking-widest font-light text-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
