import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

const EnhancedParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
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
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.016;
      
      particlesRef.current.forEach((particle, index) => {
        // Update position with wave motion
        particle.x += particle.vx + Math.sin(timeRef.current + particle.pulse) * 0.1;
        particle.y += particle.vy + Math.cos(timeRef.current + particle.pulse) * 0.1;
        
        // Update pulse
        particle.pulse += particle.pulseSpeed;

        // Bounce off edges with padding
        const padding = 50;
        if (particle.x < -padding || particle.x > canvas.width + padding) particle.vx *= -1;
        if (particle.y < -padding || particle.y > canvas.height + padding) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(-padding, Math.min(canvas.width + padding, particle.x));
        particle.y = Math.max(-padding, Math.min(canvas.height + padding, particle.y));

        // Enhanced mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
          
          // Increase size when near mouse
          particle.size = Math.min(6, particle.size + force * 0.5);
        } else {
          // Return to normal size
          particle.size = Math.max(1, particle.size - 0.02);
        }

        // Calculate pulsing opacity
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = pulseOpacity;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size + 2, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace('0.4', '0.1');
        ctx.fill();
        
        // Inner particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();

        // Draw enhanced connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 140) {
            const opacity = (140 - distance) / 140 * 0.15;
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color.replace('0.4', opacity.toString()));
            gradient.addColorStop(1, otherParticle.color.replace('0.4', opacity.toString()));
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
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

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      resizeCanvas();
      createParticles();
      animate();
      
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default EnhancedParticleBackground;
