
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart, Star, Zap, Activity, Leaf, Flower2, TreePine, Sun, Wind, Droplets } from "lucide-react";
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
    <header className="text-center mb-16 relative overflow-hidden" role="banner">
      {/* Enhanced floating nature background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {!prefersReducedMotion && (
          <>
            <div className="absolute -top-20 -left-20 w-40 h-40 nature-gradient-primary rounded-full blur-3xl animate-float opacity-40" />
            <div className="absolute -bottom-20 -right-20 w-32 h-32 nature-gradient-sunset rounded-full blur-2xl animate-float-delayed opacity-30" />
            <div className="absolute top-1/3 -right-10 w-24 h-24 nature-gradient-ocean rounded-full blur-xl animate-drift opacity-25" />
            <div className="absolute bottom-1/3 -left-10 w-20 h-20 nature-gradient-forest rounded-full blur-lg animate-wave opacity-20" />
          </>
        )}
      </div>

      <div className="relative inline-block">
        {/* Enhanced main wellness icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative group">
            <div 
              className={`relative w-28 h-28 nature-gradient-forest organic-border flex items-center justify-center nature-shadow-glow group-hover:shadow-[0_0_100px_rgba(127,176,105,0.8)] transition-all duration-1000 transform group-hover:scale-110 focus-within:ring-4 focus-within:ring-green-500/30 focus-within:ring-offset-4 ${!prefersReducedMotion ? 'nature-breathe' : ''}`}
              role="img"
              aria-label={language === "en" ? "Health dashboard icon" : "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಐಕಾನ್"}
              tabIndex={0}
            >
              {/* Enhanced animated border rings */}
              {!prefersReducedMotion && (
                <>
                  <div className="absolute inset-0 organic-border border-4 border-green-400/50 animate-spin-slow"></div>
                  <div className="absolute inset-2 organic-border border-2 border-emerald-400/40 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
                  <div className="absolute inset-4 organic-border border-1 border-teal-400/30 animate-spin-slow" style={{animationDuration: '10s'}}></div>
                </>
              )}
              
              <Heart className={`h-14 w-14 text-white drop-shadow-2xl relative z-10 ${!prefersReducedMotion ? 'gentle-sway' : ''}`} fill="currentColor" />
              
              {/* Enhanced inner glow */}
              <div className="absolute inset-4 bg-white/25 organic-border blur-md"></div>
              
              {/* Medical cross overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-6 h-1 bg-white/70 organic-border"></div>
                <div className="absolute w-1 h-6 bg-white/70 organic-border"></div>
              </div>
            </div>
            
            {/* Enhanced nature decorative elements */}
            <TreePine className={`h-8 w-8 text-green-500 absolute -top-4 -right-4 drop-shadow-lg ${!prefersReducedMotion ? 'wind-sway' : ''}`} aria-hidden="true" />
            <Leaf className={`h-6 w-6 text-emerald-400 absolute -bottom-3 -left-3 drop-shadow-lg ${!prefersReducedMotion ? 'leaf-fall' : ''}`} aria-hidden="true" />
            <Flower2 className={`h-5 w-5 text-yellow-400 absolute -top-1 left-1/2 transform -translate-x-1/2 drop-shadow-lg ${!prefersReducedMotion ? 'flower-bloom' : ''}`} aria-hidden="true" />
            <Droplets className={`h-4 w-4 text-blue-400 absolute bottom-1 right-1/2 transform translate-x-1/2 drop-shadow-lg ${!prefersReducedMotion ? 'dewdrop' : ''}`} aria-hidden="true" />
            
            {/* Enhanced orbiting elements */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-5 h-5 nature-gradient-sunset flower-shape absolute -top-10 left-1/2 transform -translate-x-1/2 nature-shadow-soft flower-bloom opacity-80" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '20s'}}>
                  <div className="w-4 h-4 nature-gradient-primary leaf-shape absolute -bottom-10 left-1/2 transform -translate-x-1/2 nature-shadow-soft leaf-fall opacity-70" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '25s'}}>
                  <div className="w-3 h-3 nature-gradient-ocean rounded-full absolute top-1/2 -right-12 transform -translate-y-1/2 nature-shadow-soft animate-ping opacity-60" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '18s'}}>
                  <div className="w-4 h-4 nature-gradient-secondary petal-shape absolute top-1/2 -left-12 transform -translate-y-1/2 nature-shadow-soft animate-pulse opacity-65" aria-hidden="true" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Enhanced greeting section */}
        <div className={`mb-8 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl text-green-800 dark:text-green-200 font-bold mb-3 tracking-wide bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 dark:from-green-200 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent">
              {getGreeting()}, {userName}!
            </p>
            {!prefersReducedMotion && (
              <>
                <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -left-6 flower-bloom opacity-70" />
                <Sparkles className="h-3 w-3 text-green-400 absolute -bottom-0 -right-4 leaf-fall delay-1000 opacity-60" />
              </>
            )}
          </div>
          
          <time className="inline-block text-sm text-green-700 dark:text-green-300 font-medium nature-glass px-5 py-2.5 organic-border border border-green-200/30 dark:border-green-700/30 nature-shadow-soft hover:shadow-xl transition-all duration-500 hover:scale-105 leaf-texture" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleDateString(language === "en" ? "en-US" : "kn-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>

        {/* Enhanced main title */}
        <h1 className={`text-6xl md:text-8xl font-black bg-gradient-to-r from-green-900 via-emerald-800 to-teal-800 dark:from-green-100 dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-6 leading-tight tracking-tight drop-shadow-sm relative ${!prefersReducedMotion ? 'animate-fade-in-up gentle-sway' : ''}`}>
          {language === "en" 
            ? `${userName}'s Wellness` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
          
          {!prefersReducedMotion && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/8 to-transparent animate-shimmer"></div>
          )}
        </h1>
        
        {/* Enhanced dashboard subtitle */}
        <div className={`text-5xl md:text-6xl font-light bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-12 relative ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Enhanced decorative elements */}
        <div className={`flex items-center justify-center gap-8 mb-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}} aria-hidden="true">
          <div className="relative">
            <div className="w-28 h-0.5 nature-gradient-primary organic-border nature-shadow-soft"></div>
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent organic-border animate-shimmer"></div>
            )}
          </div>
          
          <div className="relative flex items-center justify-center">
            {!prefersReducedMotion && (
              <div className="absolute w-16 h-16 nature-gradient-secondary rounded-full animate-ping opacity-30"></div>
            )}
            
            <div className={`relative w-12 h-12 nature-gradient-forest organic-border nature-shadow-glow flex items-center justify-center ${!prefersReducedMotion ? 'nature-breathe' : ''}`}>
              <div className="absolute inset-2 w-8 h-8 bg-gradient-to-br from-white/70 to-transparent organic-border"></div>
              <div className={`absolute w-4 h-4 bg-white organic-border ${!prefersReducedMotion ? 'animate-pulse-slow' : ''}`}></div>
              <Sun className="h-3 w-3 text-white/90 absolute z-10" />
            </div>
            
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-1.5 h-1.5 bg-yellow-400 flower-shape absolute -top-2 left-1/2 transform -translate-x-1/2 flower-bloom nature-shadow-soft"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}>
                  <div className="w-1 h-1 bg-green-400 leaf-shape absolute -bottom-2 left-1/2 transform -translate-x-1/2 leaf-fall nature-shadow-soft"></div>
                </div>
              </>
            )}
          </div>
          
          <div className="relative">
            <div className="w-28 h-0.5 nature-gradient-ocean organic-border nature-shadow-soft"></div>
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent organic-border animate-shimmer" style={{animationDelay: '1s'}}></div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced description */}
      <p className={`text-green-700 dark:text-green-300 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-8 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
        {language === "en"
          ? `Welcome back! Your wellness journey continues here with natural insights and holistic care.`
          : `ಮರಳಿ ಸ್ವಾಗತ! ನೈಸರ್ಗಿಕ ಒಳನೋಟಗಳು ಮತ್ತು ಸಮಗ್ರ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Enhanced subtitle */}
      <p className={`text-green-600 dark:text-green-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.5s'}}>
        {language === "en"
          ? "Nurture your wellness with nature-inspired insights and personalized holistic care."
          : "ನೈಸರ್ಗಿಕ ಪ್ರೇರಿತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಮಗ್ರ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಪೋಷಿಸಿ."}
      </p>

      {/* Enhanced status indicators */}
      <div className={`flex flex-wrap justify-center gap-5 mt-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.6s'}} role="status">
        <div className="group flex items-center gap-2.5 text-green-600 dark:text-green-400 hover:scale-110 transition-all duration-500 nature-glass px-5 py-2.5 organic-border border border-green-200/40 dark:border-green-700/40 nature-shadow hover:shadow-xl hover:shadow-green-500/25 leaf-texture">
          <div className={`w-2.5 h-2.5 bg-green-500 flower-shape nature-shadow-soft ${!prefersReducedMotion ? 'flower-bloom' : ''}`} aria-hidden="true"></div>
          <span className="text-sm font-bold">{language === "en" ? "Wellness Active" : "ಆರೋಗ್ಯ ಸಕ್ರಿಯ"}</span>
        </div>
        
        <div className="group flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-all duration-500 nature-glass px-5 py-2.5 organic-border border border-emerald-200/40 dark:border-emerald-700/40 nature-shadow hover:shadow-xl hover:shadow-emerald-500/25 water-texture">
          <Zap className={`h-2.5 w-2.5 text-emerald-500 ${!prefersReducedMotion ? 'animate-pulse group-hover:animate-bounce' : ''}`} />
          <span className="text-sm font-bold">{language === "en" ? "Nature AI Ready" : "ನೈಸರ್ಗಿಕ AI ಸಿದ್ಧ"}</span>
        </div>
        
        <div className="group flex items-center gap-2.5 text-teal-600 dark:text-teal-400 hover:scale-110 transition-all duration-500 nature-glass px-5 py-2.5 organic-border border border-teal-200/40 dark:border-teal-700/40 nature-shadow hover:shadow-xl hover:shadow-teal-500/25 flower-texture">
          <Activity className={`h-2.5 w-2.5 text-teal-500 ${!prefersReducedMotion ? 'animate-pulse group-hover:animate-bounce' : ''}`} />
          <span className="text-sm font-bold">{language === "en" ? "Holistic Tracking" : "ಸಮಗ್ರ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
