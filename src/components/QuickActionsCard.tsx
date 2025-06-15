
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

interface QuickActionsCardProps {
  language: string;
  onNavigateToTab: (tabValue: string) => void;
}

const QuickActionsCard = ({ language, onNavigateToTab }: QuickActionsCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm border-0 ring-1 ring-blue-200/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg text-blue-800 flex items-center gap-3">
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-purple-500" />
          </div>
          {language === "en" ? "Quick AI Chat" : "ತ್ವರಿತ AI ಚಾಟ್"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-blue-700 leading-relaxed">
          {language === "en" 
            ? "Get instant health advice and answers from our AI assistant" 
            : "ತತ್ಕ್ಷಣ ಆರೋಗ್ಯ ಸಲಹೆ ಮತ್ತು ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ"}
        </p>
        <Button 
          onClick={() => onNavigateToTab("ai-assistant")}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <MessageCircle className="h-4 w-4 mr-2 group-hover:animate-pulse" />
          {language === "en" ? "Start Chat" : "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActionsCard;
