
import Header from "@/components/Header";
import QuickHealthCheck from "@/components/QuickHealthCheck";
import HealthTips from "@/components/HealthTips";
import AIAssistant from "@/components/AIAssistant";
import DoctorFinder from "@/components/DoctorFinder";
import EmergencyServices from "@/components/EmergencyServices";
import Profile from "@/components/Profile";
import FamilyHealth from "@/components/FamilyHealth";
import ArogyaDiary from "@/components/ArogyaDiary";
import DashboardHeader from "@/components/DashboardHeader";
import MainFeatureCards from "@/components/MainFeatureCards";
import QuickActionsCard from "@/components/QuickActionsCard";
import VideoCallDialog from "@/components/VideoCallDialog";
import LanguageSelector from "@/components/LanguageSelector";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Activity, Stethoscope, AlertTriangle } from "lucide-react";

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

  const handleNavigateToProfile = () => {
    setActiveTab("profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Header onNavigateToProfile={handleNavigateToProfile} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <div className="animate-fade-in">
          <DashboardHeader language={language} />
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm border border-white/20 shadow-lg rounded-xl p-1">
            <TabsTrigger 
              value="dashboard" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="doctors" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              <Stethoscope className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Doctors" : "ವೈದ್ಯರು"}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="ai-assistant" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="emergency" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white transition-all duration-300 rounded-lg"
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "en" ? "Emergency" : "ತುರ್ತು"}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-8 animate-fade-in">
            <MainFeatureCards 
              language={language} 
              onNavigateToTab={navigateToTab}
              onVideoCall={handleVideoCall}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <QuickHealthCheck language={language} />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <HealthTips language={language} />
                </div>
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <QuickActionsCard 
                    language={language}
                    onNavigateToTab={navigateToTab}
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="doctors" className="mt-8 animate-fade-in">
            <DoctorFinder language={language} />
          </TabsContent>

          <TabsContent value="ai-assistant" className="mt-8 animate-fade-in">
            <AIAssistant language={language} />
          </TabsContent>

          <TabsContent value="emergency" className="mt-8 animate-fade-in">
            <EmergencyServices language={language} />
          </TabsContent>

          <TabsContent value="profile" className="mt-8 animate-fade-in">
            <div className="space-y-8">
              <Profile language={language} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <FamilyHealth language={language} />
                </div>
                <div className="transform hover:scale-[1.02] transition-transform duration-300">
                  <ArogyaDiary language={language} />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <VideoCallDialog 
          showVideoCall={showVideoCall}
          onOpenChange={setShowVideoCall}
          language={language}
        />

        <LanguageSelector 
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </div>
  );
};

export default Index;
