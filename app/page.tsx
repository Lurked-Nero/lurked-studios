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
  const [logoSrc, setLogoSrc] = useState("/LOGO-WhiteMoonV12.png"); // ✅ 保證初始 isWhite 成立

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setLogoSrc(prev =>
        prev === "/LOGO-WhiteMoonV12.png"
          ? "/LOGO-YellowMoonV10.png"
          : "/LOGO-WhiteMoonV12.png"
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const isWhite = logoSrc === "/LOGO-WhiteMoonV12.png";
  const moonTransition = { duration: 1.2, ease: "easeInOut" };

  if (!isMounted) return null;

  return (
    <main className="flex flex-col justify-between items-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* 右上角彎月 Logo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={moonTransition}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <MotionImg
          src="/LOGO-WhiteMoonV12.png"
          alt="White Moon"
          className="absolute w-full h-full object-contain"
          animate={{ opacity: isWhite ? 1 : 0 }}
          transition={moonTransition}
        />
        <MotionImg
          src="/LOGO-YellowMoonV10.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          animate={{ opacity: isWhite ? 0 : 1 }}
          transition={moonTransition}
        />
      </motion.div>

      {/* 中央箭頭 Logo（純粹改尺寸，無多餘初始設定） */}
      <motion.div
        className="flex flex-col items-center text-center"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative w-full max-w-md md:max-w-4xl h-[200px] md:h-[300px] flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <MotionImg
            src="/LOGO-WhiteArrowV8.svg"
            alt="White Arrow Logo"
            className="absolute top-0 left-0 w-full h-full object-contain"
            animate={{ opacity: isWhite ? 1 : 0 }}
            transition={moonTransition}
          />
          <MotionImg
            src="/LOGO-YellowArrowV8.svg"
            alt="Yellow Arrow Logo"
            className="absolute top-0 left-0 w-full h-full object-contain"
            animate={{ opacity: isWhite ? 0 : 1 }}
            transition={moonTransition}
          />
        </motion.div>
      </motion.div>

      {/* 底部標語 */}
      <motion.p
        className="mb-8 text-lg md:text-xl tracking-widest font-light text-center"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        What you seek is hidden.
      </motion.p>
    </main>
  );
}
