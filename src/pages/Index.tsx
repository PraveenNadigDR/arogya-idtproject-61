
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
import { MessageCircle, Activity, Stethoscope, AlertTriangle, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce-slow delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-green-400/30 rounded-full animate-bounce-slow delay-2000"></div>
      </div>
      
      <Header onNavigateToProfile={handleNavigateToProfile} />
      
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-7xl relative z-10">
        <div className="animate-slide-down">
          <DashboardHeader language={language} />
        </div>

        {/* Enhanced Main Content Tabs - Mobile Responsive */}
        <div className="mb-4 sm:mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-4 sm:mb-8">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 bg-white/80 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-1 sm:p-2 ring-1 ring-black/5 w-full max-w-2xl">
                <TabsTrigger 
                  value="dashboard" 
                  className="flex items-center gap-1 sm:gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-500 rounded-xl px-2 sm:px-6 py-2 sm:py-3 font-medium hover:bg-gray-50 group text-xs sm:text-sm"
                >
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse" />
                  <span className="hidden sm:inline">{language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}</span>
                  <span className="sm:hidden">{language === "en" ? "Home" : "ಮನೆ"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="doctors" 
                  className="flex items-center gap-1 sm:gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-500 rounded-xl px-2 sm:px-6 py-2 sm:py-3 font-medium hover:bg-gray-50 group text-xs sm:text-sm"
                >
                  <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse" />
                  <span className="hidden sm:inline">{language === "en" ? "Doctors" : "ವೈದ್ಯರು"}</span>
                  <span className="sm:hidden">{language === "en" ? "Docs" : "ವೈದ್ಯ"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ai-assistant" 
                  className="flex items-center gap-1 sm:gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-500 rounded-xl px-2 sm:px-6 py-2 sm:py-3 font-medium hover:bg-gray-50 group relative text-xs sm:text-sm"
                >
                  <div className="relative">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse" />
                    <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 absolute -top-1 -right-1 text-purple-500 group-data-[state=active]:text-yellow-300 animate-pulse" />
                  </div>
                  <span className="hidden sm:inline">{language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}</span>
                  <span className="sm:hidden">{language === "en" ? "AI" : "AI"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="emergency" 
                  className="flex items-center gap-1 sm:gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-500 rounded-xl px-2 sm:px-6 py-2 sm:py-3 font-medium hover:bg-gray-50 group text-xs sm:text-sm"
                >
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse" />
                  <span className="hidden sm:inline">{language === "en" ? "Emergency" : "ತುರ್ತು"}</span>
                  <span className="sm:hidden">{language === "en" ? "SOS" : "ತುರ್ತು"}</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard" className="mt-0">
              <div className="animate-fade-in-up space-y-4 sm:space-y-8">
                <MainFeatureCards 
                  language={language} 
                  onNavigateToTab={navigateToTab}
                  onVideoCall={handleVideoCall}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  {/* Left Column */}
                  <div className="space-y-4 sm:space-y-8">
                    <div className="transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                      <QuickHealthCheck language={language} />
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-4 sm:space-y-8">
                    <div className="transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                      <HealthTips language={language} />
                    </div>
                    <div className="transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                      <QuickActionsCard 
                        language={language}
                        onNavigateToTab={navigateToTab}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="doctors" className="mt-0 animate-fade-in-up">
              <DoctorFinder language={language} />
            </TabsContent>

            <TabsContent value="ai-assistant" className="mt-0 animate-fade-in-up">
              <AIAssistant language={language} />
            </TabsContent>

            <TabsContent value="emergency" className="mt-0 animate-fade-in-up">
              <EmergencyServices language={language} />
            </TabsContent>

            <TabsContent value="profile" className="mt-0 animate-fade-in-up">
              <div className="space-y-4 sm:space-y-8">
                <Profile language={language} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
                  <div className="transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                    <FamilyHealth language={language} />
                  </div>
                  <div className="transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                    <ArogyaDiary language={language} />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

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
