
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Heart } from "lucide-react";

interface DashboardHeaderProps {
  language: string;
}

const DashboardHeader = ({ language }: DashboardHeaderProps) => {
  const { user } = useAuth();
  
  // Extract name from user metadata or email
  const getUserName = () => {
    // Always return "Praveen" for this specific email
    if (user?.email === 'bnramachandra46@gmail.com') {
      return 'Praveen';
    }
    
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
    <div className="text-center mb-6 sm:mb-8 lg:mb-16 relative px-2 sm:px-4">
      <div className="relative inline-block">
        {/* Floating elements */}
        <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg sm:blur-xl animate-float"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-md sm:blur-lg animate-float-delayed"></div>
        
        {/* Icon decoration */}
        <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-6">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl shadow-blue-500/25 animate-glow">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white animate-pulse" />
            </div>
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-yellow-400 absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-2 sm:mb-4 lg:mb-6 leading-tight tracking-tight px-2">
          {language === "en" 
            ? `${userName}'s Health` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ`}
        </h1>
        
        <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-8">
          {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </div>
        
        {/* Enhanced decorative line */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 lg:mb-8">
          <div className="w-4 sm:w-8 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="w-4 sm:w-8 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-l from-transparent to-emerald-500 rounded-full"></div>
        </div>
      </div>
      
      <p className="text-slate-600 text-sm sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
        {language === "en"
          ? `Welcome back, ${userName}! Your health journey continues here.`
          : `ಮರಳಿ ಸ್ವಾಗತ, ${userName}! ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಮುಂದುವರಿಯುತ್ತದೆ.`}
      </p>
      
      {/* Subtitle */}
      <p className="text-slate-500 text-xs sm:text-base lg:text-lg mt-1 sm:mt-2 lg:mt-4 max-w-2xl mx-auto px-2 sm:px-4">
        {language === "en"
          ? "Manage your wellness with intelligent insights and personalized care."
          : "ಬುದ್ಧಿವಂತ ಒಳನೋಟಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಆರೈಕೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ."}
      </p>
    </div>
  );
};

export default DashboardHeader;
