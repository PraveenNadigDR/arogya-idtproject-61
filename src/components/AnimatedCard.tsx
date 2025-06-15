
import { ReactNode, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
  glowColor?: string;
}

const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0, 
  hoverScale = true,
  glowColor = "blue"
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const getGlowClass = () => {
    switch (glowColor) {
      case 'purple': return 'hover:shadow-purple-500/25';
      case 'green': return 'hover:shadow-green-500/25';
      case 'pink': return 'hover:shadow-pink-500/25';
      case 'orange': return 'hover:shadow-orange-500/25';
      default: return 'hover:shadow-blue-500/25';
    }
  };

  const getGlowRing = () => {
    switch (glowColor) {
      case 'purple': return 'from-purple-400/20 to-pink-400/20';
      case 'green': return 'from-green-400/20 to-emerald-400/20';
      case 'pink': return 'from-pink-400/20 to-rose-400/20';
      case 'orange': return 'from-orange-400/20 to-red-400/20';
      default: return 'from-blue-400/20 to-cyan-400/20';
    }
  };

  return (
    <Card 
      className={`
        relative overflow-hidden backdrop-blur-2xl bg-white/85 dark:bg-gray-900/85 
        border-0 shadow-2xl transition-all duration-700 ring-1 ring-black/5 dark:ring-white/10
        ${hoverScale ? 'hover:scale-[1.03]' : ''} 
        hover:shadow-3xl ${getGlowClass()}
        ${!prefersReducedMotion ? 'animate-fade-in-up hover:animate-pulse-ring' : ''}
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced animated background with multiple layers */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5
          transition-all duration-1000 ${!prefersReducedMotion ? 'animate-wave' : ''}
          ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
        `}
      />
      
      {/* Enhanced shine effect with better performance */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
          transform -skew-x-12 transition-transform duration-1200
          ${isHovered && !prefersReducedMotion ? 'translate-x-full animate-shimmer' : '-translate-x-full'}
        `}
      />

      {/* New: Enhanced floating particles with better distribution */}
      {isHovered && !prefersReducedMotion && (
        <div className="absolute inset-0 transition-opacity duration-700 opacity-100">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1.5 h-1.5 bg-gradient-to-r ${getGlowRing()} rounded-full
                animate-float-delayed opacity-70
              `}
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 150 + delay}ms`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced border glow with pulsing effect */}
      <div 
        className={`
          absolute inset-0 rounded-inherit transition-all duration-1000
          ${isHovered && !prefersReducedMotion ? `shadow-glow animate-glow bg-gradient-to-r ${getGlowRing()} opacity-20` : ''}
        `}
      />

      {/* New: Corner highlights */}
      {isHovered && !prefersReducedMotion && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-tl-inherit"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-white/30 to-transparent rounded-br-inherit"></div>
        </>
      )}
      
      {/* Content with enhanced positioning */}
      <div className="relative z-20">
        {children}
      </div>
    </Card>
  );
};

export default AnimatedCard;
