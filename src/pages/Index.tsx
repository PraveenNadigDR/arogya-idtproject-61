
import Header from "@/components/Header";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import HealthTips from "@/components/HealthTips";
import AIAssistant from "@/components/AIAssistant";
import DoctorFinder from "@/components/DoctorFinder";
import EmergencyServices from "@/components/EmergencyServices";
import Profile from "@/components/Profile";
import FamilyHealth from "@/components/FamilyHealth";
import ArogyaDiary from "@/components/ArogyaDiary";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Activity, Stethoscope, AlertTriangle, Video, Calendar, Ambulance, Phone, User } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showVideoCall, setShowVideoCall] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const navigateToTab = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const handleVideoCall = () => {
    setShowVideoCall(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
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

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Doctors" : "ವೈದ್ಯರು"}</span>
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}</span>
            </TabsTrigger>
            <TabsTrigger value="emergency" className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Emergency" : "ತುರ್ತು"}</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Profile" : "ಪ್ರೊಫೈಲ್"}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            {/* Main Features - Doctor Booking, Video Call & Emergency */}
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
                    onClick={() => navigateToTab("doctors")}
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
                    onClick={handleVideoCall}
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
                    onClick={() => navigateToTab("emergency")}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <Ambulance className="h-4 w-4 mr-2" />
                    {language === "en" ? "Emergency Services" : "ತುರ್ತು ಸೇವೆಗಳು"}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <QuickHealthCheck language={language} />
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                <HealthTips language={language} />
                
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {language === "en" ? "Quick AI Chat" : "ತ್ವರಿತ AI ಚಾಟ್"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-600 mb-3">
                      {language === "en" 
                        ? "Get instant health advice and answers" 
                        : "ತತ್ಕ್ಷಣ ಆರೋಗ್ಯ ಸಲಹೆ ಮತ್ತು ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ"}
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => navigateToTab("ai-assistant")}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
                      >
                        {language === "en" ? "Start Chat" : "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="doctors" className="mt-6">
            <DoctorFinder language={language} />
          </TabsContent>

          <TabsContent value="ai-assistant" className="mt-6">
            <AIAssistant language={language} />
          </TabsContent>

          <TabsContent value="emergency" className="mt-6">
            <EmergencyServices language={language} />
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <div className="space-y-6">
              {/* Profile Section */}
              <Profile language={language} />
              
              {/* Family Health Section */}
              <FamilyHealth language={language} />
              
              {/* Arogya Diary Section */}
              <ArogyaDiary language={language} />
            </div>
          </TabsContent>
        </Tabs>

        {/* Video Call Dialog */}
        <Dialog open={showVideoCall} onOpenChange={setShowVideoCall}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {language === "en" ? "Video Call with Doctor" : "ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">
                    {language === "en" ? "Call in Progress..." : "ಕಾಲ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ..."}
                  </p>
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

        {/* Language Selection */}
        <div className="mt-8 text-center">
          <button
            onClick={() => handleLanguageChange("en")}
            className={`px-4 py-2 rounded-full ${
              language === "en"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } mr-2`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange("kn")}
            className={`px-4 py-2 rounded-full ${
              language === "kn"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
