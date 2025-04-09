'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes, forwardRef } from 'react';

// ✅ 正確型別定義
const MotionDiv = motion(
  forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Div(
    props,
    ref
  ) {
    return <div ref={ref} {...props} />;
  })
);

const MotionH2 = motion(
  forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function H2(
    props,
    ref
  ) {
    return <h2 ref={ref} {...props} />;
  })
);

const MotionP = motion(
  forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function P(
    props,
    ref
  ) {
    return <p ref={ref} {...props} />;
  })
);

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Lurked Studios
          </h1>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-xl">
            Redefining Modern Streetwear
          </p>
        </MotionDiv>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl font-semibold mb-6"
        >
          About Us
        </MotionH2>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-400 leading-relaxed"
        >
          Lurked Studios is a contemporary streetwear label crafting fashion and lifestyle items
          with a refined urban edge. Our philosophy is rooted in minimalism, quality, and the
          rhythm of the streets.
        </MotionP>
      </section>

      {/* Products */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-lg"
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
