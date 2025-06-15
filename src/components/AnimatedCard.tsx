
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
        animate-fade-in-up
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5
          transition-opacity duration-700
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
      
      {/* Shine effect */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          transform -skew-x-12 transition-transform duration-1000
          ${isHovered ? 'translate-x-full' : '-translate-x-full'}
        `}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Card>
  );
};

export default AnimatedCard;
