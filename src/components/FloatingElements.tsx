
import { useEffect, useState } from 'react';
import { Heart, Sparkles, Star, Zap } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    icon: React.ElementType;
    color: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    const icons = [Heart, Sparkles, Star, Zap];
    const colors = [
      'text-blue-400/30',
      'text-purple-400/30',
      'text-pink-400/30',
      'text-green-400/30',
      'text-yellow-400/30'
    ];

    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: i * 2
    }));

    setElements(newElements);
  }, []);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((element) => {
        const Icon = element.icon;
        return (
          <div
            key={element.id}
            className={`absolute animate-float-delayed ${element.color}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <Icon className="w-6 h-6 drop-shadow-lg" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
