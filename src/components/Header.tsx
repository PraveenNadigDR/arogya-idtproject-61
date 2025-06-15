
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Moon, Sun, Leaf, Flower2, TreePine } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gradient-to-r from-green-50/95 via-emerald-50/95 to-teal-50/95 dark:from-green-900/95 dark:via-emerald-900/95 dark:to-teal-900/95 backdrop-blur-xl shadow-2xl border-b border-green-200/40 dark:border-green-800/40 sticky top-0 z-50 transition-all duration-700 hover:shadow-3xl leaf-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Nature-inspired Logo Section */}
          <div className="flex items-center gap-6">
            <div className="relative group">
              {/* Main nature-inspired logo container */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-emerald-500/40 overflow-hidden">
                {/* Organic background pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-full"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-blue-400/20 to-transparent rounded-tl-full"></div>
                
                {/* Central health heart with nature elements */}
                <div className="relative z-10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300 gentle-sway" fill="currentColor" />
                  {/* Nature cross overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-1 bg-white/40 rounded-full"></div>
                    <div className="absolute w-1 h-3 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Nature glow effect */}
                <div className="absolute inset-2 bg-white/10 rounded-full blur-sm group-hover:bg-white/15 transition-all duration-700"></div>
              </div>
              
              {/* Nature status indicators */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/50 group-hover:scale-110 transition-transform duration-300 flower-bloom">
                <Flower2 className="h-2.5 w-2.5 text-white" />
              </div>
              
              {/* Leaf element */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50 leaf-fall">
                <Leaf className="h-2 w-2 text-white" />
              </div>
              
              {/* Organic rotating ring */}
              <div className="absolute inset-0 w-16 h-16 border-2 border-gradient-to-r from-transparent via-green-400/30 to-transparent rounded-full animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-4xl font-black bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 dark:from-green-200 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent transition-all duration-500 tracking-tight relative">
                Arogya
                {/* Nature shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-shimmer"></div>
              </h1>
              <p className="text-xs text-green-600 dark:text-green-400 font-semibold tracking-wider uppercase transition-colors duration-300 opacity-75 flex items-center gap-1">
                <TreePine className="h-3 w-3" />
                Nature Health Platform
              </p>
            </div>
          </div>

          {/* Enhanced User Section with nature glassmorphism */}
          <div className="flex items-center gap-6">
            {/* Nature User Info Card */}
            <div className="hidden md:flex items-center gap-4 text-sm text-green-700 dark:text-green-300 bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-800/80 dark:to-emerald-700/80 organic-border px-8 py-4 border border-green-200/50 dark:border-green-600/50 shadow-lg backdrop-blur-xl transition-all duration-700 hover:shadow-xl hover:scale-105 hover:shadow-green-500/20 group wood-texture">
              {/* Nature user avatar */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 leaf-shape flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-emerald-500/40 transition-all duration-500">
                  <UserIcon className="h-5 w-5 text-white drop-shadow-sm" />
                  {/* Inner highlight */}
                  <div className="absolute inset-1 bg-white/15 leaf-shape"></div>
                </div>
                {/* Nature status indicator */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white dark:border-green-800 shadow-sm flower-bloom"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-semibold text-green-800 dark:text-green-200 transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                  {user?.email?.split('@')[0]}
                </span>
                <span className="text-xs text-green-600 dark:text-green-400 transition-colors duration-300 font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flower-bloom"></div>
                  Wellness Active
                </span>
              </div>
            </div>
            
            {/* Nature Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Nature Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-12 h-12 organic-border bg-gradient-to-br from-green-100/80 to-emerald-200/80 dark:from-green-700/80 dark:to-emerald-600/80 hover:from-green-200/90 hover:to-emerald-300/90 dark:hover:from-green-600/90 dark:hover:to-emerald-500/90 border border-green-200/50 dark:border-green-600/50 shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-xl group"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-green-600 dark:text-green-300 transition-all duration-500 group-hover:rotate-12 drop-shadow-sm" />
                ) : (
                  <Sun className="h-5 w-5 text-green-600 dark:text-green-300 transition-all duration-500 group-hover:rotate-45 drop-shadow-sm" />
                )}
              </Button>
              
              {/* Nature Profile Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="relative overflow-hidden border-2 border-green-200/80 dark:border-green-600/80 text-green-700 dark:text-green-300 hover:bg-green-50/90 dark:hover:bg-green-900/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 organic-border px-8 py-3 font-semibold bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur-xl group shadow-lg"
              >
                {/* Nature background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <UserIcon className="h-4 w-4 mr-2 transition-all duration-300 group-hover:scale-110 drop-shadow-sm relative z-10" />
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
