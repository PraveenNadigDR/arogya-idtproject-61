
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface QuickActionsCardProps {
  language: string;
  onNavigateToTab: (tabValue: string) => void;
}

const QuickActionsCard = ({ language, onNavigateToTab }: QuickActionsCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          {language === "en" ? "Quick AI Chat" : "ತ್ವರಿತ AI ಚಾಟ್"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-blue-600 mb-3">
          {language === "en" 
            ? "Get instant health advice and answers" 
            : "ತತ್ಕ್ಷಣ ಆರೋಗ್ಯ ಸಲಹೆ ಮತ್ತು ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ"}
        </p>
        <div className="flex gap-2">
          <Button 
            onClick={() => onNavigateToTab("ai-assistant")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
          >
            {language === "en" ? "Start Chat" : "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsCard;
