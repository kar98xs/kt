import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { ScrollContainer, ScrollButton, ProgressRing, ProgressCircle } from './styles';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    
    ticking.current = true;
    
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Only update if scroll position changed significantly
      if (Math.abs(scrollTop - lastScrollY.current) > 10) {
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
        
        setScrollProgress(scrollPercent);
        
        if (scrollTop > 300) {
          if (!isVisible && !hasAnimated) {
            setHasAnimated(true);
          }
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        lastScrollY.current = scrollTop;
      }
      
      ticking.current = false;
    });
  }, [isVisible, hasAnimated]);

  useEffect(() => {
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollContainer visible={isVisible}>
      <ScrollButton
        onClick={scrollToTop}
        className={hasAnimated && isVisible ? 'animate-pulse' : ''}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ProgressRing>
          <ProgressCircle
            cx="30"
            cy="30"
            r="27"
            progress={scrollProgress}
          />
        </ProgressRing>
        <FiArrowUp />
      </ScrollButton>
    </ScrollContainer>
  );
};
