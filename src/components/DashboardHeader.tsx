
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart, Star, Zap, Activity } from "lucide-react";
import { useState, useEffect } from "react";

interface DashboardHeaderProps {
  language: string;
}

const DashboardHeader = ({ language }: DashboardHeaderProps) => {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  
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
    <header className="text-center mb-16 relative" role="banner">
      {/* Modern floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/3 -right-10 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-xl" style={{animationDelay: '1s'}} />
      </div>

      <div className="relative">
        {/* Modern main health icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative group">
            <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-xl border border-purple-400/20" style={{animationDelay: '1s'}}></div>
              
              <Heart className="h-12 w-12 text-white drop-shadow-lg relative z-10" fill="currentColor" />
              
              {/* Medical cross overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-5 h-0.5 bg-white/70 rounded-full"></div>
                <div className="absolute w-0.5 h-5 bg-white/70 rounded-full"></div>
              </div>
              
              {/* Inner glow */}
              <div className="absolute inset-4 bg-white/20 rounded-lg blur-sm"></div>
            </div>
            
            {/* Modern status indicators */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            
            <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
              <Star className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
        </div>

        {/* Modern greeting section */}
        <div className="mb-8">
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 font-bold mb-3 tracking-wide">
              {getGreeting()}, {userName}!
            </p>
            <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-6 animate-pulse" />
          </div>
          
          <time className="inline-block text-sm text-gray-600 dark:text-gray-400 font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300" dateTime={currentTime.toISOString()}>
            {currentTime.toLocaleDateString(language === "en" ? "en-US" : "kn-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
        </div>

        {/* Modern main title */}
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
          {language === "en" 
            ? `${userName}'s Wellness` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
        </h1>
        
        {/* Modern dashboard subtitle */}
        <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-12">
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Modern decorative elements */}
        <div className="flex items-center justify-center gap-8 mb-12" aria-hidden="true">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white/90 rounded-lg"></div>
            </div>
          </div>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
      
      {/* Modern description */}
      <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-8">
        {language === "en"
          ? `Welcome back! Your health journey continues here with smart insights and personalized care.`
          : `ಮರಳಿ ಸ್ವಾಗತ! ಸ್ಮಾರ್ಟ್ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Modern subtitle */}
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
        {language === "en"
          ? "Advanced healthcare technology meets personalized wellness solutions."
          : "ಸುಧಾರಿತ ಆರೋಗ್ಯ ತಂತ್ರಜ್ಞಾನ ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಪರಿಹಾರಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ."}
      </p>

      {/* Modern status indicators */}
      <div className="flex flex-wrap justify-center gap-4 mt-10" role="status">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">{language === "en" ? "System Active" : "ಸಿಸ್ಟಮ್ ಸಕ್ರಿಯ"}</span>
        </div>
        
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
          <Zap className="h-2.5 w-2.5 text-purple-500 animate-pulse" />
          <span className="text-sm font-semibold">{language === "en" ? "AI Ready" : "AI ಸಿದ್ಧ"}</span>
        </div>
        
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
          <Activity className="h-2.5 w-2.5 text-indigo-500 animate-pulse" />
          <span className="text-sm font-semibold">{language === "en" ? "Health Tracking" : "ಆರೋಗ್ಯ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
