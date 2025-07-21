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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showVideoCall, setShowVideoCall] = useState(false);

  // Scroll animation hooks
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const tabsAnimation = useScrollAnimation({ threshold: 0.2 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const leftColumnAnimation = useScrollAnimation({ threshold: 0.1 });
  const rightColumnAnimation = useScrollAnimation({ threshold: 0.1 });

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
      
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-4 lg:py-8 max-w-7xl relative z-10">
        <div 
          ref={headerAnimation.ref}
          className={`scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`}
        >
          <DashboardHeader language={language} />
        </div>

        {/* Enhanced Main Content Tabs - Improved Mobile Design */}
        <div className="mb-3 sm:mb-6 lg:mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div 
              ref={tabsAnimation.ref}
              className={`flex justify-center mb-4 sm:mb-6 lg:mb-8 px-1 sm:px-2 scroll-scale-in ${tabsAnimation.isVisible ? 'visible' : ''}`}
            >
              <TabsList className="grid grid-cols-4 bg-white/95 backdrop-blur-2xl border-0 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-1 sm:p-1.5 ring-1 ring-black/5 w-full max-w-xs sm:max-w-lg lg:max-w-2xl gap-0.5 sm:gap-1 relative overflow-hidden">
                {/* Enhanced background gradient for active state */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-emerald-50/50 rounded-2xl sm:rounded-3xl"></div>
                
                <TabsTrigger 
                  value="dashboard" 
                  className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-700 ease-out rounded-xl sm:rounded-2xl px-1 sm:px-4 py-2 sm:py-3 font-semibold hover:bg-gray-50/80 group text-[8px] sm:text-sm min-h-[48px] sm:min-h-[52px] data-[state=active]:scale-105 hover:scale-102 transform data-[state=active]:shadow-emerald-500/30"
                >
                  <div className="relative">
                    <Activity className="h-3 w-3 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full opacity-0 group-data-[state=active]:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>
                  <span className="text-center leading-tight font-bold tracking-wide">
                    {language === "en" ? "Home" : "ಮನೆ"}
                  </span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="doctors" 
                  className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-700 ease-out rounded-xl sm:rounded-2xl px-1 sm:px-4 py-2 sm:py-3 font-semibold hover:bg-gray-50/80 group text-[8px] sm:text-sm min-h-[48px] sm:min-h-[52px] data-[state=active]:scale-105 hover:scale-102 transform data-[state=active]:shadow-blue-500/30"
                >
                  <div className="relative">
                    <Stethoscope className="h-3 w-3 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-0 group-data-[state=active]:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>
                  <span className="text-center leading-tight font-bold tracking-wide">
                    {language === "en" ? "Doctors" : "ವೈದ್ಯರು"}
                  </span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="ai-assistant" 
                  className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-700 ease-out rounded-xl sm:rounded-2xl px-1 sm:px-4 py-2 sm:py-3 font-semibold hover:bg-gray-50/80 group text-[8px] sm:text-sm min-h-[48px] sm:min-h-[52px] data-[state=active]:scale-105 hover:scale-102 transform data-[state=active]:shadow-purple-500/30"
                >
                  <div className="relative">
                    <MessageCircle className="h-3 w-3 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse transition-transform duration-300 group-hover:scale-110" />
                    <Sparkles className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 absolute -top-0.5 -right-0.5 text-purple-500 group-data-[state=active]:text-yellow-300 animate-pulse transition-colors duration-300" />
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full opacity-0 group-data-[state=active]:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>
                  <span className="text-center leading-tight font-bold tracking-wide">
                    {language === "en" ? "AI" : "AI"}
                  </span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="emergency" 
                  className="relative z-10 flex flex-col items-center justify-center gap-0.5 sm:gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-700 ease-out rounded-xl sm:rounded-2xl px-1 sm:px-4 py-2 sm:py-3 font-semibold hover:bg-gray-50/80 group text-[8px] sm:text-sm min-h-[48px] sm:min-h-[52px] data-[state=active]:scale-105 hover:scale-102 transform data-[state=active]:shadow-red-500/30"
                >
                  <div className="relative">
                    <AlertTriangle className="h-3 w-3 sm:h-5 sm:w-5 group-data-[state=active]:animate-pulse transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full opacity-0 group-data-[state=active]:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>
                  <span className="text-center leading-tight font-bold tracking-wide">
                    {language === "en" ? "SOS" : "ತುರ್ತು"}
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard" className="mt-0">
              <div className="space-y-3 sm:space-y-6 lg:space-y-8">
                <div 
                  ref={featuresAnimation.ref}
                  className={`scroll-fade-up scroll-stagger-delay-1 ${featuresAnimation.isVisible ? 'visible' : ''}`}
                >
                  <MainFeatureCards 
                    language={language} 
                    onNavigateToTab={navigateToTab}
                    onVideoCall={handleVideoCall}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
                  {/* Left Column */}
                  <div 
                    ref={leftColumnAnimation.ref}
                    className={`space-y-3 sm:space-y-6 lg:space-y-8 scroll-slide-left scroll-stagger-delay-2 ${leftColumnAnimation.isVisible ? 'visible' : ''}`}
                  >
                    <div className="transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
                      <QuickHealthCheck language={language} />
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div 
                    ref={rightColumnAnimation.ref}
                    className={`space-y-3 sm:space-y-6 lg:space-y-8 scroll-slide-right scroll-stagger-delay-3 ${rightColumnAnimation.isVisible ? 'visible' : ''}`}
                  >
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
              <div className="space-y-3 sm:space-y-6 lg:space-y-8">
                <Profile language={language} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
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
