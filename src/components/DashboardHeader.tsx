

import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart } from "lucide-react";

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
    <div className="text-center mb-16 relative">
      <div className="relative inline-block">
        {/* Floating elements */}
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-lg animate-float-delayed"></div>
        
        {/* Icon decoration */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25 animate-glow">
              <Heart className="h-10 w-10 text-white animate-pulse" />
            </div>
            <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
          {language === "en" 
            ? `${userName}'s Health` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
        </h1>
        
        <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-8">
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Enhanced decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="w-16 h-1 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
        </div>
      </div>
      
      <p className="text-slate-600 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
        {language === "en"
          ? `Welcome back, ${userName}! Your health journey continues here.`
          : `ಮರಳಿ ಸ್ವಾಗತ, ${userName}! ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Subtitle */}
      <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
        {language === "en"
          ? "Manage your wellness with intelligent insights and personalized care."
          : "ಬುದ್ಧಿವಂತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ."}
      </p>
    </div>
  );
};

export default DashboardHeader;
