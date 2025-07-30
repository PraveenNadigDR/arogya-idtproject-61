import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingEmergencyButtonProps {
  language: string;
  onEmergencyClick: () => void;
}

const FloatingEmergencyButton = ({ language, onEmergencyClick }: FloatingEmergencyButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <Button
        onClick={onEmergencyClick}
        className="h-16 w-16 rounded-full bg-destructive hover:bg-destructive/90 shadow-elegant hover:shadow-glow group pulse-warm relative overflow-hidden"
        size="lg"
      >
        {/* Background effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        
        {/* Icon */}
        <Phone className="h-6 w-6 text-destructive-foreground relative z-10 group-hover:animate-pulse" />
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full border-2 border-destructive animate-ping opacity-75"></div>
        
        {/* Emergency indicator */}
        <div className="absolute -top-1 -right-1 h-4 w-4 bg-warning rounded-full flex items-center justify-center">
          <Zap className="h-2 w-2 text-warning-foreground" />
        </div>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-card border border-border rounded-lg text-sm font-medium shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {language === "en" ? "Emergency Help" : "ತುರ್ತು ಸಹಾಯ"}
      </div>
    </div>
  );
};

export default FloatingEmergencyButton;