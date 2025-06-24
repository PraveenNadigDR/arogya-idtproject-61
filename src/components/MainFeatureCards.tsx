
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Clock, 
  Stethoscope,
  MapPin,
  Hospital 
} from "lucide-react";
import HospitalMap from "./HospitalMap";

interface MainFeatureCardsProps {
  language: string;
  onNavigateToTab: (tab: string) => void;
  onVideoCall: () => void;
}

const MainFeatureCards = ({ language, onNavigateToTab, onVideoCall }: MainFeatureCardsProps) => {
  const text = {
    en: {
      quickConsult: "Quick Consult",
      consultDesc: "Connect with doctors instantly",
      bookAppointment: "Book Appointment",
      appointmentDesc: "Schedule with specialists",
      aiAssistant: "AI Health Assistant",
      aiDesc: "Get instant health guidance",
      videoCall: "Video Consultation",
      videoDesc: "Face-to-face medical consultation",
      consultNow: "Consult Now",
      bookNow: "Book Now",
      chatNow: "Chat Now",
      startCall: "Start Call",
      nearbyHospitals: "Nearby Hospitals",
      hospitalsDesc: "Find medical centers around you"
    },
    kn: {
      quickConsult: "ತ್ವರಿತ ಸಮಾಲೋಚನೆ",
      consultDesc: "ವೈದ್ಯರೊಂದಿಗೆ ತಕ್ಷಣ ಸಂಪರ್ಕಿಸಿ",
      bookAppointment: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      appointmentDesc: "ತಜ್ಞರೊಂದಿಗೆ ಸಮಯ ನಿಗದಿ ಮಾಡಿ",
      aiAssistant: "AI ಆರೋಗ್ಯ ಸಹಾಯಕ",
      aiDesc: "ತಕ್ಷಣದ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
      videoCall: "ವೀಡಿಯೋ ಸಮಾಲೋಚನೆ",
      videoDesc: "ಮುಖಾಮುಖಿ ವೈದ್ಯಕೀಯ ಸಮಾಲೋಚನೆ",
      consultNow: "ಈಗ ಸಮಾಲೋಚಿಸಿ",
      bookNow: "ಈಗ ಬುಕ್ ಮಾಡಿ",
      chatNow: "ಈಗ ಚಾಟ್ ಮಾಡಿ",
      startCall: "ಕರೆ ಪ್ರಾರಂಭಿಸಿ",
      nearbyHospitals: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು",
      hospitalsDesc: "ನಿಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ವೈದ್ಯಕೀಯ ಕೇಂದ್ರಗಳನ್ನು ಹುಡುಕಿ"
    }
  };

  const currentText = text[language as keyof typeof text];

  return (
    <div className="space-y-6">
      {/* Main Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Quick Consult */}
        <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg font-bold text-slate-800">{currentText.quickConsult}</CardTitle>
            <p className="text-sm text-slate-600">{currentText.consultDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={() => onNavigateToTab('doctors')}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="h-4 w-4 mr-2" />
              {currentText.consultNow}
            </Button>
          </CardContent>
        </Card>

        {/* Book Appointment */}
        <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg font-bold text-slate-800">{currentText.bookAppointment}</CardTitle>
            <p className="text-sm text-slate-600">{currentText.appointmentDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={() => onNavigateToTab('doctors')}
              className="w-full bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Clock className="h-4 w-4 mr-2" />
              {currentText.bookNow}
            </Button>
          </CardContent>
        </Card>

        {/* AI Assistant */}
        <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg font-bold text-slate-800">{currentText.aiAssistant}</CardTitle>
            <p className="text-sm text-slate-600">{currentText.aiDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={() => onNavigateToTab('ai-assistant')}
              className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {currentText.chatNow}
            </Button>
          </CardContent>
        </Card>

        {/* Video Call */}
        <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg font-bold text-slate-800">{currentText.videoCall}</CardTitle>
            <p className="text-sm text-slate-600">{currentText.videoDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={onVideoCall}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              {currentText.startCall}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Hospital Map Section */}
      <div className="mt-8">
        <HospitalMap language={language} />
      </div>
    </div>
  );
};

export default MainFeatureCards;
