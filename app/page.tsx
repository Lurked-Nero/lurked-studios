'use client';

import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

const MotionImg = motion(
  forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
    (props, ref) => <img ref={ref} {...props} />
  )
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/LOGO-WhiteMoonV11.png");

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setLogoSrc(prev =>
        prev === "/LOGO-WhiteMoonV11.png"
          ? "/LOGO-YellowMoonV11.png"
          : "/LOGO-WhiteMoonV11.png"
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const isWhite = logoSrc === "/LOGO-WhiteMoonV11.png";
  const moonTransition = { duration: 1.2, ease: "easeInOut" };

  if (!isMounted) return null;

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
          className="absolute w-full h-full object-contain"
          animate={{ opacity: isWhite ? 1 : 0 }}
          transition={moonTransition}
        />
        <MotionImg
          src="/LOGO-YellowMoonV11.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          animate={{ opacity: isWhite ? 0 : 1 }}
          transition={moonTransition}
        />
      </motion.div>

      {/* 中央箭頭 Logo + 標語 */}
      <motion.div
        className="flex flex-col items-center text-center mt-32 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* ⛔ 原本 scale 放大但容器沒撐起來，會讓文字被擠進去 */}
        {/* ✅ 改為固定高度 + padding-bottom 補償 scale 擴張高度 */}
        <div className="w-[80vw] max-w-4xl relative pb-[120px]">
          {/* 白圖 */}
          <MotionImg
            src="/LOGO-WhiteArrowV8.svg"
            alt="White Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain scale-100 md:scale-[3] origin-center"
            animate={{ opacity: isWhite ? 1 : 0 }}
            transition={moonTransition}
          />
          {/* 黃圖 */}
          <MotionImg
            src="/LOGO-YellowArrowV8.svg"
            alt="Yellow Arrow"
            className="absolute top-0 left-0 w-full h-full object-contain scale-100 md:scale-[3] origin-center"
            animate={{ opacity: isWhite ? 0 : 1 }}
            transition={moonTransition}
          />
        </div>

        {/* ✅ 這時候才會在圖下方一點點，不會「在圖裡」 */}
        <motion.p
          className="mt-4 text-sm md:text-lg tracking-widest font-light text-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
