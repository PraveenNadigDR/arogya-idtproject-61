
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send, MessageCircle, Stethoscope, Calendar, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIAssistantProps {
  language: string;
}

const AIAssistant = ({ language }: AIAssistantProps) => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: language === "en" 
        ? "Hello Shreyas! I'm your health assistant. You can ask me about symptoms, medicines, or book appointments. How can I help you today?"
        : "ನಮಸ್ತೆ ಶ್ರೇಯಸ್! ನಾನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಹಾಯಕ. ನೀವು ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು ಅಥವಾ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡುವ ಬಗ್ಗೆ ಕೇಳಬಹುದು. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      timestamp: "10:30 AM"
    }
  ]);
  const { toast } = useToast();

  const text = {
    en: {
      title: "Health Assistant",
      subtitle: "Ask anything in Kannada or English",
      typePlaceholder: "Ask about symptoms, medicines, doctors...",
      quickQuestions: "Quick Questions",
      send: "Send",
      listening: "Listening...",
      you: "You",
      assistant: "Assistant"
    },
    kn: {
      title: "ಆರೋಗ್ಯ ಸಹಾಯಕ",
      subtitle: "ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಏನನ್ನೂ ಕೇಳಿ",
      typePlaceholder: "ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು, ವೈದ್ಯರ ಬಗ್ಗೆ ಕೇಳಿ...",
      quickQuestions: "ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು",
      send: "ಕಳುಹಿಸಿ",
      listening: "ಕೇಳುತ್ತಿದೆ...",
      you: "ನೀವು",
      assistant: "ಸಹಾಯಕ"
    }
  };

  const currentText = text[language];

  const quickQuestions = [
    {
      id: 1,
      question: language === "en" ? "I have fever and headache" : "ನನಗೆ ಜ್ವರ ಮತ್ತು ತಲೆನೋವು ಇದೆ",
      icon: Stethoscope
    },
    {
      id: 2,
      question: language === "en" ? "Book appointment with Dr. Ramesh" : "ಡಾ. ರಮೇಶ್ ಅವರೊಂದಿಗೆ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      icon: Calendar
    },
    {
      id: 3,
      question: language === "en" ? "What is this medicine for?" : "ಈ ಔಷಧ ಯಾವುದಕ್ಕೆ?",
      icon: Pill
    }
  ];

  const handleSendMessage = (messageText = message) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      const lowerMessage = messageText.toLowerCase();

      if (lowerMessage.includes("fever") || lowerMessage.includes("ಜ್ವರ")) {
        response = language === "en" 
          ? "For fever: Rest well, drink plenty of fluids, and take paracetamol as prescribed. If fever persists for more than 3 days or goes above 102°F, consult Dr. Ramesh at Hassan PHC immediately."
          : "ಜ್ವರಕ್ಕೆ: ಚೆನ್ನಾಗಿ ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ, ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ, ಮತ್ತು ನಿರ್ದೇಶಿಸಿದಂತೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್ ತೆಗೆದುಕೊಳ್ಳಿ. ಜ್ವರವು 3 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಇದ್ದರೆ ಅಥವಾ 102°F ಗಿಂತ ಹೆಚ್ಚಾದರೆ, ತಕ್ಷಣ ಹಾಸನ್ PHC ನಲ್ಲಿ ಡಾ. ರಮೇಶ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ.";
      } else if (lowerMessage.includes("appointment") || lowerMessage.includes("ಅಪಾಯಿಂಟ್ಮೆಂಟ್")) {
        response = language === "en" 
          ? "I can help you book an appointment! Dr. Ramesh is available tomorrow at 2 PM at Hassan PHC. Shall I book this slot for you? The consultation fee is ₹50."
          : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಲು ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬಹುದು! ಡಾ. ರಮೇಶ್ ನಾಳೆ ಮಧ್ಯಾಹ್ನ 2 ಗಂಟೆಗೆ ಹಾಸನ್ PHC ನಲ್ಲಿ ಲಭ್ಯವಿದ್ದಾರೆ. ನಾನು ಈ ಸ್ಲಾಟ್ ಅನ್ನು ನಿಮಗಾಗಿ ಬುಕ್ ಮಾಡಬೇಕೇ? ಸಮಾಲೋಚನೆ ಶುಲ್ಕ ₹50.";
      } else if (lowerMessage.includes("medicine") || lowerMessage.includes("ಔಷಧ")) {
        response = language === "en" 
          ? "I can help identify medicines! You can take a photo of the medicine packaging, and I'll tell you what it's for, dosage, and timing. Always consult your doctor before taking any new medicine."
          : "ಔಷಧಗಳನ್ನು ಗುರುತಿಸಲು ನಾನು ಸಹಾಯ ಮಾಡಬಹುದು! ನೀವು ಔಷಧದ ಪ್ಯಾಕೇಜಿಂಗ್‌ನ ಫೋಟೋ ತೆಗೆದುಕೊಳ್ಳಬಹುದು, ಮತ್ತು ಅದು ಯಾವುದಕ್ಕೆ, ಪ್ರಮಾಣ ಮತ್ತು ಸಮಯವನ್ನು ನಾನು ನಿಮಗೆ ಹೇಳುತ್ತೇನೆ. ಯಾವುದೇ ಹೊಸ ಔಷಧವನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಮೊದಲು ಯಾವಾಗಲೂ ನಿಮ್ಮ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.";
      } else {
        response = language === "en" 
          ? "I understand your concern. For the best advice, I recommend consulting with a healthcare professional. Would you like me to help you find a nearby doctor or book an appointment?"
          : "ನಿಮ್ಮ ಕಳವಳವನ್ನು ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಉತ್ತಮ ಸಲಹೆಗಾಗಿ, ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಲು ನಾನು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ. ಹತ್ತಿರದ ವೈದ್ಯರನ್ನು ಹುಡುಕಲು ಅಥವಾ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಲು ನಾನು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಬೇಕೇ?";
      }

      const assistantMessage = {
        id: Date.now() + 1,
        type: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    toast({
      title: language === "en" ? "🎤 Voice Recognition Active" : "🎤 ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಸಕ್ರಿಯ",
      description: language === "en" 
        ? "Speak now in Kannada or English" 
        : "ಈಗ ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ"
    });

    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      const voiceInput = language === "en" 
        ? "I have a headache and feeling tired"
        : "ನನಗೆ ತಲೆನೋವು ಮತ್ತು ಆಯಾಸವಾಗಿದೆ";
      setMessage(voiceInput);
    }, 3000);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[600px]">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 mb-4">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-blue-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Quick Questions */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">{currentText.quickQuestions}</h3>
        <div className="space-y-2">
          {quickQuestions.map((q) => (
            <Button
              key={q.id}
              variant="outline"
              size="sm"
              onClick={() => handleQuickQuestion(q.question)}
              className="w-full text-left justify-start border-green-200 text-green-700 hover:bg-green-50"
            >
              <q.icon className="h-4 w-4 mr-2" />
              {q.question}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 p-4 bg-gray-50 rounded-lg">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.type === "user"
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
            >
              <div className="text-xs opacity-70 mb-1">
                {msg.type === "user" ? currentText.you : currentText.assistant}
              </div>
              <p className="text-sm">{msg.content}</p>
              <div className="text-xs opacity-70 mt-1">{msg.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            placeholder={currentText.typePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="pr-12"
          />
          <Button
            size="sm"
            variant="ghost"
            onClick={handleVoiceInput}
            disabled={isListening}
            className={`absolute right-1 top-1 h-8 w-8 p-0 ${
              isListening ? "text-red-600 animate-pulse" : "text-gray-400 hover:text-green-600"
            }`}
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        <Button
          onClick={() => handleSendMessage()}
          disabled={!message.trim()}
          className="bg-green-600 hover:bg-green-700"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>

      {isListening && (
        <div className="mt-2 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-red-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            {currentText.listening}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
