
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Moon, Sun, Leaf, Flower2, TreePine, Sparkles, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="nature-glass sticky top-0 z-50 transition-all duration-700 hover:shadow-xl nature-shadow border-b-2 border-green-200/30 dark:border-green-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Nature Logo Section */}
          <div className="flex items-center gap-5">
            <div className="relative group">
              {/* Main logo container with enhanced nature design */}
              <div className="relative w-14 h-14 nature-gradient-forest organic-border-alt flex items-center justify-center nature-shadow-glow transition-all duration-700 group-hover:scale-110 overflow-hidden nature-breathe">
                {/* Organic background patterns */}
                <div className="absolute inset-0 nature-gradient-primary opacity-90 organic-border-alt"></div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-yellow-400/30 to-transparent flower-shape"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 bg-gradient-to-tr from-blue-400/20 to-transparent wave-border"></div>
                
                {/* Central wellness heart with enhanced design */}
                <div className="relative z-10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300 gentle-sway" fill="currentColor" />
                  {/* Enhanced medical cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-0.5 bg-white/60 organic-border"></div>
                    <div className="absolute w-0.5 h-3 bg-white/60 organic-border"></div>
                  </div>
                </div>
                
                {/* Enhanced glow effects */}
                <div className="absolute inset-1 bg-white/15 organic-border-alt blur-sm group-hover:bg-white/20 transition-all duration-700"></div>
              </div>
              
              {/* Enhanced nature status indicators */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 flower-shape flex items-center justify-center nature-shadow-soft group-hover:scale-110 transition-transform duration-300 flower-bloom">
                <Sparkles className="h-2 w-2 text-white" />
              </div>
              
              <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 bg-gradient-to-r from-green-400 to-emerald-500 leaf-shape flex items-center justify-center nature-shadow-soft leaf-fall">
                <Leaf className="h-1.5 w-1.5 text-white" />
              </div>
              
              {/* Enhanced rotating nature ring */}
              <div className="absolute inset-0 w-14 h-14 border-2 border-gradient-to-r from-transparent via-green-400/40 to-transparent organic-border-alt animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-3xl font-black bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 dark:from-green-200 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent transition-all duration-500 tracking-tight relative gentle-sway">
                Arogya
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/15 to-transparent animate-shimmer"></div>
              </h1>
              <p className="text-xs text-green-600 dark:text-green-400 font-semibold tracking-wider uppercase transition-colors duration-300 opacity-80 flex items-center gap-1.5">
                <TreePine className="h-2.5 w-2.5 gentle-sway" />
                Nature Wellness Platform
                <Zap className="h-2.5 w-2.5 animate-pulse" />
              </p>
            </div>
          </div>

          {/* Enhanced User Section */}
          <div className="flex items-center gap-5">
            {/* Enhanced User Info Card */}
            <div className="hidden md:flex items-center gap-4 text-sm text-green-700 dark:text-green-300 nature-glass organic-border px-6 py-3 border border-green-200/40 dark:border-green-600/40 nature-shadow transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 group leaf-texture">
              <div className="relative">
                <div className="w-9 h-9 nature-gradient-secondary leaf-shape flex items-center justify-center nature-shadow-soft group-hover:shadow-emerald-500/40 transition-all duration-500">
                  <UserIcon className="h-4 w-4 text-white drop-shadow-sm" />
                  <div className="absolute inset-1 bg-white/20 leaf-shape"></div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-400 flower-shape border border-white dark:border-green-800 nature-shadow-soft flower-bloom"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-semibold text-green-800 dark:text-green-200 transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                  {user?.email?.split('@')[0]}
                </span>
                <span className="text-xs text-green-600 dark:text-green-400 transition-colors duration-300 font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full flower-bloom"></div>
                  Wellness Active
                </span>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Enhanced Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-11 h-11 organic-border nature-glass hover:nature-gradient-secondary border border-green-200/40 dark:border-green-600/40 nature-shadow transition-all duration-500 hover:scale-110 hover:shadow-xl group"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 text-green-600 dark:text-green-300 transition-all duration-500 group-hover:rotate-12 drop-shadow-sm gentle-sway" />
                ) : (
                  <Sun className="h-4 w-4 text-green-600 dark:text-green-300 transition-all duration-500 group-hover:rotate-45 drop-shadow-sm flower-bloom" />
                )}
              </Button>
              
              {/* Enhanced Profile Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="relative overflow-hidden border-2 border-green-200/60 dark:border-green-600/60 text-green-700 dark:text-green-300 hover:bg-green-50/90 dark:hover:bg-green-900/40 transition-all duration-500 hover:scale-105 nature-shadow organic-border px-6 py-2.5 font-semibold nature-glass group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/8 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <UserIcon className="h-4 w-4 mr-2 transition-all duration-300 group-hover:scale-110 drop-shadow-sm relative z-10 gentle-sway" />
                <span className="hidden sm:inline font-semibold relative z-10">Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
