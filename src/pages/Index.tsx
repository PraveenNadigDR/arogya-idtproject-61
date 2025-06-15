
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import DashboardHeader from "@/components/DashboardHeader";
import LanguageSelector from "@/components/LanguageSelector";
import MainFeatureCards from "@/components/MainFeatureCards";
import Profile from "@/components/Profile";
import QuickAppointmentBooker from "@/components/QuickAppointmentBooker";

const Index = () => {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState<"dashboard" | "profile">("dashboard");
  const [language, setLanguage] = useState("en");

  const handleNavigateToTab = (tabValue: string) => {
    // Handle navigation to specific tabs
    console.log("Navigate to tab:", tabValue);
  };

  const handleVideoCall = () => {
    // Handle video call functionality
    console.log("Starting video call");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header onNavigateToProfile={() => setCurrentView("profile")} />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {currentView === "dashboard" ? (
          <>
            <DashboardHeader language={language} />
            
            <div className="flex justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl px-6 py-3 shadow-lg">
                <LanguageSelector language={language} onLanguageChange={setLanguage} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <MainFeatureCards 
                  language={language} 
                  onNavigateToTab={handleNavigateToTab}
                  onVideoCall={handleVideoCall}
                />
              </div>
              
              <div className="xl:col-span-1">
                <div className="sticky top-24">
                  <QuickAppointmentBooker language={language} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Profile language={language} />
        )}
      </main>
    </div>
  );
};

export default Index;
