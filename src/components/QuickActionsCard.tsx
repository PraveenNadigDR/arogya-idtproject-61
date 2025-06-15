
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, Zap, Brain, Heart } from "lucide-react";

interface QuickActionsCardProps {
  language: string;
  onNavigateToTab: (tabValue: string) => void;
}

const QuickActionsCard = ({ language, onNavigateToTab }: QuickActionsCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-purple-50/90 via-blue-50/90 to-indigo-50/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] backdrop-blur-xl ring-1 ring-purple-200/40 relative overflow-hidden group">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
        <div className="absolute top-6 right-6 w-20 h-20 bg-purple-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 bg-blue-500 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-pink-500 rounded-full blur-xl animate-bounce-slow"></div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-float shadow-lg shadow-purple-400/50"></div>
      <div className="absolute bottom-12 left-12 w-2 h-2 bg-blue-400 rounded-full animate-float-delayed shadow-lg shadow-blue-400/50"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce-slow shadow-lg shadow-pink-400/50"></div>
      
      <CardHeader className="pb-8 relative z-10">
        <CardTitle className="text-2xl text-purple-800 flex items-center gap-4 font-black">
          <div className="relative group/icon">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/40 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-6">
              <MessageCircle className="h-7 w-7 text-white drop-shadow-lg" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Brain className="h-4 w-4 text-cyan-400 animate-bounce-slow drop-shadow-lg" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl tracking-tight">{language === "en" ? "AI Health Assistant" : "AI ಆರೋಗ್ಯ ಸಹಾಯಕ"}</span>
            <span className="text-sm font-normal text-purple-600 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              {language === "en" ? "Powered by Advanced AI" : "ಸುಧಾರಿತ AI ನಿಂದ ಚಾಲಿತ"}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-8 relative z-10">
        <div className="space-y-4">
          <p className="text-purple-700 leading-relaxed font-semibold text-lg">
            {language === "en" 
              ? "Get instant, personalized health insights and expert guidance from our advanced AI assistant." 
              : "ನಮ್ಮ ಸುಧಾರಿತ AI ಸಹಾಯಕದಿಂದ ತತ್ಕ್ಷಣ, ವೈಯಕ್ತಿಕ ಆರೋಗ್ಯ ಒಳನೋಟಗಳು ಮತ್ತು ತಜ್ಞ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪಡೆಯಿರಿ."}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {(language === "en" ? 
              ["Symptom Analysis", "Health Tips", "Medication Info", "Emergency Help"] : 
              ["ಲಕ್ಷಣ ವಿಶ್ಲೇಷಣೆ", "ಆರೋಗ್ಯ ಸಲಹೆಗಳು", "ಔಷಧ ಮಾಹಿತಿ", "ತುರ್ತು ಸಹಾಯ"]
            ).map((feature, index) => (
              <span 
                key={index}
                className="text-sm bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full font-semibold border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={() => onNavigateToTab("ai-assistant")}
          className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group/btn rounded-3xl py-8 text-xl font-bold border-0 relative overflow-hidden"
        >
          {/* Enhanced button background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex items-center justify-center gap-4 relative z-10">
            <MessageCircle className="h-6 w-6 group-hover/btn:animate-pulse drop-shadow-lg" />
            <span className="tracking-tight">{language === "en" ? "Start AI Chat" : "AI ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}</span>
            <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-2 transition-transform duration-500 drop-shadow-lg" />
          </div>
        </Button>
        
        {/* Enhanced quick stats */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-purple-200/50">
          <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-black text-purple-800 mb-1">24/7</div>
            <div className="text-xs text-purple-600 font-medium">{language === "en" ? "Available" : "ಲಭ್ಯ"}</div>
          </div>
          <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
            <div className="text-3xl mb-1">⚡</div>
            <div className="text-xs text-purple-600 font-medium">{language === "en" ? "Instant" : "ತತ್ಕ್ಷಣ"}</div>
          </div>
          <div className="text-center group/stat hover:scale-110 transition-transform duration-300">
            <div className="text-3xl mb-1 flex justify-center">
              <Heart className="h-8 w-8 text-red-500 animate-pulse" />
            </div>
            <div className="text-xs text-purple-600 font-medium">{language === "en" ? "Caring" : "ಕಾಳಜಿ"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsCard;
