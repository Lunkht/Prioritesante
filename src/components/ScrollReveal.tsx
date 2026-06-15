import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = 'animate-slideInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={`${isRevealed ? animation : 'opacity-0'} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
