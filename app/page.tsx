'use client';
import { motion, MotionProps } from 'framer-motion';
import React from 'react';

// 利用 React.JSX.IntrinsicElements 取代 JSX.IntrinsicElements
type HTMLMotionProps<T extends keyof React.JSX.IntrinsicElements> = React.JSX.IntrinsicElements[T] & MotionProps;

const MotionH1: React.FC<HTMLMotionProps<'h1'>> = motion.h1;
const MotionH2: React.FC<HTMLMotionProps<'h2'>> = motion.h2;
const MotionP: React.FC<HTMLMotionProps<'p'>> = motion.p;
const MotionDiv: React.FC<HTMLMotionProps<'div'>> = motion.div;

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <MotionH1
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Lurked Studios
        </MotionH1>

        <MotionP
          className="mt-4 text-xl md:text-2xl text-gray-400 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Redefining Modern Streetwear
        </MotionP>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <MotionH2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          About Us
        </MotionH2>

        <MotionP
          className="text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Lurked Studios is a contemporary streetwear label crafting fashion and lifestyle items
          with a refined urban edge. Our philosophy is rooted in minimalism, quality, and the
          rhythm of the streets.
        </MotionP>
      </section>

      {/* Products */}
      <section className="py-24 px-6">
        <MotionH2
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Featured Products
        </MotionH2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <MotionDiv
              key={i}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="h-60 bg-gray-300" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">Product {i + 1}</h3>
                <p className="text-gray-600">$99.00</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-10 text-center text-sm text-gray-500">
        <p>Follow us on Instagram @lurkedstudios</p>
        <p>Contact: hello@lurkedstudios.com</p>
      </footer>
    </main>
  );
}
