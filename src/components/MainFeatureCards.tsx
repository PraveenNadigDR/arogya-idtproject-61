
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
        <Card className="group card-interactive animate-fade-in stagger-1 cursor-pointer relative overflow-hidden border-0 shadow-soft hover:shadow-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <Stethoscope className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">{currentText.quickConsult}</CardTitle>
            <p className="text-sm text-muted-foreground">{currentText.consultDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={() => onNavigateToTab('doctors')}
              className="btn-warm w-full border-0"
            >
              <Heart className="h-4 w-4 mr-2" />
              {currentText.consultNow}
            </Button>
          </CardContent>
        </Card>

        {/* Book Appointment */}
        <Card className="group card-interactive animate-fade-in stagger-2 cursor-pointer relative overflow-hidden border-0 shadow-soft hover:shadow-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <Calendar className="h-6 w-6 text-accent-foreground" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">{currentText.bookAppointment}</CardTitle>
            <p className="text-sm text-muted-foreground">{currentText.appointmentDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={() => onNavigateToTab('doctors')}
              className="btn-warm w-full border-0"
            >
              <Clock className="h-4 w-4 mr-2" />
              {currentText.bookNow}
            </Button>
          </CardContent>
        </Card>

        {/* AI Assistant */}
        <Card className="group card-interactive animate-fade-in stagger-3 cursor-pointer relative overflow-hidden border-0 shadow-soft hover:shadow-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">{currentText.aiAssistant}</CardTitle>
            <p className="text-sm text-muted-foreground">{currentText.aiDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={() => onNavigateToTab('ai-assistant')}
              className="btn-warm w-full border-0"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {currentText.chatNow}
            </Button>
          </CardContent>
        </Card>

        {/* Video Call */}
        <Card className="group card-interactive animate-fade-in stagger-4 cursor-pointer relative overflow-hidden border-0 shadow-soft hover:shadow-warm">
          <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="pb-3 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-warning to-accent rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <Phone className="h-6 w-6 text-warning-foreground" />
            </div>
            <CardTitle className="text-lg font-bold text-foreground">{currentText.videoCall}</CardTitle>
            <p className="text-sm text-muted-foreground">{currentText.videoDesc}</p>
          </CardHeader>
          <CardContent className="relative z-10">
            <Button 
              onClick={onVideoCall}
              className="btn-warm w-full border-0"
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
