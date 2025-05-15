'use client';

import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

// ✅ 正確包裝 motion.img，支援 src、alt 等 HTML 屬性
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

  return (
    <main className="flex flex-col items-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* 右上角彎月 Logo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={moonTransition}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <MotionImg
          src="/LOGO-WhiteMoonV11.png"
          alt="White Moon"
          className="w-full h-full object-contain absolute"
          animate={{ opacity: isWhite ? 1 : 0 }}
          transition={moonTransition}
        />
        <MotionImg
          src="/LOGO-YellowMoonV11.png"
          alt="Yellow Moon"
          className="w-full h-full object-contain absolute"
          animate={{ opacity: isWhite ? 0 : 1 }}
          transition={moonTransition}
        />
      </motion.div>

      {/* 中央箭頭 Logo + 文字 */}
      <motion.div
        className="flex flex-col items-center text-center mt-32 px-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* ✅ 單一箭頭圖顯示，無絕對定位，實際佔位 */}
        <MotionImg
          key={isWhite ? 'white' : 'yellow'}
          src={isWhite ? '/LOGO-WhiteArrowV8.svg' : '/LOGO-YellowArrowV8.svg'}
          alt="Arrow Logo"
          className="w-[80vw] max-w-4xl h-[300px] object-contain transition-opacity duration-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* ✅ 文字穩定貼在圖下方 */}
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
