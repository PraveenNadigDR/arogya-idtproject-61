
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface DoctorOnWheelsAlertProps {
  language: string;
}

const DoctorOnWheelsAlert = ({ language }: DoctorOnWheelsAlertProps) => {
  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-full">
            <Users className="h-5 w-5 text-purple-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-purple-800">
              {language === "en" ? "🚐 Doctor on Wheels" : "🚐 ಡಾಕ್ಟರ್ ಆನ್ ವೀಲ್ಸ್"}
            </h4>
            <p className="text-sm text-purple-600">
              {language === "en" 
                ? "Mobile clinic arriving tomorrow at 10 AM" 
                : "ಮೊಬೈಲ್ ಕ್ಲಿನಿಕ್ ನಾಳೆ ಬೆಳಿಗ್ಗೆ 10 ಗಂಟೆಗೆ ಬರುತ್ತಿದೆ"
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorOnWheelsAlert;
