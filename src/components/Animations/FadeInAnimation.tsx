import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FadeInAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  threshold = 0.2,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified variants for better performance
  const getInitialVariant = () => {
    if (shouldReduceMotion || isMobile) {
      return { opacity: 0 }; // Minimal animation for reduced motion or mobile
    }

    switch (direction) {
      case 'up':
        return { opacity: 0, transform: 'translateY(30px)' };
      case 'down':
        return { opacity: 0, transform: 'translateY(-30px)' };
      case 'left':
        return { opacity: 0, transform: 'translateX(30px)' };
      case 'right':
        return { opacity: 0, transform: 'translateX(-30px)' };
      default:
        return { opacity: 0, transform: 'translateY(30px)' };
    }
  };

  const getAnimateVariant = () => {
    return {
      opacity: 1,
      transform: 'translateY(0px) translateX(0px)',
    };
  };

  // Optimized transition for mobile
  const getTransition = () => {
    if (shouldReduceMotion) {
      return { duration: 0.01 };
    }
    
    if (isMobile) {
      return {
        duration: duration * 0.7, // Faster on mobile
        delay: delay * 0.5, // Reduce delay on mobile
        ease: [0.25, 0.46, 0.45, 0.94],
      };
    }

    return {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    };
  };

  return (
    <motion.div
      className={className}
      initial={getInitialVariant()}
      whileInView={getAnimateVariant()}
      transition={getTransition()}
      viewport={{ 
        once: true,
        amount: isMobile ? 0.1 : threshold, // Lower threshold on mobile
        margin: isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px"
      }}
      style={{
        // Performance optimizations
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
