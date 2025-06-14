
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
  Pill,
  Activity,
  Clock,
  MapPin,
  Star,
  Zap,
  Sun,
  Droplets,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EmergencyButton from "@/components/EmergencyButton";
import EmergencyServices from "@/components/EmergencyServices";
import ArogyaDiary from "@/components/ArogyaDiary";
import DoctorFinder from "@/components/DoctorFinder";
import FamilyHealth from "@/components/FamilyHealth";
import HealthTips from "@/components/HealthTips";
import AIAssistant from "@/components/AIAssistant";
import AmbulanceService from "@/components/AmbulanceService";
import Profile from "@/components/Profile";
import Telepharmacy from "@/components/Telepharmacy";
import WeatherWidget from "@/components/WeatherWidget";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import HealthMetrics from "@/components/HealthMetrics";
import MedicineReminder from "@/components/MedicineReminder";

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
      emergencyServices: "Emergency",
      findDoctor: "Find Doctor",
      ambulance: "Ambulance",
      telepharmacy: "Pharmacy",
      diary: "Arogya Diary",
      family: "Family Health",
      tips: "Health Tips",
      assistant: "Ask Health Query",
      profile: "Profile",
      videoCall: "Video Call Doctor",
      callInProgress: "Call in Progress...",
      quickActions: "Quick Actions",
      healthServices: "Health Services",
      todaysTip: "Today's Health Tip",
      moreTips: "More Tips",
      healthStatus: "Health Status",
      lastCheckup: "Last Checkup",
      nextAppointment: "Next Appointment",
      medicineReminder: "Medicine Reminder",
      quickCheck: "Quick Health Check",
      todaysMetrics: "Today's Metrics"
    },
    kn: {
      title: "ಆರೋಗ್ಯ ಮಿತ್ರ",
      subtitle: "ನಿಮ್ಮ ಹಳ್ಳಿಯ ಆರೋಗ್ಯ ಸಹಾಯಕ",
      welcomeMessage: "ನಮಸ್ತೆ ಶ್ರೇಯಸ್! ಇಂದು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      emergency: "ತುರ್ತು ಸಹಾಯ",
      emergencyServices: "ತುರ್ತು",
      findDoctor: "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
      ambulance: "ಆಂಬುಲೆನ್ಸ್",
      telepharmacy: "ಔಷಧಾಲಯ",
      diary: "ಆರೋಗ್ಯ ಡೈರಿ",
      family: "ಕುಟುಂಬದ ಆರೋಗ್ಯ",
      tips: "ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
      assistant: "ಆರೋಗ್ಯ ಪ್ರಶ್ನೆ ಕೇಳಿ",
      profile: "ಪ್ರೊಫೈಲ್",
      videoCall: "ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್",
      callInProgress: "ಕಾಲ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ...",
      quickActions: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
      healthServices: "ಆರೋಗ್ಯ ಸೇವೆಗಳು",
      todaysTip: "ಇಂದಿನ ಆರೋಗ್ಯ ಸಲಹೆ",
      moreTips: "ಇನ್ನಷ್ಟು ಸಲಹೆಗಳು",
      healthStatus: "ಆರೋಗ್ಯ ಸ್ಥಿತಿ",
      lastCheckup: "ಕೊನೆಯ ಪರೀಕ್ಷೆ",
      nextAppointment: "ಮುಂದಿನ ಅಪಾಯಿಂಟ್ಮೆಂಟ್",
      medicineReminder: "ಔಷಧ ಜ್ಞಾಪನೆ",
      quickCheck: "ತ್ವರಿತ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆ",
      todaysMetrics: "ಇಂದಿನ ಮಾಪಕಗಳು"
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
      case "emergency":
        return <EmergencyServices language={language} />;
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
            {/* Enhanced Welcome Section with Health Status */}
            <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-200 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-3xl shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-green-800 mb-1">{currentText.welcomeMessage}</h2>
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{language === "en" ? "Holenarasipura, Hassan" : "ಹೊಳೆನರಸೀಪುರ, ಹಾಸನ್"}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-green-700 mb-1">
                      <Activity className="h-5 w-5" />
                      <span className="text-lg font-bold">98%</span>
                    </div>
                    <p className="text-xs text-green-600">{currentText.healthStatus}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm">
                    <Calendar className="h-5 w-5 text-green-600 mx-auto mb-2" />
                    <p className="text-xs text-green-700 font-medium">{currentText.lastCheckup}</p>
                    <p className="text-xs text-green-600 font-semibold">Jan 15</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm">
                    <Clock className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                    <p className="text-xs text-blue-700 font-medium">{currentText.nextAppointment}</p>
                    <p className="text-xs text-blue-600 font-semibold">Jan 25</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center shadow-sm">
                    <Pill className="h-5 w-5 text-orange-600 mx-auto mb-2" />
                    <p className="text-xs text-orange-700 font-medium">{currentText.medicineReminder}</p>
                    <p className="text-xs text-orange-600 font-semibold">2 pills</p>
                  </div>
                </div>

                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 px-3 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  {language === "en" ? "🌿 Stay Healthy, Stay Happy" : "🌿 ಆರೋಗ್ಯವಾಗಿರಿ, ಸಂತೋಷವಾಗಿರಿ"}
                </Badge>
              </CardContent>
            </Card>

            {/* Weather Widget */}
            <WeatherWidget language={language} />

            {/* Emergency Button with Enhanced Design */}
            <EmergencyButton language={language} />

            {/* Quick Health Check */}
            <QuickHealthCheck language={language} />

            {/* Health Metrics Dashboard */}
            <HealthMetrics language={language} />

            {/* Medicine Reminder */}
            <MedicineReminder language={language} />

            {/* Quick Actions Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">{currentText.quickActions}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden relative" onClick={() => setActiveSection("doctor")}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                  <CardContent className="p-4 text-center relative">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-blue-800">{currentText.findDoctor}</h3>
                    <p className="text-xs text-blue-600 mt-1">
                      {language === "en" ? "12 doctors nearby" : "12 ವೈದ್ಯರು ಹತ್ತಿರದಲ್ಲಿ"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-red-100 bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden relative" onClick={() => setActiveSection("ambulance")}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                  <CardContent className="p-4 text-center relative">
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg">
                      <Ambulance className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-800">{currentText.ambulance}</h3>
                    <p className="text-xs text-red-600 mt-1">
                      {language === "en" ? "Available 24/7" : "೨೪/೭ ಲಭ್ಯ"}
                    </p>
                  </CardContent>
                </Card>

                <Dialog open={showVideoCall} onOpenChange={setShowVideoCall}>
                  <DialogTrigger asChild>
                    <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden relative" onClick={handleVideoCall}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                      <CardContent className="p-4 text-center relative">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg">
                          <Video className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-green-800">{currentText.videoCall}</h3>
                        <p className="text-xs text-green-600 mt-1">
                          {language === "en" ? "Instant consultation" : "ತಕ್ಷಣ ಸಲಹೆ"}
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

                <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-purple-100 bg-gradient-to-br from-purple-50 to-violet-50 overflow-hidden relative" onClick={() => setActiveSection("telepharmacy")}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                  <CardContent className="p-4 text-center relative">
                    <div className="bg-gradient-to-br from-purple-500 to-violet-600 p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg">
                      <Pill className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-purple-800">{currentText.telepharmacy}</h3>
                    <p className="text-xs text-purple-600 mt-1">
                      {language === "en" ? "Order medicines" : "ಔಷಧಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Health Services Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-semibold text-gray-800">{currentText.healthServices}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-50 overflow-hidden relative" onClick={() => setActiveSection("diary")}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                  <CardContent className="p-4 text-center relative">
                    <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg">
                      <Book className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-emerald-800">{currentText.diary}</h3>
                    <p className="text-xs text-emerald-600 mt-1">
                      {language === "en" ? "Track your health" : "ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden relative" onClick={() => setActiveSection("tips")}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                  <CardContent className="p-4 text-center relative">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-xl mx-auto mb-3 w-fit shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-orange-800">{currentText.tips}</h3>
                    <p className="text-xs text-orange-600 mt-1">
                      {language === "en" ? "Health education" : "ಆರೋಗ್ಯ ಶಿಕ್ಷಣ"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced Health Tips Section */}
            <Card className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 border-yellow-200 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full -translate-y-16 translate-x-16"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-orange-400 to-yellow-500 p-3 rounded-2xl shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-orange-800 text-lg">{currentText.todaysTip}</h3>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-sm">
                  <p className="text-sm text-orange-700 leading-relaxed">
                    {language === "en" 
                      ? "💧 Drink warm water with honey and lemon in the morning for better digestion and immunity. This simple remedy helps cleanse your system and boosts energy levels naturally."
                      : "💧 ಉತ್ತಮ ಜೀರಣಕ್ರಿಯೆ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಗಾಗಿ ಬೆಳಿಗ್ಗೆ ಜೇನು ಮತ್ತು ನಿಂಬೆಯೊಂದಿಗೆ ಬೆಚ್ಚಗಿನ ನೀರು ಕುಡಿಯಿರಿ. ಈ ಸರಳ ಪರಿಹಾರವು ನಿಮ್ಮ ವ್ಯವಸ್ಥೆಯನ್ನು ಶುದ್ಧೀಕರಿಸಲು ಮತ್ತು ನೈಸರ್ಗಿಕವಾಗಿ ಶಕ್ತಿಯ ಮಟ್ಟವನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
                    }
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg"
                    onClick={() => setActiveSection("tips")}
                  >
                    <Heart className="h-4 w-4 mr-1" />
                    {currentText.moreTips}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-orange-300 text-orange-700 hover:bg-orange-100"
                  >
                    <Star className="h-4 w-4 mr-1" />
                    {language === "en" ? "Save Tip" : "ಸಲಹೆ ಉಳಿಸಿ"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-xl border-b border-green-100 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-3xl shadow-xl">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  {currentText.title}
                </h1>
                <p className="text-xs text-green-600 font-medium">{currentText.subtitle}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-green-300 text-green-700 hover:bg-green-50 font-medium shadow-md hover:shadow-lg transition-all duration-200"
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

      {/* Enhanced Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-2xl">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-around py-3">
            <Button
              variant={activeSection === "dashboard" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("dashboard")}
              className={`flex-col h-auto py-2 px-3 transition-all duration-300 ${
                activeSection === "dashboard" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-xl scale-110" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <Heart className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">
                {language === "en" ? "Home" : "ಮನೆ"}
              </span>
            </Button>

            <Button
              variant={activeSection === "emergency" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("emergency")}
              className={`flex-col h-auto py-2 px-3 transition-all duration-300 ${
                activeSection === "emergency" 
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-xl scale-110" 
                  : "text-gray-600 hover:text-red-600 hover:bg-red-50"
              }`}
            >
              <AlertTriangle className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{currentText.emergencyServices}</span>
            </Button>

            <Button
              variant={activeSection === "assistant" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("assistant")}
              className={`flex-col h-auto py-2 px-3 transition-all duration-300 ${
                activeSection === "assistant" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-xl scale-110" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <Mic className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">
                {language === "en" ? "Ask" : "ಕೇಳಿ"}
              </span>
            </Button>

            <Button
              variant={activeSection === "profile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("profile")}
              className={`flex-col h-auto py-2 px-3 transition-all duration-300 ${
                activeSection === "profile" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-xl scale-110" 
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <User className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{currentText.profile}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Padding for bottom navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
