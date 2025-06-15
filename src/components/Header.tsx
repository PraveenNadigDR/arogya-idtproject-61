
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Moon, Sun, Sparkles } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-3xl shadow-2xl border-b border-white/40 dark:border-gray-800/40 sticky top-0 z-50 transition-all duration-700 hover:shadow-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Enhanced Logo Section with premium animations */}
          <div className="flex items-center gap-6">
            <div className="relative group">
              {/* Main logo container with enhanced effects */}
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-all duration-1000 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-3xl group-hover:shadow-purple-500/50 animate-float relative overflow-hidden">
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-3xl"></div>
                
                <Heart className="h-8 w-8 text-white animate-heartbeat group-hover:animate-bounce drop-shadow-xl relative z-10" />
                
                {/* Glowing inner core */}
                <div className="absolute inset-2 bg-white/10 rounded-2xl blur-sm group-hover:bg-white/20 transition-all duration-1000"></div>
              </div>
              
              {/* Enhanced orbiting decorations with multiple layers */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping shadow-lg shadow-yellow-400/60 opacity-80"></div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-red-400/60 opacity-70"></div>
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce delay-300 shadow-lg shadow-cyan-400/60 opacity-60"></div>
              
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 w-16 h-16 border-3 border-gradient-to-r from-transparent via-purple-400/50 to-transparent rounded-3xl animate-spin-slow"></div>
              <div className="absolute inset-1 w-14 h-14 border-2 border-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-3xl animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
              
              {/* Enhanced orbiting particles */}
              <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '18s'}}>
                <div className="w-3 h-3 bg-green-400 rounded-full absolute -top-5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-green-400/60 animate-pulse delay-500 opacity-75" />
              </div>
              <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '22s'}}>
                <div className="w-2 h-2 bg-purple-400 rounded-full absolute -bottom-5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-400/60 animate-bounce delay-1000 opacity-70" />
              </div>
              
              {/* Sparkle effects */}
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-6 -left-3 animate-sparkle opacity-80" />
              <Sparkles className="h-3 w-3 text-pink-400 absolute -bottom-4 -right-5 animate-sparkle delay-1500 opacity-70" />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-emerald-700 dark:from-slate-200 dark:via-blue-300 dark:to-emerald-300 bg-clip-text text-transparent transition-all duration-500 animate-gradient tracking-tight relative">
                Arogya
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase transition-colors duration-300 animate-fade-in-up">
                Health Platform
              </p>
            </div>
          </div>

          {/* Enhanced User Section with glassmorphism */}
          <div className="flex items-center gap-6">
            {/* Enhanced User Info Card */}
            <div className="hidden md:flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 bg-gradient-to-r from-slate-50/90 to-blue-50/90 dark:from-gray-800/90 dark:to-gray-700/90 rounded-3xl px-10 py-5 border border-slate-200/70 dark:border-gray-600/70 shadow-xl backdrop-blur-2xl transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:shadow-blue-500/30 animate-slide-in-right group">
              {/* User avatar with enhanced effects */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-float-delayed shadow-xl shadow-blue-500/40 group-hover:shadow-purple-500/50 transition-all duration-700">
                  <UserIcon className="h-6 w-6 text-white drop-shadow-lg" />
                  {/* Inner glow */}
                  <div className="absolute inset-1 bg-white/20 rounded-xl blur-sm"></div>
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800 animate-pulse shadow-lg shadow-green-400/50"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-bold text-slate-700 dark:text-slate-200 transition-colors duration-300 text-base group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {user?.email?.split('@')[0]}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300 animate-pulse-slow font-medium flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  Active now
                </span>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-14 h-14 rounded-3xl bg-gradient-to-br from-slate-100/90 to-purple-100/90 dark:from-gray-700/90 dark:to-gray-600/90 hover:from-slate-200/95 hover:to-purple-200/95 dark:hover:from-gray-600/95 dark:hover:to-gray-500/95 border border-slate-200/70 dark:border-gray-600/70 shadow-xl backdrop-blur-2xl transition-all duration-700 hover:scale-115 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500/40 animate-float group"
              >
                {theme === 'light' ? (
                  <Moon className="h-6 w-6 text-slate-600 dark:text-slate-300 transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 drop-shadow-lg" />
                ) : (
                  <Sun className="h-6 w-6 text-slate-600 dark:text-slate-300 transition-all duration-700 group-hover:rotate-45 group-hover:scale-125 drop-shadow-lg" />
                )}
              </Button>
              
              {/* Profile Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="relative overflow-hidden border-2 border-emerald-200/90 dark:border-emerald-600/90 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50/95 dark:hover:bg-emerald-900/50 transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/40 rounded-3xl px-10 py-5 font-bold bg-gradient-to-r from-emerald-50/90 to-green-50/90 dark:from-emerald-900/40 dark:to-green-900/40 backdrop-blur-2xl animate-scale-in hover:animate-pulse-ring group shadow-xl"
              >
                {/* Background shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <UserIcon className="h-5 w-5 mr-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 drop-shadow-lg relative z-10" />
                <span className="hidden sm:inline font-bold relative z-10">Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
