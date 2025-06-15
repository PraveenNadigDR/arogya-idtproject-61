
interface DashboardHeaderProps {
  language: string;
}

const DashboardHeader = ({ language }: DashboardHeaderProps) => {
  return (
    <div className="text-center mb-12 relative">
      <div className="relative inline-block">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight">
          {language === "en" ? "Your Health Dashboard" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
        </h1>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
      </div>
      <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
        {language === "en"
          ? "Welcome to your personalized health management platform"
          : "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ನಿರ್ವಹಣಾ ವೇದಿಕೆಗೆ ಸ್ವಾಗತ"}
      </p>
    </div>
  );
};

export default DashboardHeader;
