
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Bell, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <header className="bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Heart className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-emerald-700 bg-clip-text text-transparent">
                Arogya
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                Health Platform
              </p>
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {/* User Info */}
            <div className="hidden md:flex items-center gap-3 text-sm text-slate-600 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl px-6 py-3 border border-slate-200/50 shadow-sm">
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
              <Button
                variant="ghost"
                size="sm"
                className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 border border-slate-200/50 shadow-sm transition-all duration-300 hover:scale-105"
              >
                <Bell className="h-5 w-5 text-slate-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse"></div>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="w-11 h-11 rounded-2xl bg-gradient-to-br from-slate-100 to-purple-100 hover:from-slate-200 hover:to-purple-200 border border-slate-200/50 shadow-sm transition-all duration-300 hover:scale-105"
              >
                <Settings className="h-5 w-5 text-slate-600" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onNavigateToProfile}
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 rounded-2xl px-6 py-3 font-medium bg-gradient-to-r from-emerald-50 to-green-50"
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
