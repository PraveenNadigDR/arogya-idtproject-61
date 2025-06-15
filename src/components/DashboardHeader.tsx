
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart, Star, Zap, Activity, Crown, Shield, Gem } from "lucide-react";
import { useState, useEffect } from "react";

interface DashboardHeaderProps {
  language: string;
}

const DashboardHeader = ({ language }: DashboardHeaderProps) => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  
  // Extract name from user metadata or email
  const getUserName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return language === "en" ? "User" : "ಬಳಕೆದಾರ";
  };

  const userName = getUserName();

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (language === "en") {
      if (hour < 12) return "Good Morning";
      if (hour < 17) return "Good Afternoon";
      return "Good Evening";
    } else {
      if (hour < 12) return "ಶುಭೋದಯ";
      if (hour < 17) return "ಶುಭ ಮಧ್ಯಾಹ್ನ";
      return "ಶುಭ ಸಂಜೆ";
    }
  };

  return (
    <header className="text-center mb-20 relative overflow-hidden" role="banner">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {!prefersReducedMotion && (
          <>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float opacity-60" />
            <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 rounded-full blur-2xl animate-float-delayed opacity-50" />
            <div className="absolute top-1/3 -right-10 w-24 h-24 bg-gradient-to-br from-pink-500/25 to-rose-500/25 rounded-full blur-xl animate-drift opacity-40" />
            <div className="absolute bottom-1/3 -left-10 w-20 h-20 bg-gradient-to-tr from-yellow-500/25 to-orange-500/25 rounded-full blur-lg animate-wave opacity-35" />
          </>
        )}
      </div>

      <div className="relative inline-block">
        {/* Enhanced floating decorative elements */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative group">
            {/* Main icon container with enhanced effects */}
            <div 
              className={`relative w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_80px_rgba(147,51,234,0.8)] transition-all duration-1000 transform group-hover:scale-110 focus-within:ring-4 focus-within:ring-blue-500/30 focus-within:ring-offset-4 ${!prefersReducedMotion ? 'animate-glow' : ''}`}
              role="img"
              aria-label={language === "en" ? "Health dashboard icon" : "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಐಕಾನ್"}
              tabIndex={0}
            >
              {/* Animated border rings */}
              {!prefersReducedMotion && (
                <>
                  <div className="absolute inset-0 rounded-full border-4 border-blue-400/40 animate-spin-slow"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-purple-400/30 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
                  <div className="absolute inset-4 rounded-full border-1 border-emerald-400/20 animate-spin-slow" style={{animationDuration: '10s'}}></div>
                </>
              )}
              
              <Heart className={`h-16 w-16 text-white drop-shadow-2xl relative z-10 ${!prefersReducedMotion ? 'animate-heartbeat' : ''}`} />
              
              {/* Inner glow effect */}
              <div className="absolute inset-4 bg-white/20 rounded-full blur-md"></div>
            </div>
            
            {/* Enhanced animated decorations with better positioning */}
            <Crown className={`h-10 w-10 text-yellow-400 absolute -top-6 -right-6 drop-shadow-lg ${!prefersReducedMotion ? 'animate-bounce' : ''}`} aria-hidden="true" />
            <Shield className={`h-8 w-8 text-blue-300 absolute -bottom-4 -left-4 drop-shadow-lg ${!prefersReducedMotion ? 'animate-pulse' : ''}`} aria-hidden="true" />
            <Gem className={`h-6 w-6 text-purple-400 absolute -top-2 left-1/2 transform -translate-x-1/2 drop-shadow-lg ${!prefersReducedMotion ? 'animate-sparkle' : ''}`} aria-hidden="true" />
            
            {/* Multiple orbiting elements with enhanced effects */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg shadow-yellow-400/50 animate-pulse opacity-80" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '20s'}}>
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full absolute -bottom-12 left-1/2 transform -translate-x-1/2 shadow-lg shadow-pink-400/50 animate-bounce opacity-70" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '25s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full absolute top-1/2 -right-14 transform -translate-y-1/2 shadow-lg shadow-cyan-400/50 animate-ping opacity-60" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '18s'}}>
                  <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full absolute top-1/2 -left-14 transform -translate-y-1/2 shadow-lg shadow-emerald-400/50 animate-pulse opacity-65" aria-hidden="true" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Enhanced greeting section with premium typography */}
        <div className={`mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-200 font-bold mb-4 tracking-wide bg-gradient-to-r from-slate-800 via-blue-700 to-emerald-700 dark:from-slate-200 dark:via-blue-300 dark:to-emerald-300 bg-clip-text text-transparent">
              {getGreeting()}, {userName}!
            </p>
            {/* Sparkle effects around greeting */}
            {!prefersReducedMotion && (
              <>
                <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -left-8 animate-sparkle opacity-70" />
                <Sparkles className="h-4 w-4 text-blue-400 absolute -bottom-1 -right-6 animate-sparkle delay-1000 opacity-60" />
              </>
            )}
          </div>
          
          <time className="inline-block text-sm text-slate-600 dark:text-slate-300 font-medium bg-white/40 dark:bg-gray-800/40 px-6 py-3 rounded-full backdrop-blur-xl border border-white/40 dark:border-gray-700/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleDateString(language === "en" ? "en-US" : "kn-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>

        {/* Enhanced main title with dynamic effects */}
        <h1 className={`text-7xl md:text-9xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 dark:from-slate-100 dark:via-blue-200 dark:to-emerald-200 bg-clip-text text-transparent mb-8 leading-tight tracking-tight drop-shadow-sm relative ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          {language === "en" 
            ? `${userName}'s Health` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
          
          {/* Enhanced text decoration */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-shimmer"></div>
          )}
        </h1>
        
        {/* Enhanced dashboard subtitle */}
        <div className={`text-6xl md:text-7xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent mb-16 relative ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* ENHANCED BLINKING BALL SECTION - Now with multiple effects */}
        <div className={`flex items-center justify-center gap-10 mb-16 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}} aria-hidden="true">
          {/* Left decorative line with animated gradient */}
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/30"></div>
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full animate-shimmer"></div>
            )}
          </div>
          
          {/* MAIN BLINKING BALL - Enhanced with multiple layers */}
          <div className="relative">
            {/* Outer pulsing ring */}
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full animate-ping"></div>
            )}
            
            {/* Middle glowing ring */}
            {!prefersReducedMotion && (
              <div className="absolute inset-1 w-14 h-14 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            )}
            
            {/* Main ball with enhanced blinking */}
            <div className={`relative w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-2xl shadow-blue-500/50 ${!prefersReducedMotion ? 'animate-ping animate-pulse' : ''}`}>
              {/* Inner highlight */}
              <div className={`absolute inset-3 w-10 h-10 bg-gradient-to-br from-white/40 to-transparent rounded-full ${!prefersReducedMotion ? 'animate-pulse' : ''}`} style={{animationDelay: '1s'}}></div>
              
              {/* Core light */}
              <div className={`absolute inset-5 w-6 h-6 bg-white/60 rounded-full blur-sm ${!prefersReducedMotion ? 'animate-pulse' : ''}`} style={{animationDelay: '1.5s'}}></div>
            </div>
            
            {/* Orbiting micro particles */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 animate-pulse shadow-lg shadow-yellow-400/50"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}>
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce shadow-lg shadow-pink-400/50"></div>
                </div>
              </>
            )}
          </div>
          
          {/* Right decorative line with animated gradient */}
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-emerald-500 to-transparent rounded-full shadow-lg shadow-emerald-500/30"></div>
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full animate-shimmer" style={{animationDelay: '1s'}}></div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced description with better styling */}
      <p className={`text-slate-600 dark:text-slate-300 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
        {language === "en"
          ? `Welcome back! Your health journey continues here with personalized insights and care.`
          : `ಮರಳಿ ಸ್ವಾಗತ! ವೈಯಕ್ತಿಕ ಒಳನೋಟಗಳು ಮತ್ತು ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Enhanced subtitle */}
      <p className={`text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.5s'}}>
        {language === "en"
          ? "Manage your wellness with intelligent insights and personalized care powered by AI."
          : "AI ಚಾಲಿತ ಬುದ್ಧಿವಂತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ."}
      </p>

      {/* Enhanced status indicators with premium design */}
      <div className={`flex flex-wrap justify-center gap-6 mt-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.6s'}} role="status">
        <div className="group flex items-center gap-3 text-green-600 dark:text-green-400 hover:scale-110 transition-all duration-500 bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 px-6 py-3 rounded-full border border-green-200/60 dark:border-green-700/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-green-500/25">
          <div className={`w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} aria-hidden="true"></div>
          <span className="text-sm font-bold">{language === "en" ? "System Online" : "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್"}</span>
        </div>
        
        <div className="group flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:scale-110 transition-all duration-500 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 dark:from-blue-900/30 dark:to-cyan-900/30 px-6 py-3 rounded-full border border-blue-200/60 dark:border-blue-700/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25">
          <Zap className={`h-3 w-3 text-blue-500 ${!prefersReducedMotion ? 'animate-pulse group-hover:animate-bounce' : ''}`} />
          <span className="text-sm font-bold">{language === "en" ? "AI Ready" : "AI ಸಿದ್ಧ"}</span>
        </div>
        
        <div className="group flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:scale-110 transition-all duration-500 bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full border border-purple-200/60 dark:border-purple-700/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25">
          <Activity className={`h-3 w-3 text-purple-500 ${!prefersReducedMotion ? 'animate-pulse group-hover:animate-bounce' : ''}`} />
          <span className="text-sm font-bold">{language === "en" ? "Health Tracking" : "ಆರೋಗ್ಯ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
