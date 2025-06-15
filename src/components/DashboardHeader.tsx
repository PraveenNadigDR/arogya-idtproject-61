
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart, Star, Zap, Activity } from "lucide-react";
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
      // Extract first part of email as fallback
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
    <header className="text-center mb-20 relative" role="banner">
      <div className="relative inline-block">
        {/* Enhanced floating elements with better accessibility */}
        <div 
          className={`absolute -top-12 -left-12 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl shadow-lg shadow-blue-400/10 ${!prefersReducedMotion ? 'animate-float' : ''}`}
          aria-hidden="true"
        />
        <div 
          className={`absolute -bottom-12 -right-12 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-lg shadow-lg shadow-green-400/10 ${!prefersReducedMotion ? 'animate-float-delayed' : ''}`}
          aria-hidden="true"
        />
        <div 
          className={`absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-lg shadow-lg shadow-pink-400/10 ${!prefersReducedMotion ? 'animate-float delay-1000' : ''}`}
          aria-hidden="true"
        />
        
        {/* Enhanced icon decoration with better semantic meaning */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative group">
            <div 
              className={`w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:shadow-3xl group-hover:shadow-blue-500/40 transition-all duration-700 transform group-hover:scale-110 focus-within:ring-4 focus-within:ring-blue-500/30 focus-within:ring-offset-4 ${!prefersReducedMotion ? 'animate-glow' : ''}`}
              role="img"
              aria-label={language === "en" ? "Health dashboard icon" : "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಐಕಾನ್"}
              tabIndex={0}
            >
              <Heart className={`h-14 w-14 text-white drop-shadow-lg ${!prefersReducedMotion ? 'animate-heartbeat' : ''}`} />
            </div>
            
            {/* Enhanced animated decorations */}
            <Sparkles className={`h-8 w-8 text-yellow-400 absolute -top-4 -right-4 drop-shadow-lg ${!prefersReducedMotion ? 'animate-sparkle' : ''}`} aria-hidden="true" />
            <Star className={`h-6 w-6 text-blue-300 absolute -bottom-3 -left-3 drop-shadow-lg ${!prefersReducedMotion ? 'animate-bounce-slow' : ''}`} aria-hidden="true" />
            
            {/* Multiple orbiting elements */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 shadow-lg shadow-yellow-400/50 animate-pulse" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full absolute -bottom-8 left-1/2 transform -translate-x-1/2 shadow-lg shadow-pink-400/50 animate-bounce" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '20s'}}>
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full absolute top-1/2 -right-10 transform -translate-y-1/2 shadow-lg shadow-cyan-400/50 animate-ping" aria-hidden="true" />
                </div>
              </>
            )}
            
            {/* Enhanced rotating ring effect */}
            <div className={`absolute inset-0 w-28 h-28 border-4 border-gradient-to-r from-transparent via-purple-400/30 to-transparent rounded-3xl ${!prefersReducedMotion ? 'animate-spin-slow' : ''}`} aria-hidden="true"></div>
          </div>
        </div>

        {/* Enhanced greeting with better typography */}
        <div className={`mb-8 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-semibold mb-3 tracking-wide">
            {getGreeting()}, {userName}!
          </p>
          <time className="text-sm text-slate-500 dark:text-slate-400 font-medium bg-white/20 dark:bg-gray-800/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 dark:border-gray-700/30" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleDateString(language === "en" ? "en-US" : "kn-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>

        <h1 className={`text-6xl md:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 dark:from-slate-100 dark:via-blue-200 dark:to-emerald-200 bg-clip-text text-transparent mb-8 leading-tight tracking-tight drop-shadow-sm ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          {language === "en" 
            ? `${userName}'s Health` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
        </h1>
        
        <div className={`text-5xl md:text-6xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 dark:from-blue-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent mb-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Enhanced decorative line with blinking ball */}
        <div className={`flex items-center justify-center gap-8 mb-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}} aria-hidden="true">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/20"></div>
          
          {/* Restored blinking ball with enhanced design */}
          <div className="relative">
            <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-2xl shadow-blue-500/40 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}></div>
            {/* Additional blinking effect */}
            <div className={`absolute inset-0 w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-emerald-400 rounded-full ${!prefersReducedMotion ? 'animate-ping' : ''} opacity-75`}></div>
            {/* Inner glow */}
            <div className={`absolute inset-2 w-8 h-8 bg-white/30 rounded-full ${!prefersReducedMotion ? 'animate-pulse' : ''}`} style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-emerald-500 to-transparent rounded-full shadow-lg shadow-emerald-500/20"></div>
        </div>
      </div>
      
      <p className={`text-slate-600 dark:text-slate-300 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-8 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
        {language === "en"
          ? `Welcome back! Your health journey continues here with personalized insights and care.`
          : `ಮರಳಿ ಸ್ವಾಗತ! ವೈಯಕ್ತಿಕ ಒಳನೋಟಗಳು ಮತ್ತು ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Enhanced subtitle with better typography */}
      <p className={`text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.5s'}}>
        {language === "en"
          ? "Manage your wellness with intelligent insights and personalized care powered by AI."
          : "AI ಚಾಲಿತ ಬುದ್ಧಿವಂತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ."}
      </p>

      {/* Enhanced status indicators with better visual design */}
      <div className={`flex justify-center gap-8 mt-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.6s'}} role="status">
        <div className="flex items-center gap-3 text-green-600 dark:text-green-400 hover:scale-105 transition-all duration-300 bg-green-50/50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200/50 dark:border-green-700/50 backdrop-blur-sm">
          <div className={`w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} aria-hidden="true"></div>
          <span className="text-sm font-semibold">{language === "en" ? "System Online" : "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್"}</span>
        </div>
        <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:scale-105 transition-all duration-300 bg-blue-50/50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
          <Zap className={`h-3 w-3 text-blue-500 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
          <span className="text-sm font-semibold">{language === "en" ? "AI Ready" : "AI ಸಿದ್ಧ"}</span>
        </div>
        <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:scale-105 transition-all duration-300 bg-purple-50/50 dark:bg-purple-900/20 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
          <Activity className={`h-3 w-3 text-purple-500 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
          <span className="text-sm font-semibold">{language === "en" ? "Health Tracking" : "ಆರೋಗ್ಯ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
