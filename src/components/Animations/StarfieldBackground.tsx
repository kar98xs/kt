import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinklePhase: number;
}

export const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const starCount = 150;
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
      
      starsRef.current = stars;
    };

    const drawStar = (x: number, y: number, size: number, opacity: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
      gradient.addColorStop(0, `rgba(0, 217, 255, ${opacity})`);
      gradient.addColorStop(0.3, `rgba(0, 217, 255, ${opacity * 0.6})`);
      gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Sparkle effect
      if (size > 2) {
        const sparkleSize = size * 0.3;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
        
        // Vertical line
        ctx.fillRect(x - sparkleSize / 4, y - sparkleSize * 2, sparkleSize / 2, sparkleSize * 4);
        // Horizontal line  
        ctx.fillRect(x - sparkleSize * 2, y - sparkleSize / 4, sparkleSize * 4, sparkleSize / 2);
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.001;
      
      starsRef.current.forEach(star => {
        // Twinkling effect
        const twinkle = Math.sin(time * 2 + star.twinklePhase) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;
        
        drawStar(star.x, star.y, star.size, currentOpacity);
      });
    };

    const updateStars = () => {
      starsRef.current.forEach(star => {
        star.y += star.speed;
        star.twinklePhase += 0.02;
        
        // Reset star position when it goes off screen
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      updateStars();
      drawStars();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      
      // Add mouse interaction - stars move slightly away from cursor
      starsRef.current.forEach(star => {
        const dx = star.x - mouseX;
        const dy = star.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100 * 0.5;
          star.x += (dx / distance) * force;
          star.y += (dy / distance) * force;
          
          // Keep stars within bounds
          star.x = Math.max(0, Math.min(canvas.width, star.x));
          star.y = Math.max(0, Math.min(canvas.height, star.y));
        }
      });
    };

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;
