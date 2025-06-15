
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
import LoadingStates from "@/components/LoadingStates";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Activity, Stethoscope, AlertTriangle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { toast } = useToast();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    toast({
      title: language === "en" ? "Language Changed" : "ಭಾಷೆ ಬದಲಾಯಿಸಲಾಗಿದೆ",
      description: language === "en" ? `Switched to ${lang === "en" ? "English" : "Kannada"}` : `${lang === "en" ? "ಇಂಗ್ಲಿಷ್" : "ಕನ್ನಡ"} ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ`,
    });
  };

  const navigateToTab = (tabValue: string) => {
    setActiveTab(tabValue);
    toast({
      title: language === "en" ? "Navigation" : "ನೇವಿಗೇಶನ್",
      description: language === "en" ? `Switched to ${tabValue}` : `${tabValue} ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ`,
    });
  };

  const handleVideoCall = () => {
    setShowVideoCall(true);
    toast({
      title: language === "en" ? "Video Call" : "ವೀಡಿಯೋ ಕಾಲ್",
      description: language === "en" ? "Starting video consultation..." : "ವೀಡಿಯೋ ಸಲಹೆ ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ...",
    });
  };

  const handleNavigateToProfile = () => {
    setActiveTab("profile");
  };

  if (isLoading) {
    return <LoadingStates />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 relative overflow-hidden ${prefersReducedMotion ? 'motion-reduce' : ''}`}>
      <ParticleBackground />
      
      {/* Enhanced animated background elements with better accessibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-3xl ${!prefersReducedMotion ? 'animate-float' : ''}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/15 to-emerald-400/15 rounded-full blur-3xl ${!prefersReducedMotion ? 'animate-float-delayed' : ''}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/8 to-cyan-400/8 rounded-full blur-2xl ${!prefersReducedMotion ? 'animate-pulse-slow' : ''}`}></div>
        
        {/* Enhanced geometric patterns with better positioning */}
        <div className={`absolute top-20 left-20 w-4 h-4 bg-blue-400/40 rounded-full shadow-lg shadow-blue-400/20 ${!prefersReducedMotion ? 'animate-bounce-slow' : ''}`}></div>
        <div className={`absolute bottom-32 right-32 w-6 h-6 bg-purple-400/40 rounded-full shadow-lg shadow-purple-400/20 ${!prefersReducedMotion ? 'animate-bounce-slow delay-1000' : ''}`}></div>
        <div className={`absolute top-1/3 right-20 w-3 h-3 bg-green-400/40 rounded-full shadow-lg shadow-green-400/20 ${!prefersReducedMotion ? 'animate-bounce-slow delay-2000' : ''}`}></div>
        <div className={`absolute top-2/3 left-32 w-5 h-5 bg-pink-400/40 rounded-full shadow-lg shadow-pink-400/20 ${!prefersReducedMotion ? 'animate-bounce-slow delay-3000' : ''}`}></div>
      </div>
      
      <Header onNavigateToProfile={handleNavigateToProfile} />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <div className={!prefersReducedMotion ? "animate-slide-down" : ""}>
          <DashboardHeader language={language} />
        </div>

        {/* Enhanced Main Content Tabs with better accessibility */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl p-3 ring-1 ring-black/5 hover:shadow-3xl transition-all duration-500 focus-within:ring-2 focus-within:ring-blue-500">
                <TabsTrigger 
                  value="dashboard" 
                  className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 transition-all duration-500 rounded-2xl px-8 py-4 font-semibold hover:bg-gray-50 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  aria-label={language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
                >
                  <Activity className={`h-5 w-5 transition-transform group-hover:scale-110 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                  <span className="hidden sm:inline text-sm">{language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="doctors" 
                  className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-500/25 transition-all duration-500 rounded-2xl px-8 py-4 font-semibold hover:bg-gray-50 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={language === "en" ? "Doctors" : "ವೈದ್ಯರು"}
                >
                  <Stethoscope className={`h-5 w-5 transition-transform group-hover:scale-110 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                  <span className="hidden sm:inline text-sm">{language === "en" ? "Doctors" : "ವೈದ್ಯರು"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ai-assistant" 
                  className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-purple-500/25 transition-all duration-500 rounded-2xl px-8 py-4 font-semibold hover:bg-gray-50 group relative hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  aria-label={language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}
                >
                  <div className="relative">
                    <MessageCircle className={`h-5 w-5 transition-transform group-hover:scale-110 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                    <Sparkles className={`h-3 w-3 absolute -top-1 -right-1 text-purple-500 group-data-[state=active]:text-yellow-300 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
                  </div>
                  <span className="hidden sm:inline text-sm">{language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="emergency" 
                  className="flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-red-500/25 transition-all duration-500 rounded-2xl px-8 py-4 font-semibold hover:bg-gray-50 group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  aria-label={language === "en" ? "Emergency" : "ತುರ್ತು"}
                >
                  <AlertTriangle className={`h-5 w-5 transition-transform group-hover:scale-110 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                  <span className="hidden sm:inline text-sm">{language === "en" ? "Emergency" : "ತುರ್ತು"}</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <PageTransition isVisible={activeTab === "dashboard"}>
              <TabsContent value="dashboard" className="mt-0">
                <div className="space-y-10">
                  {/* Staggered animation for feature cards */}
                  <div className={!prefersReducedMotion ? "animate-fade-in-up" : ""} style={{animationDelay: '0.1s'}}>
                    <MainFeatureCards 
                      language={language} 
                      onNavigateToTab={navigateToTab}
                      onVideoCall={handleVideoCall}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column with staggered animations */}
                    <div className="space-y-10">
                      <div className={`transform transition-all duration-700 hover:shadow-3xl hover:shadow-blue-500/10 ${!prefersReducedMotion ? 'hover:scale-[1.02] animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
                        <QuickHealthCheck language={language} />
                      </div>
                    </div>
                    
                    {/* Right Column with staggered animations */}
                    <div className="space-y-10">
                      <div className={`transform transition-all duration-700 hover:shadow-3xl hover:shadow-purple-500/10 ${!prefersReducedMotion ? 'hover:scale-[1.02] animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}}>
                        <HealthTips language={language} />
                      </div>
                      <div className={`transform transition-all duration-700 hover:shadow-3xl hover:shadow-indigo-500/10 ${!prefersReducedMotion ? 'hover:scale-[1.02] animate-fade-in-up' : ''}`} style={{animationDelay: '0.4s'}}>
                        <QuickActionsCard 
                          language={language}
                          onNavigateToTab={navigateToTab}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "doctors"}>
              <TabsContent value="doctors" className={`mt-0 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                <DoctorFinder language={language} />
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "ai-assistant"}>
              <TabsContent value="ai-assistant" className={`mt-0 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                <AIAssistant language={language} />
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "emergency"}>
              <TabsContent value="emergency" className={`mt-0 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                <EmergencyServices language={language} />
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "profile"}>
              <TabsContent value="profile" className="mt-0">
                <div className={`space-y-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                  <div style={{animationDelay: '0.1s'}} className={!prefersReducedMotion ? "animate-fade-in-up" : ""}>
                    <Profile language={language} />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className={`transform transition-all duration-700 hover:shadow-3xl hover:shadow-green-500/10 ${!prefersReducedMotion ? 'hover:scale-[1.02] animate-fade-in-up' : ''}`} style={{animationDelay: '0.2s'}}>
                      <FamilyHealth language={language} />
                    </div>
                    <div className={`transform transition-all duration-700 hover:shadow-3xl hover:shadow-blue-500/10 ${!prefersReducedMotion ? 'hover:scale-[1.02] animate-fade-in-up' : ''}`} style={{animationDelay: '0.3s'}}>
                      <ArogyaDiary language={language} />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </PageTransition>
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
