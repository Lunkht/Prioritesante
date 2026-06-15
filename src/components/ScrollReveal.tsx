import { type ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className,
  animation = 'slideInUp',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && `animate-${animation}`,
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}
