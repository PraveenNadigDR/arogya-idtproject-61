
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import ArogyaDiary from "@/components/ArogyaDiary";
import MedicineReminder from "@/components/MedicineReminder";
import MedicineTracker from "@/components/MedicineTracker";
import FamilyHealth from "@/components/FamilyHealth";
import AIAssistant from "@/components/AIAssistant";
import DoctorFinder from "@/components/DoctorFinder";
import EmergencyServices from "@/components/EmergencyServices";
import HealthTips from "@/components/HealthTips";
import WeatherWidget from "@/components/WeatherWidget";
import HealthMetrics from "@/components/HealthMetrics";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Pill, Activity, User, BookOpen, Stethoscope, AlertTriangle, TrendingUp, Cloud } from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
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
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-7 lg:grid-cols-10">
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
            <TabsTrigger value="medicine" className="flex items-center gap-1">
              <Pill className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Medicines" : "ಔಷಧಗಳು"}</span>
            </TabsTrigger>
            <TabsTrigger value="family" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Family" : "ಕುಟುಂಬ"}</span>
            </TabsTrigger>
            <TabsTrigger value="emergency" className="flex items-center gap-1">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Emergency" : "ತುರ್ತು"}</span>
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Metrics" : "ಮಾಪಕಗಳು"}</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Profile" : "ಪ್ರೊಫೈಲ್"}</span>
            </TabsTrigger>
            <TabsTrigger value="diary" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Diary" : "ಡೈರಿ"}</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-1">
              <Cloud className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Weather" : "ಹವಾಮಾನ"}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <QuickHealthCheck language={language} />
                <HealthTips language={language} />
              </div>
              
              {/* Middle Column */}
              <div className="space-y-6">
                <MedicineReminder language={language} />
                <WeatherWidget language={language} />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <EmergencyServices language={language} />
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
                      <button 
                        onClick={() => {
                          const tabsTrigger = document.querySelector('[value="ai-assistant"]') as HTMLElement;
                          tabsTrigger?.click();
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
                      >
                        {language === "en" ? "Start Chat" : "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}
                      </button>
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

          <TabsContent value="medicine" className="mt-6">
            <MedicineTracker language={language} />
          </TabsContent>

          <TabsContent value="family" className="mt-6">
            <FamilyHealth language={language} />
          </TabsContent>

          <TabsContent value="emergency" className="mt-6">
            <EmergencyServices language={language} />
          </TabsContent>

          <TabsContent value="metrics" className="mt-6">
            <HealthMetrics language={language} />
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <Profile language={language} />
          </TabsContent>

          <TabsContent value="diary" className="mt-6">
            <ArogyaDiary language={language} />
          </TabsContent>

          <TabsContent value="weather" className="mt-6">
            <WeatherWidget language={language} />
          </TabsContent>
        </Tabs>

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
