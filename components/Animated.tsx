'use client';

import React from 'react';

type AnimatedProps = React.ComponentPropsWithoutRef<'div'> & {
  children?: React.ReactNode;
};

export default function Animated({
  children,
  className,
  ...props
}: AnimatedProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}