
import { Card, CardContent } from "@/components/ui/card";

interface HealthIDCardProps {
  language: string;
  profile: any;
}

const HealthIDCard = ({ language, profile }: HealthIDCardProps) => {
  return (
    <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
      <CardContent className="p-4">
        <div className="text-center">
          <h4 className="font-medium text-green-800 mb-2">
            {language === "en" ? "🆔 Health ID Card" : "🆔 ಆರೋಗ್ಯ ಐಡಿ ಕಾರ್ಡ್"}
          </h4>
          <div className="bg-white p-3 rounded border-2 border-dashed border-green-300">
            <p className="text-lg font-bold">{profile.name}</p>
            <p className="text-sm text-gray-600">{profile.bloodGroup} • {profile.age ? `${profile.age} ${language === "en" ? "years" : "ವರ್ಷಗಳು"}` : (language === "en" ? "Age not set" : "ವಯಸ್ಸು ಸೆಟ್ ಆಗಿಲ್ಲ")}</p>
            <p className="text-xs text-gray-500 mt-1">{profile.location || (language === "en" ? "Location not set" : "ಸ್ಥಳ ಸೆಟ್ ಆಗಿಲ್ಲ")}</p>
          </div>
          <p className="text-xs text-green-600 mt-2">
            {language === "en" ? "Show this to medical professionals" : "ಇದನ್ನು ವೈದ್ಯಕೀಯ ವೃತ್ತಿಪರರಿಗೆ ತೋರಿಸಿ"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthIDCard;
