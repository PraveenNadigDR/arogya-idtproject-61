
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Moon, Sun } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-xl border-b border-white/30 dark:border-gray-800/30 sticky top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo Section with premium design */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl group-hover:shadow-purple-500/40 animate-float">
                <Heart className="h-7 w-7 text-white animate-heartbeat group-hover:animate-bounce drop-shadow-lg" />
              </div>
              
              {/* Enhanced animated decorations with better positioning */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
              <div className="absolute -top-3 -right-3 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce delay-300 shadow-lg shadow-cyan-400/50"></div>
              
              {/* Enhanced rotating ring effect */}
              <div className="absolute inset-0 w-14 h-14 border-3 border-gradient-to-r from-transparent via-purple-400/40 to-transparent rounded-3xl animate-spin-slow"></div>
              
              {/* Additional orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}>
                <div className="w-2 h-2 bg-green-400 rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 shadow-lg shadow-green-400/50 animate-pulse delay-500" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-emerald-700 dark:from-slate-200 dark:via-blue-300 dark:to-emerald-300 bg-clip-text text-transparent transition-all duration-300 animate-gradient tracking-tight">
                Arogya
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase transition-colors duration-300 animate-fade-in-up">
                Health Platform
              </p>
            </div>
          </div>

          {/* Enhanced User Section with premium design */}
          <div className="flex items-center gap-4">
            {/* Enhanced User Info with better visual hierarchy */}
            <div className="hidden md:flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-700/80 rounded-3xl px-8 py-4 border border-slate-200/60 dark:border-gray-600/60 shadow-lg backdrop-blur-xl transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500/25 animate-slide-in-right">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center animate-float-delayed shadow-lg shadow-blue-500/30">
                <UserIcon className="h-5 w-5 text-white drop-shadow-sm" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-700 dark:text-slate-200 transition-colors duration-300 text-base">{user?.email?.split('@')[0]}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300 animate-pulse-slow font-medium">Active now</span>
              </div>
            </div>
            
            {/* Enhanced Action Buttons with premium interactions - Notification button removed */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-12 h-12 rounded-3xl bg-gradient-to-br from-slate-100/80 to-purple-100/80 dark:from-gray-700/80 dark:to-gray-600/80 hover:from-slate-200/90 hover:to-purple-200/90 dark:hover:from-gray-600/90 dark:hover:to-gray-500/90 border border-slate-200/60 dark:border-gray-600/60 shadow-lg backdrop-blur-xl transition-all duration-700 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-purple-500/30 animate-float group"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300 transition-all duration-700 group-hover:rotate-12 drop-shadow-sm" />
                ) : (
                  <Sun className="h-5 w-5 text-slate-600 dark:text-slate-300 transition-all duration-700 group-hover:rotate-45 group-hover:scale-125 drop-shadow-sm" />
                )}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="border-2 border-emerald-200/80 dark:border-emerald-600/80 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50/90 dark:hover:bg-emerald-900/40 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/30 rounded-3xl px-8 py-4 font-bold bg-gradient-to-r from-emerald-50/80 to-green-50/80 dark:from-emerald-900/30 dark:to-green-900/30 backdrop-blur-xl animate-scale-in hover:animate-pulse-ring group shadow-lg"
              >
                <UserIcon className="h-4 w-4 mr-3 transition-all duration-500 group-hover:rotate-12 drop-shadow-sm" />
                <span className="hidden sm:inline font-bold">Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
