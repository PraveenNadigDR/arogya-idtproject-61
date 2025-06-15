
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, Zap } from "lucide-react";

interface QuickActionsCardProps {
  language: string;
  onNavigateToTab: (tabValue: string) => void;
}

const QuickActionsCard = ({ language, onNavigateToTab }: QuickActionsCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-indigo-50/80 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-xl ring-1 ring-purple-200/30 relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-delayed"></div>
      
      <CardHeader className="pb-6 relative z-10">
        <CardTitle className="text-xl text-purple-800 flex items-center gap-3 font-bold">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">{language === "en" ? "AI Health Assistant" : "AI ಆರೋಗ್ಯ ಸಹಾಯಕ"}</span>
            <span className="text-sm font-normal text-purple-600 flex items-center gap-1">
              <Zap className="h-3 w-3" />
              {language === "en" ? "Powered by AI" : "AI ನಿಂದ ಚಾಲಿತ"}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <div className="space-y-3">
          <p className="text-purple-700 leading-relaxed font-medium">
            {language === "en" 
              ? "Get instant, personalized health insights and expert guidance from our advanced AI assistant." 
              : "ನಮ್ಮ ಸುಧಾರಿತ AI ಸಹಾಯಕದಿಂದ ತತ್ಕ್ಷಣ, ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಒಳನೋಟಗಳು ಮತ್ತು ತಜ್ಞ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ."}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {(language === "en" ? 
              ["Symptom Analysis", "Health Tips", "Medication Info"] : 
              ["ಲಕ್ಷಣ ವಿಶ್ಲೇಷಣೆ", "ಆರೋಗ್ಯ ಸಲಹೆಗಳು", "ಔಷಧ ಮಾಹಿತಿ"]
            ).map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium border border-purple-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={() => onNavigateToTab("ai-assistant")}
          className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group/btn rounded-2xl py-6 text-lg font-semibold border-0 relative overflow-hidden"
        >
          {/* Button background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex items-center justify-center gap-3 relative z-10">
            <MessageCircle className="h-5 w-5 group-hover/btn:animate-pulse" />
            <span>{language === "en" ? "Start AI Chat" : "AI ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}</span>
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </div>
        </Button>
        
        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-200/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-800">24/7</div>
            <div className="text-xs text-purple-600">{language === "en" ? "Available" : "ಲಭ್ಯ"}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-800">⚡</div>
            <div className="text-xs text-purple-600">{language === "en" ? "Instant Response" : "ತತ್ಕ್ಷಣ ಪ್ರತಿಕ್ರಿಯೆ"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsCard;
