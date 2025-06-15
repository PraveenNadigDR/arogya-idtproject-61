
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
              className={`w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:shadow-3xl group-hover:shadow-blue-500/40 transition-all duration-500 transform group-hover:scale-110 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${!prefersReducedMotion ? 'animate-glow' : ''}`}
              role="img"
              aria-label={language === "en" ? "Health dashboard icon" : "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಐಕಾನ್"}
              tabIndex={0}
            >
              <Heart className={`h-12 w-12 text-white drop-shadow-lg ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
            </div>
            <Sparkles className={`h-7 w-7 text-yellow-400 absolute -top-3 -right-3 drop-shadow-lg ${!prefersReducedMotion ? 'animate-pulse' : ''}`} aria-hidden="true" />
            <Star className={`h-5 w-5 text-blue-300 absolute -bottom-2 -left-2 drop-shadow-lg ${!prefersReducedMotion ? 'animate-bounce-slow' : ''}`} aria-hidden="true" />
            
            {/* Orbiting elements with better performance */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-rotate-slow">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-lg shadow-yellow-400/50" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-rotate-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}>
                  <div className="w-2 h-2 bg-pink-400 rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2 shadow-lg shadow-pink-400/50" aria-hidden="true" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Enhanced greeting with time awareness */}
        <div className={`mb-6 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-2">
            {getGreeting()}, {userName}!
          </p>
          <time className="text-sm text-slate-500" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleDateString(language === "en" ? "en-US" : "kn-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>

        <h1 className={`text-6xl md:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-8 leading-tight tracking-tight drop-shadow-sm ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          {language === "en" 
            ? `${userName}'s Health` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
        </h1>
        
        <div className={`text-5xl md:text-6xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Enhanced decorative line with better visual hierarchy */}
        <div className={`flex items-center justify-center gap-6 mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}} aria-hidden="true">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          <div className={`w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg shadow-blue-500/30 ${!prefersReducedMotion ? 'animate-pulse' : ''}`}></div>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
        </div>
      </div>
      
      <p className={`text-slate-600 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-6 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
        {language === "en"
          ? `Welcome back! Your health journey continues here with personalized insights and care.`
          : `ಮರಳಿ ಸ್ವಾಗತ! ವೈಯಕ್ತಿಕ ಒಳನೋಟಗಳು ಮತ್ತು ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Enhanced subtitle with better typography */}
      <p className={`text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.5s'}}>
        {language === "en"
          ? "Manage your wellness with intelligent insights and personalized care powered by AI."
          : "AI ಚಾಲಿತ ಬುದ್ಧಿವಂತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ."}
      </p>

      {/* Enhanced status indicators with better UX */}
      <div className={`flex justify-center gap-8 mt-8 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.6s'}} role="status">
        <div className="flex items-center gap-2 text-green-600 hover:scale-105 transition-transform duration-300">
          <div className={`w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} aria-hidden="true"></div>
          <span className="text-sm font-medium">{language === "en" ? "System Online" : "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್"}</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600 hover:scale-105 transition-transform duration-300">
          <Zap className={`h-3 w-3 text-blue-500 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
          <span className="text-sm font-medium">{language === "en" ? "AI Ready" : "AI ಸಿದ್ಧ"}</span>
        </div>
        <div className="flex items-center gap-2 text-purple-600 hover:scale-105 transition-transform duration-300">
          <Activity className={`h-3 w-3 text-purple-500 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
          <span className="text-sm font-medium">{language === "en" ? "Health Tracking" : "ಆರೋಗ್ಯ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
