
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import DashboardHeader from "@/components/DashboardHeader";
import LanguageSelector from "@/components/LanguageSelector";
import MainFeatureCards from "@/components/MainFeatureCards";
import Profile from "@/components/Profile";
import QuickAppointmentBooker from "@/components/QuickAppointmentBooker";
import NatureBackground from "@/components/NatureBackground";

const Index = () => {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState<"dashboard" | "profile">("dashboard");
  const [language, setLanguage] = useState("en");

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced nature background */}
      <NatureBackground />
      
      {/* Main content with enhanced nature styling */}
      <div className="relative z-10 min-h-screen nature-glass">
        <Header onNavigateToProfile={() => setCurrentView("profile")} />
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {currentView === "dashboard" ? (
            <>
              <DashboardHeader language={language} />
              
              {/* Enhanced language selector */}
              <div className="flex justify-center mb-12">
                <div className="nature-glass organic-border px-6 py-3 nature-shadow">
                  <LanguageSelector language={language} onLanguageChange={setLanguage} />
                </div>
              </div>
              
              {/* Main dashboard content grid */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Left column - Main features */}
                <div className="xl:col-span-2">
                  <MainFeatureCards language={language} />
                </div>
                
                {/* Right column - Quick appointment booker */}
                <div className="xl:col-span-1">
                  <div className="sticky top-24">
                    <QuickAppointmentBooker language={language} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Profile onBackToDashboard={() => setCurrentView("dashboard")} language={language} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
