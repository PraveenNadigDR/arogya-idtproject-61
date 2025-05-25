import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mic, Send, MessageCircle, Stethoscope, Calendar, Pill, Settings, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AIAssistantProps {
  language: string;
}

interface Message {
  id: number;
  type: string;
  content: string;
  timestamp: string;
}

const AIAssistant = ({ language }: AIAssistantProps) => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("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");
  const [showSettings, setShowSettings] = useState(false);
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content: language === "en" 
        ? "Hello Shreyas! I'm your health assistant. You can ask me about symptoms, medicines, book appointments, or start a video call with a doctor. How can I help you today?"
        : "ನಮಸ್ತೆ ಶ್ರೇಯಸ್! ನಾನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಹಾಯಕ. ನೀವು ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು, ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡುವ ಬಗ್ಗೆ ಕೇಳಬಹುದು ಅಥವಾ ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್ ಪ್ರಾರಂಭಿಸಬಹುದು. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
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
      assistant: "Assistant",
      videoCall: "Video Call with Doctor",
      startVideoCall: "Start Video Call",
      callInProgress: "Call in Progress..."
    },
    kn: {
      title: "ಆರೋಗ್ಯ ಸಹಾಯಕ",
      subtitle: "ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಏನನ್ನೂ ಕೇಳಿ",
      typePlaceholder: "ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು, ವೈದ್ಯರ ಬಗ್ಗೆ ಕೇಳಿ...",
      quickQuestions: "ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು",
      send: "ಕಳುಹಿಸಿ",
      listening: "ಕೇಳುತ್ತಿದೆ...",
      you: "ನೀವು",
      assistant: "ಸಹಾಯಕ",
      videoCall: "ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್",
      startVideoCall: "ವೀಡಿಯೊ ಕಾಲ್ ಪ್ರಾರಂಭಿಸಿ",
      callInProgress: "ಕಾಲ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ..."
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

  const callOpenRouterAPI = async (userMessage: string) => {
    if (!apiKey) {
      throw new Error("API key not provided");
    }

    const systemPrompt = language === "en" 
      ? "You are a helpful health assistant for Shreyas, a 19-year-old from Holenarasipura village near Hassan, Karnataka. Provide practical health advice, help with symptoms, medicine information, and doctor appointments. Keep responses concise and helpful. Focus on local healthcare options in Hassan district."
      : "ನೀವು ಹಾಸನ್ ಜಿಲ್ಲೆಯ ಹೊಳೆನರಸೀಪುರ ಗ್ರಾಮದ 19 ವರ್ಷದ ಶ್ರೇಯಸ್‌ಗೆ ಸಹಾಯಕಾರಿ ಆರೋಗ್ಯ ಸಹಾಯಕರು. ಪ್ರಾಯೋಗಿಕ ಆರೋಗ್ಯ ಸಲಹೆ, ಲಕ್ಷಣಗಳೊಂದಿಗೆ ಸಹಾಯ, ಔಷಧ ಮಾಹಿತಿ ಮತ್ತು ವೈದ್ಯರ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಒದಗಿಸಿ. ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಸಂಕ್ಷಿಪ್ತ ಮತ್ತು ಸಹಾಯಕವಾಗಿ ಇರಿಸಿ.";

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.origin,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.1-8b-instruct:free',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "Sorry, I couldn't process your request.";
  };

  const handleSendMessage = async (messageText = message) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const aiResponse = await callOpenRouterAPI(messageText);
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: "assistant",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('API call failed:', error);
      
      // Fallback to simulated response
      let response = "";
      const lowerMessage = messageText.toLowerCase();

      if (lowerMessage.includes("fever") || lowerMessage.includes("ಜ್ವರ")) {
        response = language === "en" 
          ? "For fever: Rest well, drink plenty of fluids, and take paracetamol as prescribed. If fever persists for more than 3 days or goes above 102°F, consult Dr. Ramesh at Hassan PHC immediately."
          : "ಜ್ವರಕ್ಕೆ: ಚೆನ್ನಾಗಿ ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ, ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ, ಮತ್ತು ನಿರ್ದೇಶಿಸಿದಂತೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್ ತೆಗೆದುಕೊಳ್ಳಿ. ಜ್ವರವು 3 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಇದ್ದರೆ ಅಥವಾ 102°F ಗಿಂತ ಹೆಚ್ಚಾದರೆ, ತಕ್ಷಣ ಹಾಸನ್ PHC ನಲ್ಲಿ ಡಾ. ರಮೇಶ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ.";
      } else {
        response = language === "en" 
          ? "I'm having trouble connecting to the AI service. Please check your internet connection or try again later."
          : "AI ಸೇವೆಗೆ ಸಂಪರ್ಕಿಸುವಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಅಥವಾ ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.";
      }

      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      toast({
        title: language === "en" ? "Connection Issue" : "ಸಂಪರ್ಕ ಸಮಸ್ಯೆ",
        description: language === "en" ? "Using offline mode" : "ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಬಳಸಲಾಗುತ್ತಿದೆ"
      });
    } finally {
      setIsLoading(false);
    }
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

  const handleVideoCall = () => {
    setShowVideoCall(true);
    toast({
      title: language === "en" ? "📹 Connecting to Doctor" : "📹 ವೈದ್ಯರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ",
      description: language === "en" 
        ? "Dr. Ramesh will join shortly" 
        : "ಡಾ. ರಮೇಶ್ ಶೀಘ್ರದಲ್ಲೇ ಸೇರುತ್ತಾರೆ"
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-h-[600px]">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-800" />
              <div>
                <CardTitle className="text-lg text-blue-800">{currentText.title}</CardTitle>
                <p className="text-sm text-blue-600">{currentText.subtitle}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
              className="text-blue-600 hover:text-blue-800"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        {showSettings && (
          <CardContent className="pt-0">
            <div className="space-y-2">
              <label className="text-xs text-blue-700">
                {language === "en" ? "OpenRouter API Key:" : "OpenRouter API ಕೀ:"}
              </label>
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-or-v1-..."
                className="text-xs"
              />
            </div>
          </CardContent>
        )}
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
              disabled={isLoading}
              className="w-full text-left justify-start border-green-200 text-green-700 hover:bg-green-50"
            >
              <q.icon className="h-4 w-4 mr-2" />
              {q.question}
            </Button>
          ))}
        </div>
      </div>

      {/* Video Call Button */}
      <div className="mb-4">
        <Dialog open={showVideoCall} onOpenChange={setShowVideoCall}>
          <DialogTrigger asChild>
            <Button
              onClick={handleVideoCall}
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Video className="h-4 w-4 mr-2" />
              {currentText.videoCall}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{currentText.videoCall}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">{currentText.callInProgress}</p>
                  <p className="text-xs opacity-75 mt-1">
                    {language === "en" ? "Dr. Ramesh - Hassan PHC" : "ಡಾ. ರಮೇಶ್ - ಹಾಸನ್ PHC"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <Button variant="destructive" onClick={() => setShowVideoCall(false)}>
                  {language === "en" ? "End Call" : "ಕಾಲ್ ಕೊನೆಗೊಳಿಸಿ"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-lg">
              <div className="text-xs opacity-70 mb-1">{currentText.assistant}</div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            placeholder={currentText.typePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
            disabled={isLoading}
            className="pr-12"
          />
          <Button
            size="sm"
            variant="ghost"
            onClick={handleVoiceInput}
            disabled={isListening || isLoading}
            className={`absolute right-1 top-1 h-8 w-8 p-0 ${
              isListening ? "text-red-600 animate-pulse" : "text-gray-400 hover:text-green-600"
            }`}
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        <Button
          onClick={() => handleSendMessage()}
          disabled={!message.trim() || isLoading}
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
