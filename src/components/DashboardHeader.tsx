
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart, Star } from "lucide-react";

interface DashboardHeaderProps {
  language: string;
}

const DashboardHeader = ({ language }: DashboardHeaderProps) => {
  const { user } = useAuth();
  
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

  return (
    <div className="text-center mb-20 relative">
      <div className="relative inline-block">
        {/* Enhanced floating elements with better animations */}
        <div className="absolute -top-12 -left-12 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float shadow-lg shadow-blue-400/10"></div>
        <div className="absolute -bottom-12 -right-12 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-lg animate-float-delayed shadow-lg shadow-green-400/10"></div>
        <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-lg animate-float delay-1000 shadow-lg shadow-pink-400/10"></div>
        
        {/* Enhanced icon decoration with multiple layers */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative group">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-glow group-hover:shadow-3xl group-hover:shadow-blue-500/40 transition-all duration-500 transform group-hover:scale-110">
              <Heart className="h-12 w-12 text-white animate-pulse drop-shadow-lg" />
            </div>
            <Sparkles className="h-7 w-7 text-yellow-400 absolute -top-3 -right-3 animate-pulse drop-shadow-lg" />
            <Star className="h-5 w-5 text-blue-300 absolute -bottom-2 -left-2 animate-bounce-slow drop-shadow-lg" />
            
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
              <div className="w-3 h-3 bg-yellow-400 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-lg shadow-yellow-400/50"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
              <div className="w-2 h-2 bg-pink-400 rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2 shadow-lg shadow-pink-400/50"></div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-8 leading-tight tracking-tight drop-shadow-sm animate-fade-in-up">
          {language === "en" 
            ? `${userName}'s Health` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
        </h1>
        
        <div className="text-5xl md:text-6xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Enhanced decorative line with better visual hierarchy */}
        <div className="flex items-center justify-center gap-6 mb-10 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-full shadow-lg shadow-blue-500/30 animate-pulse"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
        </div>
      </div>
      
      <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed mb-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        {language === "en"
          ? `Welcome back, ${userName}! Your health journey continues here.`
          : `ಮರಳಿ ಸ್ವಾಗತ, ${userName}! ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Enhanced subtitle with better typography */}
      <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
        {language === "en"
          ? "Manage your wellness with intelligent insights and personalized care."
          : "ಬುದ್ಧಿವಂತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ."}
      </p>

      {/* New feature: Health status indicators */}
      <div className="flex justify-center gap-8 mt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="flex items-center gap-2 text-green-600">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
          <span className="text-sm font-medium">{language === "en" ? "System Online" : "ಸಿಸ್ಟಮ್ ಆನ್‌ಲೈನ್"}</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
          <span className="text-sm font-medium">{language === "en" ? "AI Ready" : "AI ಸಿದ್ಧ"}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
