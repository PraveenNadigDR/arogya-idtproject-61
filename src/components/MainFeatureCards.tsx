
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Video, Ambulance, Calendar, Phone, AlertTriangle } from "lucide-react";

interface MainFeatureCardsProps {
  language: string;
  onNavigateToTab: (tabValue: string) => void;
  onVideoCall: () => void;
}

const MainFeatureCards = ({ language, onNavigateToTab, onVideoCall }: MainFeatureCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Doctor Appointment Booking */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
            <Stethoscope className="h-5 w-5" />
            {language === "en" ? "Book Doctor Appointment" : "ವೈದ್ಯರ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-blue-600 mb-4">
            {language === "en" 
              ? "Find doctors near Hassan & Holenarasipura and book appointments instantly" 
              : "ಹಾಸನ್ ಮತ್ತು ಹೊಳೆನರಸೀಪುರ ಸಮೀಪದ ವೈದ್ಯರನ್ನು ಹುಡುಕಿ ಮತ್ತು ತಕ್ಷಣ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"}
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-blue-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{language === "en" ? "8+ doctors available now" : "8+ ವೈದ್ಯರು ಈಗ ಲಭ್ಯ"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{language === "en" ? "Instant confirmation" : "ತಕ್ಷಣ ದೃಢೀಕರಣ"}</span>
            </div>
          </div>
          <Button 
            onClick={() => onNavigateToTab("doctors")}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <Calendar className="h-4 w-4 mr-2" />
            {language === "en" ? "Book Appointment" : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"}
          </Button>
        </CardContent>
      </Card>

      {/* Video Call with Doctor */}
      <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
            <Video className="h-5 w-5" />
            {language === "en" ? "Video Call with Doctor" : "ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-purple-600 mb-4">
            {language === "en" 
              ? "Start instant video consultation with available doctors" 
              : "ಲಭ್ಯವಿರುವ ವೈದ್ಯರೊಂದಿಗೆ ತಕ್ಷಣ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ ಪ್ರಾರಂಭಿಸಿ"}
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-purple-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{language === "en" ? "Dr. Ramesh - Available now" : "ಡಾ. ರಮೇಶ್ - ಈಗ ಲಭ್ಯ"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-600">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>{language === "en" ? "Secure & encrypted calls" : "ಸುರಕ್ಷಿತ ಮತ್ತು ಗುಪ್ತ ಕರೆಗಳು"}</span>
            </div>
          </div>
          <Button 
            onClick={onVideoCall}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            <Video className="h-4 w-4 mr-2" />
            {language === "en" ? "Start Video Call" : "ವೀಡಿಯೊ ಕಾಲ್ ಪ್ರಾರಂಭಿಸಿ"}
          </Button>
        </CardContent>
      </Card>

      {/* Emergency & Ambulance Services */}
      <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:shadow-lg transition-shadow">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-red-800 flex items-center gap-2">
            <Ambulance className="h-5 w-5" />
            {language === "en" ? "Emergency & Ambulance" : "ತುರ್ತು ಮತ್ತು ಆಂಬುಲೆನ್ಸ್"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-red-600 mb-4">
            {language === "en" 
              ? "24/7 emergency services and ambulance booking with live tracking" 
              : "24/7 ತುರ್ತು ಸೇವೆಗಳು ಮತ್ತು ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಜೊತೆ ಆಂಬುಲೆನ್ಸ್ ಬುಕಿಂಗ್"}
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-red-600">
              <Phone className="w-3 h-3" />
              <span>{language === "en" ? "Call 108 for ambulance" : "ಆಂಬುಲೆನ್ಸ್‌ಗಾಗಿ 108 ಗೆ ಕರೆ ಮಾಡಿ"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-red-600">
              <AlertTriangle className="w-3 h-3" />
              <span>{language === "en" ? "Live ambulance tracking" : "ಲೈವ್ ಆಂಬುಲೆನ್ಸ್ ಟ್ರ್ಯಾಕಿಂಗ್"}</span>
            </div>
          </div>
          <Button 
            onClick={() => onNavigateToTab("emergency")}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            <Ambulance className="h-4 w-4 mr-2" />
            {language === "en" ? "Emergency Services" : "ತುರ್ತು ಸೇವೆಗಳು"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MainFeatureCards;
