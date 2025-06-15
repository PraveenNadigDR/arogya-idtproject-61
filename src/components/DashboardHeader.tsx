
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart, Star, Zap, Activity, Leaf, Flower2, TreePine, Sun } from "lucide-react";
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
      {/* Enhanced floating nature background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {!prefersReducedMotion && (
          <>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-3xl animate-float opacity-60" />
            <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-tr from-yellow-500/30 to-orange-500/30 rounded-full blur-2xl animate-float-delayed opacity-50" />
            <div className="absolute top-1/3 -right-10 w-24 h-24 bg-gradient-to-br from-teal-500/25 to-cyan-500/25 rounded-full blur-xl animate-drift opacity-40" />
            <div className="absolute bottom-1/3 -left-10 w-20 h-20 bg-gradient-to-tr from-lime-500/25 to-green-500/25 rounded-full blur-lg animate-wave opacity-35" />
          </>
        )}
      </div>

      <div className="relative inline-block">
        {/* Enhanced nature floating decorative elements */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative group">
            {/* Main nature icon container with enhanced effects */}
            <div 
              className={`relative w-32 h-32 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.6)] group-hover:shadow-[0_0_80px_rgba(16,185,129,0.8)] transition-all duration-1000 transform group-hover:scale-110 focus-within:ring-4 focus-within:ring-green-500/30 focus-within:ring-offset-4 ${!prefersReducedMotion ? 'animate-glow' : ''}`}
              role="img"
              aria-label={language === "en" ? "Health dashboard icon" : "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಐಕಾನ್"}
              tabIndex={0}
            >
              {/* Animated nature border rings */}
              {!prefersReducedMotion && (
                <>
                  <div className="absolute inset-0 rounded-full border-4 border-green-400/40 animate-spin-slow"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-emerald-400/30 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
                  <div className="absolute inset-4 rounded-full border-1 border-teal-400/20 animate-spin-slow" style={{animationDuration: '10s'}}></div>
                </>
              )}
              
              <Heart className={`h-16 w-16 text-white drop-shadow-2xl relative z-10 ${!prefersReducedMotion ? 'gentle-sway' : ''}`} />
              
              {/* Inner glow effect */}
              <div className="absolute inset-4 bg-white/20 rounded-full blur-md"></div>
            </div>
            
            {/* Enhanced nature animated decorations */}
            <TreePine className={`h-10 w-10 text-green-400 absolute -top-6 -right-6 drop-shadow-lg ${!prefersReducedMotion ? 'gentle-sway' : ''}`} aria-hidden="true" />
            <Leaf className={`h-8 w-8 text-emerald-300 absolute -bottom-4 -left-4 drop-shadow-lg ${!prefersReducedMotion ? 'leaf-fall' : ''}`} aria-hidden="true" />
            <Flower2 className={`h-6 w-6 text-yellow-400 absolute -top-2 left-1/2 transform -translate-x-1/2 drop-shadow-lg ${!prefersReducedMotion ? 'flower-bloom' : ''}`} aria-hidden="true" />
            
            {/* Multiple orbiting nature elements */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg shadow-yellow-400/50 flower-bloom opacity-80" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '20s'}}>
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full absolute -bottom-12 left-1/2 transform -translate-x-1/2 shadow-lg shadow-green-400/50 leaf-fall opacity-70" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDuration: '25s'}}>
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full absolute top-1/2 -right-14 transform -translate-y-1/2 shadow-lg shadow-teal-400/50 animate-ping opacity-60" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '18s'}}>
                  <div className="w-5 h-5 bg-gradient-to-r from-lime-400 to-green-400 rounded-full absolute top-1/2 -left-14 transform -translate-y-1/2 shadow-lg shadow-lime-400/50 animate-pulse opacity-65" aria-hidden="true" />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Enhanced greeting section with nature typography */}
        <div className={`mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl text-green-800 dark:text-green-200 font-bold mb-4 tracking-wide bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 dark:from-green-200 dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent">
              {getGreeting()}, {userName}!
            </p>
            {/* Nature sparkle effects around greeting */}
            {!prefersReducedMotion && (
              <>
                <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -left-8 flower-bloom opacity-70" />
                <Sparkles className="h-4 w-4 text-green-400 absolute -bottom-1 -right-6 leaf-fall delay-1000 opacity-60" />
              </>
            )}
          </div>
          
          <time className="inline-block text-sm text-green-700 dark:text-green-300 font-medium bg-green-50/40 dark:bg-green-800/40 px-6 py-3 organic-border backdrop-blur-xl border border-green-200/40 dark:border-green-700/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleDateString(language === "en" ? "en-US" : "kn-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>

        {/* Enhanced main title with nature dynamic effects */}
        <h1 className={`text-7xl md:text-9xl font-black bg-gradient-to-r from-green-900 via-emerald-800 to-teal-800 dark:from-green-100 dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-8 leading-tight tracking-tight drop-shadow-sm relative ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
          {language === "en" 
            ? `${userName}'s Wellness` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
          
          {/* Enhanced nature text decoration */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-shimmer"></div>
          )}
        </h1>
        
        {/* Enhanced nature dashboard subtitle */}
        <div className={`text-6xl md:text-7xl font-light bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-16 relative ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Nature-inspired decorative elements with working animations */}
        <div className={`flex items-center justify-center gap-10 mb-16 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}} aria-hidden="true">
          {/* Left decorative line with nature gradient */}
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-emerald-500 organic-border shadow-lg shadow-green-500/30"></div>
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent organic-border animate-shimmer"></div>
            )}
          </div>
          
          {/* Main nature orb with proper pulsing animation */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulsing ring */}
            {!prefersReducedMotion && (
              <div className="absolute w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full animate-ping"></div>
            )}
            
            {/* Main nature orb with pulse */}
            <div className={`relative w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center ${!prefersReducedMotion ? 'animate-pulse' : ''}`}>
              {/* Inner highlight for 3D effect */}
              <div className="absolute inset-3 w-10 h-10 bg-gradient-to-br from-white/60 to-transparent rounded-full"></div>
              
              {/* Core nature light */}
              <div className={`absolute w-6 h-6 bg-white rounded-full ${!prefersReducedMotion ? 'animate-pulse-slow' : ''}`}></div>
              
              {/* Nature center icon */}
              <Sun className="h-4 w-4 text-white/80 absolute z-10" />
            </div>
            
            {/* Orbiting nature particles */}
            {!prefersReducedMotion && (
              <>
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 flower-bloom shadow-lg shadow-yellow-400/50"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '12s'}}>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full absolute -bottom-3 left-1/2 transform -translate-x-1/2 leaf-fall shadow-lg shadow-green-400/50"></div>
                </div>
              </>
            )}
          </div>
          
          {/* Right decorative line with nature gradient */}
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent organic-border shadow-lg shadow-teal-500/30"></div>
            {!prefersReducedMotion && (
              <div className="absolute inset-0 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent organic-border animate-shimmer" style={{animationDelay: '1s'}}></div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced description with nature styling */}
      <p className={`text-green-700 dark:text-green-300 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
        {language === "en"
          ? `Welcome back! Your wellness journey continues here with natural insights and holistic care.`
          : `ಮರಳಿ ಸ್ವಾಗತ! ನೈಸರ್ಗಿಕ ಒಳನೋಟಗಳು ಮತ್ತು ಸಮಗ್ರ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Enhanced subtitle */}
      <p className={`text-green-600 dark:text-green-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.5s'}}>
        {language === "en"
          ? "Nurture your wellness with nature-inspired insights and personalized holistic care."
          : "ನೈಸರ್ಗಿಕ ಪ್ರೇರಿತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಮಗ್ರ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಪೋಷಿಸಿ."}
      </p>

      {/* Enhanced nature status indicators */}
      <div className={`flex flex-wrap justify-center gap-6 mt-12 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`} style={{animationDelay: '0.6s'}} role="status">
        <div className="group flex items-center gap-3 text-green-600 dark:text-green-400 hover:scale-110 transition-all duration-500 bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 px-6 py-3 organic-border border border-green-200/60 dark:border-green-700/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-green-500/25">
          <div className={`w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 ${!prefersReducedMotion ? 'flower-bloom' : ''}`} aria-hidden="true"></div>
          <span className="text-sm font-bold">{language === "en" ? "Wellness Active" : "ಆರೋಗ್ಯ ಸಕ್ರಿಯ"}</span>
        </div>
        
        <div className="group flex items-center gap-3 text-emerald-600 dark:text-emerald-400 hover:scale-110 transition-all duration-500 bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/30 dark:to-teal-900/30 px-6 py-3 organic-border border border-emerald-200/60 dark:border-emerald-700/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-emerald-500/25">
          <Zap className={`h-3 w-3 text-emerald-500 ${!prefersReducedMotion ? 'animate-pulse group-hover:animate-bounce' : ''}`} />
          <span className="text-sm font-bold">{language === "en" ? "Nature AI Ready" : "ನೈಸರ್ಗಿಕ AI ಸಿದ್ಧ"}</span>
        </div>
        
        <div className="group flex items-center gap-3 text-teal-600 dark:text-teal-400 hover:scale-110 transition-all duration-500 bg-gradient-to-r from-teal-50/80 to-cyan-50/80 dark:from-teal-900/30 dark:to-cyan-900/30 px-6 py-3 organic-border border border-teal-200/60 dark:border-teal-700/60 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-teal-500/25">
          <Activity className={`h-3 w-3 text-teal-500 ${!prefersReducedMotion ? 'animate-pulse group-hover:animate-bounce' : ''}`} />
          <span className="text-sm font-bold">{language === "en" ? "Holistic Tracking" : "ಸಮಗ್ರ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
