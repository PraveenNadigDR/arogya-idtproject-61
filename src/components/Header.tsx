
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Moon, Sun, Sparkles, Shield, Activity } from 'lucide-react';
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
          {/* Modern Logo Section with redesigned icon */}
          <div className="flex items-center gap-6">
            <div className="relative group">
              {/* Main modern logo container */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/40 overflow-hidden">
                {/* Modern geometric background pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-emerald-400/20 to-transparent rounded-tl-full"></div>
                
                {/* Central health icon with modern styling */}
                <div className="relative z-10 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300" fill="currentColor" />
                  {/* Medical cross overlay for health context */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-1 bg-white/40 rounded-full"></div>
                    <div className="absolute w-1 h-3 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Modern glow effect */}
                <div className="absolute inset-2 bg-white/10 rounded-xl blur-sm group-hover:bg-white/15 transition-all duration-700"></div>
              </div>
              
              {/* Minimalist status indicators */}
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-400/50 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-2.5 w-2.5 text-white" />
              </div>
              
              {/* Subtle orbiting element */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-400/50 group-hover:animate-pulse">
                <Activity className="h-2 w-2 text-white" />
              </div>
              
              {/* Modern rotating ring */}
              <div className="absolute inset-0 w-16 h-16 border-2 border-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-2xl animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-4xl font-black bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 dark:from-slate-200 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent transition-all duration-500 tracking-tight relative">
                Arogya
                {/* Modern shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wider uppercase transition-colors duration-300 opacity-75">
                Health Platform
              </p>
            </div>
          </div>

          {/* Enhanced User Section with modern glassmorphism */}
          <div className="flex items-center gap-6">
            {/* Modern User Info Card */}
            <div className="hidden md:flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-gray-800/80 dark:to-gray-700/80 rounded-2xl px-8 py-4 border border-slate-200/50 dark:border-gray-600/50 shadow-lg backdrop-blur-xl transition-all duration-700 hover:shadow-xl hover:scale-105 hover:shadow-blue-500/20 group">
              {/* Modern user avatar */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-indigo-500/40 transition-all duration-500">
                  <UserIcon className="h-5 w-5 text-white drop-shadow-sm" />
                  {/* Inner highlight */}
                  <div className="absolute inset-1 bg-white/15 rounded-lg"></div>
                </div>
                {/* Modern status indicator */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-semibold text-slate-700 dark:text-slate-200 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {user?.email?.split('@')[0]}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300 font-medium flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  Online
                </span>
              </div>
            </div>
            
            {/* Modern Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Modern Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100/80 to-slate-200/80 dark:from-gray-700/80 dark:to-gray-600/80 hover:from-slate-200/90 hover:to-slate-300/90 dark:hover:from-gray-600/90 dark:hover:to-gray-500/90 border border-slate-200/50 dark:border-gray-600/50 shadow-lg backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-xl group"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-slate-600 dark:text-slate-300 transition-all duration-500 group-hover:rotate-12 drop-shadow-sm" />
                ) : (
                  <Sun className="h-5 w-5 text-slate-600 dark:text-slate-300 transition-all duration-500 group-hover:rotate-45 drop-shadow-sm" />
                )}
              </Button>
              
              {/* Modern Profile Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="relative overflow-hidden border-2 border-emerald-200/80 dark:border-emerald-600/80 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50/90 dark:hover:bg-emerald-900/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 rounded-xl px-8 py-3 font-semibold bg-gradient-to-r from-emerald-50/80 to-green-50/80 dark:from-emerald-900/30 dark:to-green-900/30 backdrop-blur-xl group shadow-lg"
              >
                {/* Modern background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
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
