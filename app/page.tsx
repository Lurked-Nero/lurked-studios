'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

// 👇 解決 motion.img src/alt 屬性問題
const MotionImg = motion<HTMLImageElement>("img");

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/LOGO-WhiteMoonV8.png");

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setLogoSrc(prev =>
        prev === "/LOGO-WhiteMoonV8.png"
          ? "/LOGO-YellowMoonV8.png"
          : "/LOGO-WhiteMoonV8.png"
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  const isWhite = logoSrc === "/LOGO-WhiteMoonV8.png";
  const moonTransition = { duration: 1.2, ease: "easeInOut" };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* 彎月 LOGO切換 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={moonTransition}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <MotionImg
          src="/LOGO-WhiteMoonV8.png"
          alt="White Moon"
          className="absolute w-full h-full object-contain"
          animate={{ opacity: isWhite ? 1 : 0 }}
          transition={moonTransition}
        />
        <MotionImg
          src="/LOGO-YellowMoonV8.png"
          alt="Yellow Moon"
          className="absolute w-full h-full object-contain"
          animate={{ opacity: isWhite ? 0 : 1 }}
          transition={moonTransition}
        />
      </motion.div>

      {/* 中央箭頭 LOGO 切換 */}
      <motion.div
        className="flex flex-col items-center text-center"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative w-[80vw] max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <MotionImg
            src="/LOGO-WhiteArrowV7.png"
            alt="White Arrow Logo"
            className="absolute top-0 left-0 w-full h-auto object-contain"
            animate={{ opacity: isWhite ? 1 : 0 }}
            transition={moonTransition}
          />
          <MotionImg
            src="/LOGO-YellowArrowV7.png"
            alt="Yellow Arrow Logo"
            className="absolute top-0 left-0 w-full h-auto object-contain"
            animate={{ opacity: isWhite ? 0 : 1 }}
            transition={moonTransition}
          />
        </motion.div>

        {/* 品牌標語 */}
        <motion.p
          className="mt-6 text-lg md:text-xl tracking-widest font-light"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          What you seek is hidden.
        </motion.p>
      </motion.div>
    </main>
  );
}
