
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Moon, Sun, Sparkles, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Modern Logo Section */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              {/* Modern logo container */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                {/* Central health icon */}
                <Heart className="h-6 w-6 text-white drop-shadow-sm" fill="currentColor" />
                
                {/* Medical cross overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-white/60 rounded-full"></div>
                  <div className="absolute w-0.5 h-3 bg-white/60 rounded-full"></div>
                </div>
                
                {/* Modern glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-sm">
                <div className="w-full h-full bg-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Arogya
              </h1>
              <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                Health Platform
              </p>
            </div>
          </div>

          {/* Modern User Section */}
          <div className="flex items-center gap-4">
            {/* User Info Card */}
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-700 bg-gray-50/80 rounded-xl px-4 py-2 border border-gray-200/50">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">
                  {user?.email?.split('@')[0]}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Active
                </span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl bg-gray-50/80 hover:bg-gray-100 border border-gray-200/50"
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 text-gray-600" />
                ) : (
                  <Sun className="h-4 w-4 text-gray-600" />
                )}
              </Button>
              
              {/* Profile Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="border border-gray-200/50 text-gray-700 hover:bg-gray-50 rounded-xl px-4 py-2 font-medium bg-white/80"
              >
                <UserIcon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
