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

      {/* 中央箭頭 + 正確貼底標語 */}
      <motion.div
        className="flex flex-col items-center text-center mt-32 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* 箭頭圖容器 */}
        <div className="relative w-[80vw] max-w-4xl h-[300px]">
          {/* 不再用 absolute！用自然排列 */}
          <MotionImg
            src={isWhite ? "/LOGO-WhiteArrowV8.svg" : "/LOGO-YellowArrowV8.svg"}
            alt="Arrow Logo"
            className="w-full h-full object-contain scale-100 md:scale-[3] origin-center transition-opacity duration-700"
            key={logoSrc}
          />
        </div>

        {/* ✅ 現在這段才會確實貼在圖片下方 */}
        <motion.p
          className="mt-4 text-sm md:text-lg tracking-widest font-light"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
