import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Sun,
  Moon,
  User
} from "lucide-react";
import { useTheme } from "next-themes";
import VideoCallDialog from "@/components/VideoCallDialog";
import LanguageSelector from "@/components/LanguageSelector";
import FloatingEmergencyButton from "@/components/FloatingEmergencyButton";
import HealthDashboard from "@/components/HealthDashboard";

// Import other components
import DoctorFinder from "@/components/DoctorFinder";
import AIAssistant from "@/components/AIAssistant";
import EmergencyServices from "@/components/EmergencyServices";
import Profile from "@/components/Profile";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [language, setLanguage] = useState("en");
  const [showVideoCall, setShowVideoCall] = useState(false);
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const handleVideoCall = () => {
    setShowVideoCall(true);
  };

  const handleEmergencyClick = () => {
    setActiveTab("emergency");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HealthDashboard language={language} />;
      case "doctors":
        return <DoctorFinder language={language} />;
      case "ai-assistant":
        return <AIAssistant language={language} />;
      case "emergency":
        return <EmergencyServices language={language} />;
      case "profile":
        return <Profile language={language} />;
      default:
        return <HealthDashboard language={language} />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background to-secondary/20">
        <AppSidebar 
          language={language} 
          activeTab={activeTab} 
          onNavigateToTab={setActiveTab} 
        />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border/50 bg-card/50 backdrop-blur-lg flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-secondary/80 rounded-lg p-2 transition-colors duration-200" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-foreground">
                  {activeTab === "home" && (language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್")}
                  {activeTab === "doctors" && (language === "en" ? "Find Doctors" : "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ")}
                  {activeTab === "ai-assistant" && (language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ")}
                  {activeTab === "emergency" && (language === "en" ? "Emergency Services" : "ತುರ್ತು ಸೇವೆಗಳು")}
                  {activeTab === "profile" && (language === "en" ? "Profile" : "ಪ್ರೊಫೈಲ್")}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {user?.email || (language === "en" ? "Welcome to your health hub" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಕೇಂದ್ರಕ್ಕೆ ಸ್ವಾಗತ")}
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-secondary/80 rounded-lg"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Video Call Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleVideoCall}
                className="hover:bg-secondary/80 rounded-lg hidden sm:flex"
              >
                <span className="text-sm">{language === "en" ? "Video Call" : "ವೀಡಿಯೋ ಕರೆ"}</span>
              </Button>

              {/* User Menu */}
              {user && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="hover:bg-secondary/80 rounded-lg"
                >
                  <User className="h-5 w-5" />
                </Button>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
            
            {/* Language Selector */}
            <div className="mt-12 flex justify-center">
              <LanguageSelector 
                language={language}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </main>
        </div>

        {/* Floating Emergency Button */}
        <FloatingEmergencyButton 
          language={language}
          onEmergencyClick={handleEmergencyClick}
        />

        {/* Video Call Dialog */}
        <VideoCallDialog
          showVideoCall={showVideoCall}
          onOpenChange={setShowVideoCall}
          language={language}
        />
      </div>
    </SidebarProvider>
  );
};

export default Index;