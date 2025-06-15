
import { ReactNode, useState } from 'react';
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

  const getGlowClass = () => {
    switch (glowColor) {
      case 'purple': return 'hover:shadow-purple-500/20';
      case 'green': return 'hover:shadow-green-500/20';
      case 'pink': return 'hover:shadow-pink-500/20';
      case 'orange': return 'hover:shadow-orange-500/20';
      default: return 'hover:shadow-blue-500/20';
    }
  };

  return (
    <Card 
      className={`
        relative overflow-hidden backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 
        border-0 shadow-xl transition-all duration-700 ring-1 ring-black/5 dark:ring-white/5
        ${hoverScale ? 'hover:scale-[1.02]' : ''} 
        hover:shadow-3xl ${getGlowClass()}
        animate-fade-in-up hover:animate-pulse-ring
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced animated background gradient with wave effect */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5
          transition-all duration-1000 animate-wave
          ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
        `}
      />
      
      {/* Enhanced shine effect with better timing */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
          transform -skew-x-12 transition-transform duration-1500
          ${isHovered ? 'translate-x-full animate-shimmer' : '-translate-x-full'}
        `}
      />

      {/* New: Floating particles effect on hover */}
      <div 
        className={`
          absolute inset-0 transition-opacity duration-700
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full
              animate-float-delayed
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 200 + delay}ms`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* New: Border glow effect */}
      <div 
        className={`
          absolute inset-0 rounded-inherit transition-all duration-1000
          ${isHovered ? 'shadow-glow animate-glow' : ''}
        `}
      />
      
      {/* Content with enhanced z-index */}
      <div className="relative z-20">
        {children}
      </div>
    </Card>
  );
};

export default AnimatedCard;
