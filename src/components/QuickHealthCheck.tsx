
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Thermometer, Activity, TrendingUp, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuickHealthCheckProps {
  language: string;
}

const QuickHealthCheck = ({ language }: QuickHealthCheckProps) => {
  const [vitals, setVitals] = useState({
    bloodPressure: "",
    heartRate: "",
    temperature: "",
    weight: ""
  });
  const [isRecording, setIsRecording] = useState(false);
  const { toast } = useToast();

  const text = {
    en: {
      title: "Quick Health Check",
      bloodPressure: "Blood Pressure",
      heartRate: "Heart Rate",
      temperature: "Temperature",
      weight: "Weight",
      record: "Record Vitals",
      bpPlaceholder: "120/80",
      hrPlaceholder: "72 BPM",
      tempPlaceholder: "98.6°F",
      weightPlaceholder: "65 kg",
      recorded: "Vitals Recorded!",
      recordedDesc: "Your health data has been saved",
      normal: "Normal",
      checkReminder: "Regular health checks help prevent diseases"
    },
    kn: {
      title: "ತ್ವರಿತ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆ",
      bloodPressure: "ರಕ್ತದೊತ್ತಡ",
      heartRate: "ಹೃದಯ ಬಡಿತ",
      temperature: "ತಾಪಮಾನ",
      weight: "ತೂಕ",
      record: "ಮಾಪಕಗಳನ್ನು ದಾಖಲಿಸಿ",
      bpPlaceholder: "120/80",
      hrPlaceholder: "72 BPM",
      tempPlaceholder: "98.6°F",
      weightPlaceholder: "65 kg",
      recorded: "ಮಾಪಕಗಳನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ!",
      recordedDesc: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಡೇಟಾವನ್ನು ಉಳಿಸಲಾಗಿದೆ",
      normal: "ಸಾಮಾನ್ಯ",
      checkReminder: "ನಿಯಮಿತ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆಗಳು ರೋಗಗಳನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ"
    }
  };

  const currentText = text[language];

  const handleRecord = () => {
    setIsRecording(true);
    
    setTimeout(() => {
      setIsRecording(false);
      toast({
        title: currentText.recorded,
        description: currentText.recordedDesc
      });
      // Reset form
      setVitals({
        bloodPressure: "",
        heartRate: "",
        temperature: "",
        weight: ""
      });
    }, 2000);
  };

  return (
    <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2 text-green-800">
          <Activity className="h-5 w-5" />
          {currentText.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-green-700 mb-1 block">
              {currentText.bloodPressure}
            </label>
            <div className="relative">
              <Heart className="h-3 w-3 absolute left-2 top-2.5 text-green-500" />
              <Input
                value={vitals.bloodPressure}
                onChange={(e) => setVitals({...vitals, bloodPressure: e.target.value})}
                placeholder={currentText.bpPlaceholder}
                className="pl-7 h-8 text-xs border-green-200"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-green-700 mb-1 block">
              {currentText.heartRate}
            </label>
            <div className="relative">
              <Activity className="h-3 w-3 absolute left-2 top-2.5 text-green-500" />
              <Input
                value={vitals.heartRate}
                onChange={(e) => setVitals({...vitals, heartRate: e.target.value})}
                placeholder={currentText.hrPlaceholder}
                className="pl-7 h-8 text-xs border-green-200"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-green-700 mb-1 block">
              {currentText.temperature}
            </label>
            <div className="relative">
              <Thermometer className="h-3 w-3 absolute left-2 top-2.5 text-green-500" />
              <Input
                value={vitals.temperature}
                onChange={(e) => setVitals({...vitals, temperature: e.target.value})}
                placeholder={currentText.tempPlaceholder}
                className="pl-7 h-8 text-xs border-green-200"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-green-700 mb-1 block">
              {currentText.weight}
            </label>
            <div className="relative">
              <TrendingUp className="h-3 w-3 absolute left-2 top-2.5 text-green-500" />
              <Input
                value={vitals.weight}
                onChange={(e) => setVitals({...vitals, weight: e.target.value})}
                placeholder={currentText.weightPlaceholder}
                className="pl-7 h-8 text-xs border-green-200"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 text-xs">
            <CheckCircle className="h-3 w-3 mr-1" />
            {currentText.normal}
          </Badge>
        </div>

        <Button
          onClick={handleRecord}
          disabled={isRecording}
          className={`w-full h-9 text-sm ${
            isRecording 
              ? "bg-green-600 animate-pulse" 
              : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          }`}
        >
          <Activity className="h-4 w-4 mr-2" />
          {isRecording ? (language === "en" ? "Recording..." : "ದಾಖಲಿಸುತ್ತಿದೆ...") : currentText.record}
        </Button>

        <p className="text-xs text-green-600 text-center leading-relaxed">
          💡 {currentText.checkReminder}
        </p>
      </CardContent>
    </Card>
  );
};

export default QuickHealthCheck;
