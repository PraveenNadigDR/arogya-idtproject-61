
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, Heart, Zap } from "lucide-react";

interface HealthMetricsProps {
  language: string;
}

const HealthMetrics = ({ language }: HealthMetricsProps) => {
  const text = {
    en: {
      metrics: "Health Metrics",
      steps: "Steps Today",
      calories: "Calories",
      waterIntake: "Water Intake",
      sleepHours: "Sleep",
      excellent: "Excellent",
      good: "Good",
      target: "Target"
    },
    kn: {
      metrics: "ಆರೋಗ್ಯ ಮಾಪಕಗಳು",
      steps: "ಇಂದಿನ ಹೆಜ್ಜೆಗಳು",
      calories: "ಕ್ಯಾಲೋರಿಗಳು",
      waterIntake: "ನೀರಿನ ಸೇವನೆ",
      sleepHours: "ನಿದ್ರೆ",
      excellent: "ಅತ್ಯುತ್ತಮ",
      good: "ಒಳ್ಳೆಯದು",
      target: "ಗುರಿ"
    }
  };

  const currentText = text[language];

  const metrics = [
    {
      icon: Activity,
      label: currentText.steps,
      value: "8,542",
      target: "10,000",
      progress: 85,
      trend: "up",
      color: "blue"
    },
    {
      icon: Zap,
      label: currentText.calories,
      value: "1,850",
      target: "2,200",
      progress: 84,
      trend: "up",
      color: "orange"
    },
    {
      icon: Heart,
      label: currentText.waterIntake,
      value: "6 glasses",
      target: "8 glasses",
      progress: 75,
      trend: "down",
      color: "blue"
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        <Activity className="h-4 w-4 text-green-600" />
        {currentText.metrics}
      </h3>
      
      <div className="grid grid-cols-1 gap-3">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-white border-gray-100 shadow-sm">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-${metric.color}-100`}>
                    <metric.icon className={`h-4 w-4 text-${metric.color}-600`} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-700">{metric.label}</p>
                    <p className="text-sm font-bold text-gray-900">{metric.value}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className="text-xs text-gray-600">{metric.progress}%</span>
                  </div>
                  <p className="text-xs text-gray-500">{currentText.target}: {metric.target}</p>
                </div>
              </div>
              
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className={`bg-${metric.color}-500 h-1.5 rounded-full transition-all duration-300`}
                    style={{ width: `${metric.progress}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthMetrics;
