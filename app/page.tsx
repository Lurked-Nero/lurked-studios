'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);

    // 自動播放音樂（部分瀏覽器需用戶互動才能自動播放）
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5; // 設定音量（可調整）
        audioRef.current.play().catch((e) => {
          console.warn("Autoplay prevented:", e);
        });
      }
    };

    // 嘗試播放（有些瀏覽器會攔截自動播放）
    playAudio();

    // 可選：點擊任何地方播放（應對瀏覽器限制）
    const onUserInteraction = () => {
      playAudio();
      window.removeEventListener("click", onUserInteraction);
    };
    window.addEventListener("click", onUserInteraction);

    return () => {
      window.removeEventListener("click", onUserInteraction);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* 音樂播放器（隱藏） */}
      <audio ref={audioRef} src="/cinematic-bgm.mp3" loop hidden />

      {/* 彎月品牌象徵動畫 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32"
      >
        <img
          src="/LOGO-WhiteMoonV3.png"
          alt="Lurked Symbol"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* LOGO + 標語區塊 */}
      <motion.div
        className="flex flex-col items-center text-center"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* LOGO 圖 */}
        <motion.div
          className="w-[80vw] max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="/LOGO-WhiteArrowV1.png"
            alt="Lurked Studios Logo"
            className="w-full h-auto object-contain"
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
