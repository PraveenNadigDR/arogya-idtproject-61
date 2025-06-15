
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
import EnhancedParticleBackground from "@/components/EnhancedParticleBackground";
import AnimatedCard from "@/components/AnimatedCard";
import FloatingElements from "@/components/FloatingElements";
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
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 dark:from-gray-900 dark:via-gray-800/40 dark:to-gray-900/60 relative overflow-hidden ${prefersReducedMotion ? 'motion-reduce' : ''}`}>
      <EnhancedParticleBackground />
      <FloatingElements />
      
      {/* Enhanced animated background elements with better accessibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl ${!prefersReducedMotion ? 'animate-float' : ''}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-full blur-3xl ${!prefersReducedMotion ? 'animate-float-delayed' : ''}`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-2xl ${!prefersReducedMotion ? 'animate-pulse-slow' : ''}`}></div>
        
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

        {/* Enhanced Main Content Tabs with improved design */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-3xl border-0 shadow-[0_12px_40px_rgba(0,0,0,0.15)] rounded-[32px] p-3 ring-1 ring-white/20 dark:ring-gray-700/50 hover:shadow-[0_16px_50px_rgba(0,0,0,0.2)] transition-all duration-700">
                <TabsTrigger 
                  value="dashboard" 
                  className="group relative flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:via-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-[0_12px_25px_rgba(16,185,129,0.5)] transition-all duration-700 rounded-[24px] px-8 py-5 font-bold text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-slate-800 dark:hover:text-white hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-white/20 overflow-hidden"
                  aria-label={language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Activity className={`h-5 w-5 transition-all duration-700 group-hover:scale-125 group-data-[state=active]:drop-shadow-lg relative z-10 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                  <span className="hidden sm:inline text-sm font-bold relative z-10">{language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್"}</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="doctors" 
                  className="group relative flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:via-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-[0_12px_25px_rgba(59,130,246,0.5)] transition-all duration-700 rounded-[24px] px-8 py-5 font-bold text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-slate-800 dark:hover:text-white hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-white/20 overflow-hidden"
                  aria-label={language === "en" ? "Doctors" : "ವೈದ್ಯರು"}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <Stethoscope className={`h-5 w-5 transition-all duration-700 group-hover:scale-125 group-data-[state=active]:drop-shadow-lg relative z-10 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                  <span className="hidden sm:inline text-sm font-bold relative z-10">{language === "en" ? "Doctors" : "ವೈದ್ಯರು"}</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="ai-assistant" 
                  className="group relative flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:via-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-[0_12px_25px_rgba(147,51,234,0.5)] transition-all duration-700 rounded-[24px] px-8 py-5 font-bold text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-slate-800 dark:hover:text-white hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-white/20 overflow-hidden"
                  aria-label={language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <MessageCircle className={`h-5 w-5 transition-all duration-700 group-hover:scale-125 group-data-[state=active]:drop-shadow-lg ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                    <Sparkles className={`h-3 w-3 absolute -top-1 -right-1 text-purple-400 group-data-[state=active]:text-yellow-300 transition-colors duration-700 ${!prefersReducedMotion ? 'animate-pulse' : ''}`} />
                  </div>
                  <span className="hidden sm:inline text-sm font-bold relative z-10">{language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ"}</span>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="emergency" 
                  className="group relative flex items-center gap-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:via-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-[0_12px_25px_rgba(239,68,68,0.5)] transition-all duration-700 rounded-[24px] px-8 py-5 font-bold text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-slate-800 dark:hover:text-white hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-white/20 overflow-hidden"
                  aria-label={language === "en" ? "Emergency" : "ತುರ್ತು"}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <AlertTriangle className={`h-5 w-5 transition-all duration-700 group-hover:scale-125 group-data-[state=active]:drop-shadow-lg relative z-10 ${!prefersReducedMotion ? 'group-data-[state=active]:animate-pulse' : ''}`} />
                  <span className="hidden sm:inline text-sm font-bold relative z-10">{language === "en" ? "Emergency" : "ತುರ್ತು"}</span>
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
                    {/* Left Column with enhanced animated cards */}
                    <div className="space-y-10">
                      <AnimatedCard delay={200} glowColor="blue">
                        <QuickHealthCheck language={language} />
                      </AnimatedCard>
                    </div>
                    
                    {/* Right Column with enhanced animated cards */}
                    <div className="space-y-10">
                      <AnimatedCard delay={300} glowColor="purple">
                        <HealthTips language={language} />
                      </AnimatedCard>
                      <AnimatedCard delay={400} glowColor="green">
                        <QuickActionsCard 
                          language={language}
                          onNavigateToTab={navigateToTab}
                        />
                      </AnimatedCard>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "doctors"}>
              <TabsContent value="doctors" className={`mt-0 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                <AnimatedCard delay={100} glowColor="blue">
                  <DoctorFinder language={language} />
                </AnimatedCard>
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "ai-assistant"}>
              <TabsContent value="ai-assistant" className={`mt-0 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                <AnimatedCard delay={100} glowColor="purple">
                  <AIAssistant language={language} />
                </AnimatedCard>
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "emergency"}>
              <TabsContent value="emergency" className={`mt-0 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                <AnimatedCard delay={100} glowColor="orange">
                  <EmergencyServices language={language} />
                </AnimatedCard>
              </TabsContent>
            </PageTransition>

            <PageTransition isVisible={activeTab === "profile"}>
              <TabsContent value="profile" className="mt-0">
                <div className={`space-y-10 ${!prefersReducedMotion ? 'animate-fade-in-up' : ''}`}>
                  <AnimatedCard delay={100} glowColor="green">
                    <Profile language={language} />
                  </AnimatedCard>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <AnimatedCard delay={200} glowColor="green">
                      <FamilyHealth language={language} />
                    </AnimatedCard>
                    <AnimatedCard delay={300} glowColor="blue">
                      <ArogyaDiary language={language} />
                    </AnimatedCard>
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
