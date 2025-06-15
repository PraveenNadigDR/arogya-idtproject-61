
import React from 'react';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Heart, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onNavigateToProfile?: () => void;
}

const Header = ({ onNavigateToProfile }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-green-100/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Heart className="h-8 w-8 text-green-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Arogya
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Health Platform</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 text-sm text-gray-600 bg-gray-50 rounded-full px-4 py-2">
              <UserIcon className="h-4 w-4" />
              <span className="font-medium">{user?.email}</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="relative"
            >
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onNavigateToProfile}
              className="border-green-300 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <UserIcon className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
