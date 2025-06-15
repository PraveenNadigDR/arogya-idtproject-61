
import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const EnhancedParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 25));
      
      const colors = [
        'rgba(59, 130, 246, 0.4)',   // Blue
        'rgba(147, 51, 234, 0.4)',   // Purple
        'rgba(16, 185, 129, 0.4)',   // Emerald
        'rgba(236, 72, 153, 0.4)',   // Pink
        'rgba(251, 191, 36, 0.4)',   // Yellow
        'rgba(34, 197, 94, 0.4)',    // Green
        'rgba(239, 68, 68, 0.4)',    // Red
        'rgba(6, 182, 212, 0.4)',    // Cyan
      ];

      for (let i = 0; i < particleCount; i++) {
        const life = Math.random() * 300 + 200;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: life,
          maxLife: life
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticles = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.02)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.01)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Update particle life
        particle.life--;
        
        // Respawn particle if life is over
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.opacity = Math.random() * 0.6 + 0.3;
        }

        // Update position with enhanced physics
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add some turbulence
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        particle.vx = Math.max(-1, Math.min(1, particle.vx));
        particle.vy = Math.max(-1, Math.min(1, particle.vy));

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Enhanced mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.02;
          particle.vy -= Math.sin(angle) * force * 0.02;
          
          // Increase opacity near mouse
          particle.opacity = Math.min(0.9, particle.opacity + force * 0.3);
        } else {
          // Fade back to normal opacity
          particle.opacity = Math.max(0.3, particle.opacity - 0.01);
        }

        // Calculate life-based opacity
        const lifeRatio = particle.life / particle.maxLife;
        const finalOpacity = particle.opacity * lifeRatio;

        // Draw particle with enhanced effects
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color.replace('0.4', finalOpacity.toString()));
        gradient.addColorStop(1, particle.color.replace('0.4', '0'));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add subtle glow effect
        ctx.shadowBlur = particle.size * 2;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('0.4', (finalOpacity * 0.5).toString());
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw enhanced connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.15 * Math.min(lifeRatio, otherParticle.life / otherParticle.maxLife);
            
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
            lineGradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 0.8})`);
            lineGradient.addColorStop(1, `rgba(16, 185, 129, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = opacity * 3;
            ctx.stroke();
          }
        });
      });
    };

    const animate = () => {
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default EnhancedParticleBackground;
