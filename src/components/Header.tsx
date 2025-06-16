
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { User as UserIcon, Heart, Moon, Sun, Menu } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative group">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-emerald-700 bg-clip-text text-transparent">
                Arogya
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase hidden sm:block">
                Health Platform
              </p>
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* User Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-3 text-sm text-slate-600 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl px-6 py-3 border border-slate-200/50 shadow-sm">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <UserIcon className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-slate-700">{user?.email?.split('@')[0]}</span>
                <span className="text-xs text-slate-500">Active now</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle - Simplified for mobile */}
              <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-slate-100 to-purple-100 rounded-xl sm:rounded-2xl px-2 sm:px-4 py-2 sm:py-3 border border-slate-200/50 shadow-sm">
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-slate-600" />
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                  className="data-[state=checked]:bg-purple-600 scale-75 sm:scale-100"
                />
                <Moon className="h-3 w-3 sm:h-4 sm:w-4 text-slate-600" />
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 font-medium bg-gradient-to-r from-emerald-50 to-green-50"
              >
                <UserIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm">Profile</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
