
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mic, Send, MessageCircle, Stethoscope, Calendar, Pill, Settings, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

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
  const [apiKey, setApiKey] = useState(""); // Start with empty API key
  const [showSettings, setShowSettings] = useState(false);
  const [useOfflineMode, setUseOfflineMode] = useState(true); // Default to offline mode
  const { toast } = useToast();
  const { user } = useAuth();

  // Get user's name from auth context
  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content: language === "en" 
        ? `Hello${userName ? ` ${userName}` : ''}! I'm your health assistant. You can ask me about symptoms, medicines, book appointments, or get health advice. How can I help you today?`
        : `ನಮಸ್ತೆ${userName ? ` ${userName}` : ''}! ನಾನು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಹಾಯಕ. ನೀವು ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು, ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡುವ ಬಗ್ಗೆ ಕೇಳಬಹುದು ಅಥವಾ ಆರೋಗ್ಯ ಸಲಹೆ ಪಡೆಯಬಹುದು. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?`,
      timestamp: "10:30 AM"
    }
  ]);

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
      offlineMode: "Offline Mode (Demo Responses)",
      apiKeyLabel: "OpenRouter API Key (Optional):",
      saveApiKey: "Save API Key"
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
      offlineMode: "ಆಫ್‌ಲೈನ್ ಮೋಡ್ (ಡೆಮೋ ಪ್ರತಿಕ್ರಿಯೆಗಳು)",
      apiKeyLabel: "OpenRouter API ಕೀ (ಐಚ್ಛಿಕ):",
      saveApiKey: "API ಕೀ ಉಳಿಸಿ"
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

  const getSmartResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Fever and headache
    if (lowerMessage.includes("fever") || lowerMessage.includes("headache") || lowerMessage.includes("ಜ್ವರ") || lowerMessage.includes("ತಲೆನೋವು")) {
      return language === "en" 
        ? "For fever and headache: Rest well, drink plenty of fluids (8-10 glasses daily), and take paracetamol 500mg every 6 hours. Apply a cool compress to your forehead. If fever persists for more than 3 days or goes above 102°F, consult Dr. Ramesh at Hassan PHC immediately. Monitor symptoms and avoid strenuous activities."
        : "ಜ್ವರ ಮತ್ತು ತಲೆನೋವಿಗೆ: ಚೆನ್ನಾಗಿ ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ, ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ (ದಿನಕ್ಕೆ 8-10 ಗ್ಲಾಸ್), ಮತ್ತು 6 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ಪ್ಯಾರಾಸಿಟಮಾಲ್ 500mg ತೆಗೆದುಕೊಳ್ಳಿ. ಹಣೆಗೆ ತಂಪಾದ ಬಟ್ಟೆ ಇಡಿ. ಜ್ವರವು 3 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಕಾಲ ಇದ್ದರೆ ಅಥವಾ 102°F ಗಿಂತ ಹೆಚ್ಚಾದರೆ, ತಕ್ಷಣ ಹಾಸನ್ PHC ನಲ್ಲಿ ಡಾ. ರಮೇಶ್ ಅವರನ್ನು ಸಂಪರ್ಕಿಸಿ.";
    }
    
    // Appointment booking
    if (lowerMessage.includes("appointment") || lowerMessage.includes("book") || lowerMessage.includes("doctor") || lowerMessage.includes("ಅಪಾಯಿಂಟ್ಮೆಂಟ್") || lowerMessage.includes("ವೈದ್ಯ")) {
      return language === "en" 
        ? "To book an appointment: Dr. Ramesh is available Mon-Fri 9AM-5PM at Hassan PHC. Call 080-1234-5678 or visit directly. For specialists: Dr. Priya (Cardiologist) - Tue/Thu 2-6PM, Dr. Kumar (Pediatrician) - Mon/Wed/Fri 10AM-2PM. Emergency consultations available 24/7. Bring your health ID and previous medical records."
        : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಲು: ಡಾ. ರಮೇಶ್ ಸೋಮ-ಶುಕ್ರ 9AM-5PM ಹಾಸನ್ PHC ನಲ್ಲಿ ಲಭ್ಯ. 080-1234-5678 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ನೇರವಾಗಿ ಭೇಟಿ ನೀಡಿ. ತಜ್ಞರಿಗೆ: ಡಾ. ಪ್ರಿಯಾ (ಹೃದಯರೋಗ ತಜ್ಞೆ) - ಮಂಗಳ/ಗುರು 2-6PM, ಡಾ. ಕುಮಾರ್ (ಮಕ್ಕಳ ತಜ್ಞ) - ಸೋಮ/ಬುಧ/ಶುಕ್ರ 10AM-2PM. 24/7 ತುರ್ತು ಸಲಹೆ ಲಭ್ಯ.";
    }
    
    // Medicine information
    if (lowerMessage.includes("medicine") || lowerMessage.includes("medication") || lowerMessage.includes("drug") || lowerMessage.includes("ಔಷಧ")) {
      return language === "en" 
        ? "Common medicines information: Paracetamol - for fever/pain, 500mg every 6-8 hours. Ibuprofen - for inflammation/pain, 400mg every 8 hours with food. Crocin - fever reducer, safe for children. Always take medicines after meals unless specified. Store in cool, dry place. Check expiry dates. Consult pharmacist or doctor for drug interactions."
        : "ಸಾಮಾನ್ಯ ಔಷಧಗಳ ಮಾಹಿತಿ: ಪ್ಯಾರಾಸಿಟಮಾಲ್ - ಜ್ವರ/ನೋವಿಗೆ, 6-8 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ 500mg. ಐಬುಪ್ರೋಫೆನ್ - ಉರಿಯೂತ/ನೋವಿಗೆ, ಆಹಾರದೊಂದಿಗೆ 8 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ 400mg. ಕ್ರೋಸಿನ್ - ಜ್ವರ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ, ಮಕ್ಕಳಿಗೆ ಸುರಕ್ಷಿತ. ನಿರ್ದಿಷ್ಟಪಡಿಸದ ಹೊರತು ಆಹಾರದ ನಂತರ ಔಷಧಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.";
    }
    
    // Greetings
    if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey") || lowerMessage.includes("ನಮಸ್ಕಾರ") || lowerMessage.includes("ಹಲೋ")) {
      return language === "en" 
        ? `Hello${userName ? ` ${userName}` : ''}! I'm here to help with your health questions. You can ask me about symptoms, medications, doctor appointments, or general health advice. What would you like to know today?`
        : `ನಮಸ್ಕಾರ${userName ? ` ${userName}` : ''}! ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ನೀವು ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು, ವೈದ್ಯರ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಅಥವಾ ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಸಲಹೆಯ ಬಗ್ಗೆ ಕೇಳಬಹುದು. ಇಂದು ನೀವು ಏನು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುತ್ತೀರಿ?`;
    }
    
    // Default response
    return language === "en" 
      ? "I'm here to help with health-related questions. You can ask me about symptoms, medications, doctor appointments, or general health advice. Could you please provide more specific details about what you'd like to know?"
      : "ಆರೋಗ್ಯ ಸಂಬಂಧಿತ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ನೀವು ಲಕ್ಷಣಗಳು, ಔಷಧಗಳು, ವೈದ್ಯರ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಅಥವಾ ಸಾಮಾನ್ಯ ಆರೋಗ್ಯ ಸಲಹೆಯ ಬಗ್ಗೆ ಕೇಳಬಹುದು. ದಯವಿಟ್ಟು ನೀವು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುವ ಬಗ್ಗೆ ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟ ವಿವರಗಳನ್ನು ನೀಡಬಹುದೇ?";
  };

  const callOpenRouterAPI = async (userMessage: string) => {
    if (!apiKey || apiKey.trim() === "") {
      throw new Error("API key not provided");
    }

    const systemPrompt = language === "en" 
      ? `You are a helpful health assistant${userName ? ` for ${userName}` : ''}. Provide practical health advice, help with symptoms, medicine information, and doctor appointments. Keep responses concise and helpful. Focus on local healthcare options in Hassan, Karnataka.`
      : `ನೀವು${userName ? ` ${userName} ಗೆ` : ''} ಸಹಾಯಕಾರಿ ಆರೋಗ್ಯ ಸಹಾಯಕರು. ಪ್ರಾಯೋಗಿಕ ಆರೋಗ್ಯ ಸಲಹೆ, ಲಕ್ಷಣಗಳೊಂದಿಗೆ ಸಹಾಯ, ಔಷಧ ಮಾಹಿತಿ ಮತ್ತು ವೈದ್ಯರ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಒದಗಿಸಿ. ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಸಂಕ್ಷಿಪ್ತ ಮತ್ತು ಸಹಾಯಕವಾಗಿ ಇರಿಸಿ.`;

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
      let aiResponse = "";
      
      // Try API if key is provided and offline mode is disabled
      if (apiKey && !useOfflineMode) {
        try {
          aiResponse = await callOpenRouterAPI(messageText);
        } catch (error) {
          console.error('API call failed, falling back to offline mode:', error);
          aiResponse = getSmartResponse(messageText);
          toast({
            title: language === "en" ? "Using Offline Mode" : "ಆಫ್‌ಲೈನ್ ಮೋಡ್ ಬಳಸಲಾಗುತ್ತಿದೆ",
            description: language === "en" ? "API unavailable, using demo responses" : "API ಲಭ್ಯವಿಲ್ಲ, ಡೆಮೋ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಬಳಸಲಾಗುತ್ತಿದೆ"
          });
        }
      } else {
        // Use offline mode
        aiResponse = getSmartResponse(messageText);
      }
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: "assistant",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      
      const assistantMessage: Message = {
        id: Date.now() + 1,
        type: "assistant",
        content: language === "en" 
          ? "I'm having trouble processing your request. Please try again or check your internet connection."
          : "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಲ್ಲಿ ಸಮಸ್ಯೆ ಇದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
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

  const handleSaveApiKey = () => {
    setUseOfflineMode(false);
    setShowSettings(false);
    toast({
      title: language === "en" ? "API Key Saved" : "API ಕೀ ಉಳಿಸಲಾಗಿದೆ",
      description: language === "en" ? "Now using AI responses" : "ಈಗ AI ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಬಳಸಲಾಗುತ್ತಿದೆ"
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[calc(100vh-120px)] flex flex-col">
      {/* Status indicator */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {useOfflineMode ? (
            <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm">
              <AlertCircle className="h-4 w-4" />
              {currentText.offlineMode}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {language === "en" ? "AI Mode Active" : "AI ಮೋಡ್ ಸಕ್ರಿಯ"}
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowSettings(!showSettings)}
          className="text-gray-400 hover:text-gray-600"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Settings */}
      {showSettings && (
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {currentText.apiKeyLabel}
                </label>
                <Input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-or-v1-..."
                  className="text-sm"
                />
                <p className="text-xs text-gray-500">
                  {language === "en" 
                    ? "Get your free API key from openrouter.ai to enable AI responses"
                    : "AI ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು openrouter.ai ನಿಂದ ನಿಮ್ಮ ಉಚಿತ API ಕೀ ಪಡೆಯಿರಿ"}
                </p>
              </div>
              <Button
                onClick={handleSaveApiKey}
                disabled={!apiKey.trim()}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {currentText.saveApiKey}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Questions */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">{currentText.quickQuestions}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {quickQuestions.map((q) => (
            <Button
              key={q.id}
              variant="outline"
              size="sm"
              onClick={() => handleQuickQuestion(q.question)}
              disabled={isLoading}
              className="text-left justify-start border-green-200 text-green-700 hover:bg-green-50"
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
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
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
