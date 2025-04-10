// global.d.ts
import type { MotionProps as OriginalMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}