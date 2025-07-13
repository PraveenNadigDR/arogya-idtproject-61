
import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth state
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('prototype_auth');
      const userData = localStorage.getItem('prototype_user');
      
      if (isAuthenticated && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error parsing user data:', error);
          localStorage.removeItem('prototype_auth');
          localStorage.removeItem('prototype_user');
        }
      }
      setLoading(false);
    };

    // Initial check
    checkAuth();

    // Listen for auth changes
    const handleAuthChange = () => {
      checkAuth();
    };

    window.addEventListener('auth-change', handleAuthChange);

    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);

  const signOut = async () => {
    try {
      localStorage.removeItem('prototype_auth');
      localStorage.removeItem('prototype_user');
      setUser(null);
      
      // Redirect to auth page
      window.location.href = '/auth';
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const value = {
    user,
    loading,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
