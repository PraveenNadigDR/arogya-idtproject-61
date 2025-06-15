
interface DashboardHeaderProps {
  language: string;
}

const DashboardHeader = ({ language }: DashboardHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-green-800 mb-2">
        {language === "en" ? "Your Health Dashboard" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
      </h1>
      <p className="text-gray-600">
        {language === "en"
          ? "Welcome to your personalized health management platform"
          : "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ನಿರ್ವಹಣಾ ವೇದಿಕೆಗೆ ಸ್ವಾಗತ"}
      </p>
    </div>
  );
};

export default DashboardHeader;
