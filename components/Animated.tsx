'use client';

import React from 'react';
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from 'framer-motion';

type AnimatedProps = HTMLMotionProps<'div'> & {
  children?: React.ReactNode;
  delay?: number;
  preset?: 'fadeUp' | 'none';
};

const createFadeUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export default function Animated({
  children,
  delay = 0,
  preset = 'fadeUp',
  className,
  ...props
}: AnimatedProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants =
    prefersReducedMotion || preset === 'none'
      ? undefined
      : createFadeUp(delay);

  return (
    <motion.div
      initial={variants ? 'hidden' : false}
      whileInView={variants ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}