import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Star properties
    const stars = [];
    const numStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 0.8,
        opacity: Math.random() * 0.7 + 0.3,
        glowSize: Math.random() * 12 + 6,
        twinkle: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let animationId;

    const animate = () => {
      // Clear canvas with cosmic background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      bgGradient.addColorStop(0, "#0a0a2e");
      bgGradient.addColorStop(0.2, "#16213e");
      bgGradient.addColorStop(0.5, "#0f3460");
      bgGradient.addColorStop(0.8, "#0e4b99");
      bgGradient.addColorStop(1, "#020617");

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars and connections
      stars.forEach((star, index) => {
        // Update star position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < -20) star.x = canvas.width + 20;
        if (star.x > canvas.width + 20) star.x = -20;
        if (star.y < -20) star.y = canvas.height + 20;
        if (star.y > canvas.height + 20) star.y = -20;

        // Update twinkle
        star.twinkle += star.pulseSpeed;
        const twinkleEffect = Math.sin(star.twinkle) * 0.4 + 0.6;
        const currentOpacity = star.opacity * twinkleEffect;

        // Draw star glow
        const outerGlow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.glowSize
        );
        outerGlow.addColorStop(0, `rgba(0, 217, 255, ${currentOpacity * 0.9})`);
        outerGlow.addColorStop(
          0.2,
          `rgba(34, 171, 250, ${currentOpacity * 0.6})`
        );
        outerGlow.addColorStop(
          0.5,
          `rgba(56, 135, 190, ${currentOpacity * 0.3})`
        );
        outerGlow.addColorStop(1, "rgba(0, 217, 255, 0)");

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.glowSize, 0, Math.PI * 2);
        ctx.fillStyle = outerGlow;
        ctx.fill();

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(
          currentOpacity * 1.2,
          1
        )})`;
        ctx.fill();

        // Draw connections to nearby stars
        stars.slice(index + 1).forEach((otherStar) => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180 && distance > 60) {
            const connectionStrength = 1 - (distance - 60) / (180 - 60);
            const connectionOpacity = connectionStrength * 0.4 * currentOpacity;

            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${connectionOpacity})`;
            ctx.lineWidth = connectionStrength * 1.2;
            ctx.stroke();

            // Draw glow on connection
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${connectionOpacity * 0.2})`;
            ctx.lineWidth = connectionStrength * 4;
            ctx.stroke();

            // Random data particles
            if (connectionStrength > 0.7 && Math.random() > 0.98) {
              const progress = Math.random();
              const particleX = star.x + (otherStar.x - star.x) * progress;
              const particleY = star.y + (otherStar.y - star.y) * progress;

              ctx.beginPath();
              ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${connectionOpacity * 2})`;
              ctx.fill();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
};

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(
    ellipse at center,
    #0a0a2e 0%,
    #16213e 30%,
    #0f3460 60%,
    #0e4b99 100%
  );
`;

export default AnimatedBackground;
