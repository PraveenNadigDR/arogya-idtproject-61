
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmergencyButtonProps {
  language: string;
}

const EmergencyButton = ({ language }: EmergencyButtonProps) => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const { toast } = useToast();

  const handleEmergency = () => {
    setIsEmergencyActive(true);
    toast({
      title: language === "en" ? "🚨 Emergency Alert Sent!" : "🚨 ತುರ್ತು ಎಚ್ಚರಿಕೆ ಕಳುಹಿಸಲಾಗಿದೆ!",
      description: language === "en" 
        ? "Your location shared with family and nearest clinic" 
        : "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಕುಟುಂಬ ಮತ್ತು ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ಕಳುಹಿಸಲಾಗಿದೆ",
    });

    // Simulate emergency response
    setTimeout(() => {
      setIsEmergencyActive(false);
      toast({
        title: language === "en" ? "✅ Help is on the way!" : "✅ ಸಹಾಯ ಬರುತ್ತಿದೆ!",
        description: language === "en" 
          ? "Dr. Ramesh from Hassan PHC will call you in 2 minutes" 
          : "ಹಾಸನ್ PHC ಯಿಂದ ಡಾ. ರಮೇಶ್ ೨ ನಿಮಿಷದಲ್ಲಿ ಕರೆ ಮಾಡುತ್ತಾರೆ",
      });
    }, 3000);
  };

  return (
    <Card className={`border-2 ${isEmergencyActive ? 'border-destructive bg-destructive/10' : 'border-destructive/50 bg-destructive/5'} transition-all duration-300`}>
      <CardContent className="p-4">
        <div className="text-center">
          <Button
            onClick={handleEmergency}
            disabled={isEmergencyActive}
            variant="destructive"
            className={`w-full h-16 text-lg font-bold ${
              isEmergencyActive 
                ? 'animate-pulse' 
                : ''
            } transition-all duration-300`}
          >
            <Phone className="h-6 w-6 mr-2" />
            {isEmergencyActive 
              ? (language === "en" ? "🚨 SENDING ALERT..." : "🚨 ಎಚ್ಚರಿಕೆ ಕಳುಹಿಸುತ್ತಿದೆ...")
              : (language === "en" ? "🆘 EMERGENCY HELP" : "🆘 ತುರ್ತು ಸಹಾಯ")
            }
          </Button>

          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex items-center justify-center gap-1 text-xs text-destructive">
              <MapPin className="h-3 w-3" />
              <span>{language === "en" ? "GPS Shared" : "GPS ಹಂಚಿಕೊಂಡಿದೆ"}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-xs text-destructive">
              <Users className="h-3 w-3" />
              <span>{language === "en" ? "Family Notified" : "ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಲಾಗಿದೆ"}</span>
            </div>
          </div>

          <p className="text-xs text-destructive/80 mt-2">
            {language === "en" 
              ? "Press for immediate medical assistance • SMS backup enabled"
              : "ತಕ್ಷಣದ ವೈದ್ಯಕೀಯ ಸಹಾಯಕ್ಕಾಗಿ ಒತ್ತಿರಿ • SMS ಬ್ಯಾಕಪ್ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ"
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyButton;
