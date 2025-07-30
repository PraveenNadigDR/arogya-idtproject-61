import { Home, Stethoscope, MessageCircle, Phone, User, Heart, MapPin, BookOpen } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  language: string;
  activeTab: string;
  onNavigateToTab: (tab: string) => void;
}

export function AppSidebar({ language, activeTab, onNavigateToTab }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  
  const navigationItems = [
    {
      id: "home",
      icon: Home,
      label: language === "en" ? "Dashboard" : "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      description: language === "en" ? "Health overview" : "ಆರೋಗ್ಯ ವಿವರಣೆ"
    },
    {
      id: "doctors",
      icon: Stethoscope,
      label: language === "en" ? "Find Doctors" : "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
      description: language === "en" ? "Book appointments" : "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"
    },
    {
      id: "ai-assistant",
      icon: MessageCircle,
      label: language === "en" ? "AI Assistant" : "AI ಸಹಾಯಕ",
      description: language === "en" ? "Health guidance" : "ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ"
    },
    {
      id: "emergency",
      icon: Phone,
      label: language === "en" ? "Emergency" : "ತುರ್ತು",
      description: language === "en" ? "Quick help" : "ತ್ವರಿತ ಸಹಾಯ"
    },
    {
      id: "profile",
      icon: User,
      label: language === "en" ? "Profile" : "ಪ್ರೊಫೈಲ್",
      description: language === "en" ? "Personal info" : "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ"
    }
  ];

  const isActive = (id: string) => activeTab === id;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-72"} transition-all duration-300 border-r border-border/50 bg-card/50 backdrop-blur-lg`}>
      <SidebarContent className="p-2">
        {/* Logo Section */}
        <div className={`flex items-center gap-3 p-4 mb-6 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-gradient">HealthCare+</h2>
              <p className="text-xs text-muted-foreground">AI Powered Healthcare</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            {language === "en" ? "Navigation" : "ನ್ಯಾವಿಗೇಶನ್"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild 
                    className={`
                      h-12 rounded-xl transition-all duration-300 group relative overflow-hidden
                      ${isActive(item.id) 
                        ? "bg-primary text-primary-foreground shadow-soft" 
                        : "hover:bg-secondary/80 hover:shadow-soft"
                      }
                    `}
                  >
                    <button 
                      onClick={() => onNavigateToTab(item.id)}
                      className="w-full flex items-center gap-3 p-3"
                    >
                      <item.icon className={`h-5 w-5 transition-transform duration-300 ${isActive(item.id) ? "scale-110" : "group-hover:scale-105"}`} />
                      {!collapsed && (
                        <div className="flex flex-col items-start flex-1 min-w-0">
                          <span className="font-medium text-sm">{item.label}</span>
                          <span className="text-xs opacity-70 truncate">{item.description}</span>
                        </div>
                      )}
                      {isActive(item.id) && (
                        <div className="absolute right-0 top-0 h-full w-1 bg-primary-foreground rounded-l-full" />
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        {!collapsed && (
          <SidebarGroup className="mt-auto">
            <SidebarGroupLabel>
              {language === "en" ? "Quick Actions" : "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-2">
                <button className="w-full p-3 bg-warning/10 hover:bg-warning/20 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <MapPin className="h-4 w-4 text-warning" />
                  <span className="text-sm font-medium">{language === "en" ? "Find Hospitals" : "ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ"}</span>
                </button>
                <button className="w-full p-3 bg-success/10 hover:bg-success/20 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <BookOpen className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">{language === "en" ? "Health Tips" : "ಆರೋಗ್ಯ ಸಲಹೆಗಳು"}</span>
                </button>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}