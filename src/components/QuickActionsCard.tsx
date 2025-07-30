
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight, Zap } from "lucide-react";

interface QuickActionsCardProps {
  language: string;
  onNavigateToTab: (tabValue: string) => void;
}

const QuickActionsCard = ({ language, onNavigateToTab }: QuickActionsCardProps) => {
  return (
    <Card className="card-interactive animate-scale-up border-0 shadow-elegant hover:shadow-glow backdrop-blur-xl ring-1 ring-border/30 relative overflow-hidden group">
      {/* Background decoration with warm colors */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-16 h-16 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-full blur-xl"></div>
      </div>
      
      {/* Floating particles with warm colors */}
      <div className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full animate-float"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-accent rounded-full animate-float-delayed"></div>
      
      <CardHeader className="pb-6 relative z-10">
        <CardTitle className="text-xl text-foreground flex items-center gap-3 font-bold">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-soft animate-warm-glow">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="h-4 w-4 text-warning animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">{language === "en" ? "AI Health Assistant" : "AI ಆರೋಗ್ಯ ಸಹಾಯಕ"}</span>
            <span className="text-sm font-normal text-muted-foreground flex items-center gap-1">
              <Zap className="h-3 w-3" />
              {language === "en" ? "Powered by AI" : "AI ನಿಂದ ಚಾಲಿತ"}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 relative z-10">
        <div className="space-y-3">
          <p className="text-foreground leading-relaxed font-medium">
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
                className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium border border-border hover-bounce"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={() => onNavigateToTab("ai-assistant")}
          className="btn-warm w-full py-6 text-lg font-semibold rounded-xl relative overflow-hidden group/btn"
        >
          {/* Button background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex items-center justify-center gap-3 relative z-10">
            <MessageCircle className="h-5 w-5 group-hover/btn:animate-pulse" />
            <span>{language === "en" ? "Start AI Chat" : "AI ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}</span>
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </div>
        </Button>
        
        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
          <div className="text-center animate-bounce-in stagger-1">
            <div className="text-2xl font-bold text-gradient">24/7</div>
            <div className="text-xs text-muted-foreground">{language === "en" ? "Available" : "ಲಭ್ಯ"}</div>
          </div>
          <div className="text-center animate-bounce-in stagger-2">
            <div className="text-2xl font-bold text-gradient">⚡</div>
            <div className="text-xs text-muted-foreground">{language === "en" ? "Instant Response" : "ತತ್ಕ್ಷಣ ಪ್ರತಿಕ್ರಿಯೆ"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsCard;
