import React, { useEffect, useRef } from 'react';

const CursorParticles = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, active: false });
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    // Graceful degradations & checks
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    if (prefersReducedMotion || isTouchDevice) {
      return; // Disable on touch devices or if reduced motion is requested
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const maxParticles = 80;

    class Particle {
      constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        // Moderate velocity
        this.vx = dx * 0.2 + (Math.random() - 0.5) * 0.8;
        this.vy = dy * 0.2 + (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2.5 + 1.5;
        this.alpha = 1.0;
        this.decay = Math.random() * 0.015 + 0.01;
        // Accent color gradients matching the signature red theme
        const colors = [
          'rgba(239, 68, 68, ',  // Red-500
          'rgba(220, 38, 38, ',  // Red-600
          'rgba(248, 113, 113, ', // Red-400
          'rgba(252, 165, 165, ', // Red-300
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        // Slower movement as it fades
        this.vx *= 0.98;
        this.vy *= 0.98;
        // Shrink particle
        if (this.size > 0.1) this.size -= 0.02;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        // Add subtle glow shadow to particles
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(220, 38, 38, 0.4)';
        ctx.fill();
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      const mouse = mouseRef.current;
      mouse.active = true;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Calculate speed
      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn particles based on speed
      const count = Math.min(Math.floor(speed / 4) + 1, 6);
      for (let i = 0; i < count; i++) {
        if (particlesRef.current.length < maxParticles) {
          particlesRef.current.push(
            new Particle(
              mouse.x + (Math.random() - 0.5) * 8,
              mouse.y + (Math.random() - 0.5) * 8,
              dx,
              dy
            )
          );
        }
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // 1. Draw cursor glow lighting
      const mouse = mouseRef.current;
      if (mouse.active) {
        ctx.save();
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150
        );
        gradient.addColorStop(0, 'rgba(220, 38, 38, 0.08)');
        gradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] mix-blend-screen"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CursorParticles;
