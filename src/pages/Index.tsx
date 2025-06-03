import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Heart, 
  Phone, 
  Calendar, 
  Users, 
  Search,
  Book,
  Ambulance,
  Mic,
  User,
  Video,
  Pill
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EmergencyButton from "@/components/EmergencyButton";
import ArogyaDiary from "@/components/ArogyaDiary";
import DoctorFinder from "@/components/DoctorFinder";
import FamilyHealth from "@/components/FamilyHealth";
import HealthTips from "@/components/HealthTips";
import AIAssistant from "@/components/AIAssistant";
import AmbulanceService from "@/components/AmbulanceService";
import Profile from "@/components/Profile";
import Telepharmacy from "@/components/Telepharmacy";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [language, setLanguage] = useState("en");
  const [showVideoCall, setShowVideoCall] = useState(false);
  const { toast } = useToast();

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "kn" : "en");
    toast({
      title: language === "en" ? "ಭಾಷೆ ಬದಲಾಯಿಸಲಾಗಿದೆ" : "Language Changed",
      description: language === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಗಿದೆ" : "Switched to English"
    });
  };

  const text = {
    en: {
      title: "Arogya Mitra",
      subtitle: "Your Village Health Companion",
      welcomeMessage: "Namaste Shreyas! How can we help your family today?",
      emergency: "Emergency Help",
      findDoctor: "Find Doctor",
      ambulance: "Ambulance",
      telepharmacy: "Pharmacy",
      diary: "Arogya Diary",
      family: "Family Health",
      tips: "Health Tips",
      assistant: "Ask Health Query",
      profile: "Profile",
      videoCall: "Video Call Doctor",
      callInProgress: "Call in Progress..."
    },
    kn: {
      title: "ಆರೋಗ್ಯ ಮಿತ್ರ",
      subtitle: "ನಿಮ್ಮ ಹಳ್ಳಿಯ ಆರೋಗ್ಯ ಸಹಾಯಕ",
      welcomeMessage: "ನಮಸ್ತೆ ಶ್ರೇಯಸ್! ಇಂದು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      emergency: "ತುರ್ತು ಸಹಾಯ",
      findDoctor: "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
      ambulance: "ಆಂಬುಲೆನ್ಸ್",
      telepharmacy: "ಔಷಧಾಲಯ",
      diary: "ಆರೋಗ್ಯ ಡೈರಿ",
      family: "ಕುಟುಂಬದ ಆರೋಗ್ಯ",
      tips: "ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
      assistant: "ಆರೋಗ್ಯ ಪ್ರಶ್ನೆ ಕೇಳಿ",
      profile: "ಪ್ರೊಫೈಲ್",
      videoCall: "ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್",
      callInProgress: "ಕಾಲ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ..."
    }
  };

  const currentText = text[language];

  const handleNavigateToChat = () => {
    setActiveSection("assistant");
  };

  const handleVideoCall = () => {
    setShowVideoCall(true);
    toast({
      title: language === "en" ? "📹 Connecting to Doctor" : "📹 ವೈದ್ಯರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ",
      description: language === "en" 
        ? "Dr. Ramesh will join shortly" 
        : "ಡಾ. ರಮೇಶ್ ಶೀಘ್ರದಲ್ಲೇ ಸೇರುತ್ತಾರೆ"
    });
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case "diary":
        return <ArogyaDiary language={language} />;
      case "doctor":
        return <DoctorFinder language={language} />;
      case "ambulance":
        return <AmbulanceService language={language} />;
      case "telepharmacy":
        return <Telepharmacy language={language} />;
      case "family":
        return <FamilyHealth language={language} />;
      case "tips":
        return <HealthTips language={language} />;
      case "assistant":
        return <AIAssistant language={language} />;
      case "profile":
        return <Profile language={language} />;
      default:
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="h-8 w-8 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">{currentText.welcomeMessage}</h2>
                    <p className="text-green-600 text-sm">
                      {language === "en" ? "Holenarasipura, Hassan" : "ಹೊಳೆನರಸೀಪುರ, ಹಾಸನ್"}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {language === "en" ? "🌿 Stay Healthy, Stay Happy" : "🌿 ಆರೋಗ್ಯವಾಗಿರಿ, ಸಂತೋಷವಾಗಿರಿ"}
                </Badge>
              </CardContent>
            </Card>

            {/* Emergency Button */}
            <EmergencyButton language={language} />

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection("doctor")}>
                <CardContent className="p-4 text-center">
                  <Search className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">{currentText.findDoctor}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en" ? "Near Hassan" : "ಹಾಸನ್ ಸಮೀಪದಲ್ಲಿ"}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection("ambulance")}>
                <CardContent className="p-4 text-center">
                  <Ambulance className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">{currentText.ambulance}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en" ? "24/7 Available" : "೨೪/೭ ಲಭ್ಯ"}
                  </p>
                </CardContent>
              </Card>

              <Dialog open={showVideoCall} onOpenChange={setShowVideoCall}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={handleVideoCall}>
                    <CardContent className="p-4 text-center">
                      <Video className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <h3 className="font-medium text-gray-800">{currentText.videoCall}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {language === "en" ? "Consult Online" : "ಆನ್‌ಲೈನ್ ಸಲಹೆ"}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>{currentText.videoCall}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Video className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm">{currentText.callInProgress}</p>
                        <p className="text-xs opacity-75 mt-1">
                          {language === "en" ? "Dr. Ramesh - Hassan PHC" : "ಡಾ. ರಮೇಶ್ - ಹಾಸನ್ PHC"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button variant="destructive" onClick={() => setShowVideoCall(false)}>
                        {language === "en" ? "End Call" : "ಕಾಲ್ ಕೊನೆಗೊಳಿಸಿ"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection("telepharmacy")}>
                <CardContent className="p-4 text-center">
                  <Pill className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">{currentText.telepharmacy}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en" ? "Find Medicines" : "ಔಷಧಗಳನ್ನು ಹುಡುಕಿ"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection("diary")}>
                <CardContent className="p-4 text-center">
                  <Book className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">{currentText.diary}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en" ? "Health Records" : "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು"}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection("tips")}>
                <CardContent className="p-4 text-center">
                  <Heart className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">{currentText.tips}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en" ? "Health Education" : "ಆರೋಗ್ಯ ಶಿಕ್ಷಣ"}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Health Tips Today */}
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-orange-800 mb-2">
                  {language === "en" ? "🌟 Today's Health Tip" : "🌟 ಇಂದಿನ ಆರೋಗ್ಯ ಸಲಹೆ"}
                </h3>
                <p className="text-sm text-orange-700">
                  {language === "en" 
                    ? "Drink warm water with honey and lemon in the morning for better digestion and immunity."
                    : "ಉತ್ತಮ ಜೀರಣಕ್ರಿಯೆ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಗಾಗಿ ಬೆಳಿಗ್ಗೆ ಜೇನು ಮತ್ತು ನಿಂಬೆಯೊಂದಿಗೆ ಬೆಚ್ಚಗಿನ ನೀರು ಕುಡಿಯಿರಿ."
                  }
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="mt-2 border-orange-300 text-orange-700 hover:bg-orange-100"
                  onClick={() => setActiveSection("tips")}
                >
                  {language === "en" ? "More Tips" : "ಇನ್ನಷ್ಟು ಸಲಹೆಗಳು"}
                </Button>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-green-800">{currentText.title}</h1>
                <p className="text-xs text-green-600">{currentText.subtitle}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              {language === "en" ? "ಕನ್ನಡ" : "English"}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {renderActiveSection()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-around py-2">
            <Button
              variant={activeSection === "dashboard" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("dashboard")}
              className={`flex-col h-auto py-2 px-2 ${
                activeSection === "dashboard" 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              <Heart className="h-4 w-4 mb-1" />
              <span className="text-xs">
                {language === "en" ? "Home" : "ಮನೆ"}
              </span>
            </Button>

            <Button
              variant={activeSection === "family" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("family")}
              className={`flex-col h-auto py-2 px-2 ${
                activeSection === "family" 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              <Users className="h-4 w-4 mb-1" />
              <span className="text-xs">{currentText.family}</span>
            </Button>

            <Button
              variant={activeSection === "assistant" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("assistant")}
              className={`flex-col h-auto py-2 px-2 ${
                activeSection === "assistant" 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              <Mic className="h-4 w-4 mb-1" />
              <span className="text-xs">
                {language === "en" ? "Ask" : "ಕೇಳಿ"}
              </span>
            </Button>

            <Button
              variant={activeSection === "profile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("profile")}
              className={`flex-col h-auto py-2 px-2 ${
                activeSection === "profile" 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              <User className="h-4 w-4 mb-1" />
              <span className="text-xs">{currentText.profile}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Padding for bottom navigation */}
      <div className="h-16"></div>
    </div>
  );
};

export default Index;
