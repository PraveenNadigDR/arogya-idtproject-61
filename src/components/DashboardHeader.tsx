
import { useAuth } from "@/contexts/AuthContext";

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
    <div className="text-center mb-12 relative">
      <div className="relative inline-block">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight">
          {language === "en" 
            ? `${userName}'s Health Dashboard` 
            : `${userName} ಅವರ ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್`}
        </h1>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
        {language === "en"
          ? `Welcome back, ${userName}! Manage your health with ease.`
          : `ಮರಳಿ ಸ್ವಾಗತ, ${userName}! ಸುಲಭವಾಗಿ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ.`}
      </p>
    </div>
  );
};

export default DashboardHeader;
