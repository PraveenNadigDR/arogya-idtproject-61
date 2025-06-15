
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import ArogyaDiary from "@/components/ArogyaDiary";
import MedicineReminder from "@/components/MedicineReminder";
import MedicineTracker from "@/components/MedicineTracker";
import FamilyHealth from "@/components/FamilyHealth";
import AIAssistant from "@/components/AIAssistant";
import DoctorFinder from "@/components/DoctorFinder";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Pill, Activity, User, BookOpen, Stethoscope } from "lucide-react";

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
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard" className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              {language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex items-center gap-1">
              <Stethoscope className="h-4 w-4" />
              {language === "en" ? "Doctors" : "ವೈದ್ಯರು"}
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              {language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}
            </TabsTrigger>
            <TabsTrigger value="medicine" className="flex items-center gap-1">
              <Pill className="h-4 w-4" />
              {language === "en" ? "Medicines" : "ಔಷಧಗಳು"}
            </TabsTrigger>
            <TabsTrigger value="family" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {language === "en" ? "Family" : "ಕುಟುಂಬ"}
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {language === "en" ? "Profile" : "ಪ್ರೊಫೈಲ್"}
            </TabsTrigger>
            <TabsTrigger value="diary" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {language === "en" ? "Diary" : "ಡೈರಿ"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Health Check */}
              <div className="space-y-4">
                <QuickHealthCheck language={language} />
              </div>
              
              {/* Medicine Reminder */}
              <div className="space-y-4">
                <MedicineReminder language={language} />
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

          <TabsContent value="profile" className="mt-6">
            <Profile language={language} />
          </TabsContent>

          <TabsContent value="diary" className="mt-6">
            <ArogyaDiary language={language} />
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
