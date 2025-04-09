'use client';
import { motion } from 'framer-motion';

const MotionH1 = motion<HTMLHeadingElement>('h1');
const MotionH2 = motion<HTMLHeadingElement>('h2');
const MotionP = motion<HTMLParagraphElement>('p');
const MotionDiv = motion<HTMLDivElement>('div');

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          <span>Lurked Studios</span>
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-gray-400"
        >
          <span>Redefining Modern Streetwear</span>
        </MotionP>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4"
        >
          <span>About Us</span>
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400"
        >
          <span>
            Lurked Studios is a contemporary streetwear label crafting fashion and lifestyle items
            with a refined urban edge. Our philosophy is rooted in minimalism, quality, and the
            rhythm of the streets.
          </span>
        </MotionP>
      </section>

      <section className="py-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          <span>Featured Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-60 bg-gray-300" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Product {i + 1}</h3>
                <p className="text-gray-600 mt-1">$99.00</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      <footer className="bg-black border-t border-gray-700 py-10 text-center text-sm text-gray-500">
        <p>
          <span>Follow us on Instagram @lurkedstudios</span>
        </p>
        <p>
          <span>Contact: hello@lurkedstudios.com</span>
        </p>
      </footer>
    </main>
  );
}
