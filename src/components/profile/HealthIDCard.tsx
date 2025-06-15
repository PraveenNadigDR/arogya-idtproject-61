
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Shield } from "lucide-react";

interface HealthIDCardProps {
  language: string;
  profile: any;
}

const HealthIDCard = ({ language, profile }: HealthIDCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-0 shadow-xl ring-1 ring-green-200/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800 text-lg">
              {language === "en" ? "🆔 Health ID Card" : "🆔 ಆರೋಗ್ಯ ಐಡಿ ಕಾರ್ಡ್"}
            </h4>
          </div>
          
          <div className="bg-white p-6 rounded-xl border-2 border-dashed border-green-300 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-2 right-2 w-8 h-8 bg-green-500 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-green-300 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <p className="text-xl font-bold text-gray-800 mb-2">{profile.name}</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-3">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                  {profile.bloodGroup}
                </span>
                <span>•</span>
                <span>
                  {profile.age ? `${profile.age} ${language === "en" ? "years" : "ವರ್ಷಗಳು"}` : (language === "en" ? "Age not set" : "ವಯಸ್ಸು ಸೆಟ್ ಆಗಿಲ್ಲ")}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                📍 {profile.location || (language === "en" ? "Location not set" : "ಸ್ಥಳ ಸೆಟ್ ಆಗಿಲ್ಲ")}
              </p>
              
              {/* QR Code placeholder */}
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <QrCode className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-green-100 rounded-lg">
            <p className="text-xs text-green-700 font-medium">
              {language === "en" ? "Show this to medical professionals" : "ಇದನ್ನು ವೈದ್ಯಕೀಯ ವೃತ್ತಿಪರರಿಗೆ ತೋರಿಸಿ"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthIDCard;
