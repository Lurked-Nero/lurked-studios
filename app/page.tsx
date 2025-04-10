'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { forwardRef, HTMLAttributes } from 'react';
import type { MotionProps } from 'framer-motion';

// 正確型別：支援 className 的 motion 元件
const MotionDiv = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & MotionProps>(
  (props, ref) => <motion.div ref={ref} {...props} />
);
MotionDiv.displayName = 'MotionDiv';

const MotionP = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement> & MotionProps>(
  (props, ref) => <motion.p ref={ref} {...props} />
);
MotionP.displayName = 'MotionP';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <MotionDiv
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
        >
          <Image
            src="/LOGO-WhiteArrow.png"
            alt="Lurked Studios Logo"
            width={400}
            height={120}
            className="mx-auto"
            priority
          />
        </MotionDiv>

        <MotionP
          className="mt-6 text-xl md:text-2xl text-gray-400 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Redefining Modern Streetwear
        </MotionP>
      </section>
    </main>
  );
}
