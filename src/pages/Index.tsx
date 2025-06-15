
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import ArogyaDiary from "@/components/ArogyaDiary";
import LocationTracker from "@/components/LocationTracker";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
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

        {/* Main Content */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">
              {language === "en" ? "My Profile" : "ನನ್ನ ಪ್ರೊಫೈಲ್"}
            </TabsTrigger>
            <TabsTrigger value="healthcheck">
              {language === "en" ? "Health Check" : "ಆರೋಗ್ಯ ತಪಾಸಣೆ"}
            </TabsTrigger>
            <TabsTrigger value="diary">
              {language === "en" ? "Arogya Diary" : "ಆರೋಗ್ಯ ಡೈರಿ"}
            </TabsTrigger>
            <TabsTrigger value="location">
              {language === "en" ? "GPS Tracker" : "GPS ಟ್ರ್ಯಾಕರ್"}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Profile language={language} />
          </TabsContent>
          <TabsContent value="healthcheck">
            <QuickHealthCheck language={language} />
          </TabsContent>
          <TabsContent value="diary">
            <ArogyaDiary language={language} />
          </TabsContent>
          <TabsContent value="location">
            <LocationTracker language={language} />
          </TabsContent>
        </Tabs>

        {/* Language Selection */}
        <div className="mt-6 text-center">
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
