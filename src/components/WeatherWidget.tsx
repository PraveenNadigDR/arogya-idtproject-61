
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Cloud, CloudRain, Thermometer, Droplets, Wind } from "lucide-react";

interface WeatherWidgetProps {
  language: string;
}

const WeatherWidget = ({ language }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState({
    temp: 28,
    condition: "sunny",
    humidity: 65,
    windSpeed: 12,
    location: "Hassan, Karnataka"
  });

  const text = {
    en: {
      weather: "Weather",
      humidity: "Humidity",
      wind: "Wind",
      healthAdvice: "Stay hydrated in this weather",
      goodForWalk: "Perfect weather for a walk!"
    },
    kn: {
      weather: "ಹವಾಮಾನ",
      humidity: "ಆರ್ದ್ರತೆ",
      wind: "ಗಾಳಿ",
      healthAdvice: "ಈ ಹವಾಮಾನದಲ್ಲಿ ನೀರು ಕುಡಿಯಿರಿ",
      goodForWalk: "ನಡಿಗೆಗೆ ಉತ್ತಮ ಹವಾಮಾನ!"
    }
  };

  const currentText = text[language];
  
  const getWeatherIcon = () => {
    switch (weather.condition) {
      case "sunny":
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case "rainy":
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {getWeatherIcon()}
            <div>
              <h3 className="font-semibold text-blue-800">{currentText.weather}</h3>
              <p className="text-xs text-blue-600">{weather.location}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-800">{weather.temp}°C</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center gap-1 text-xs text-blue-700">
            <Droplets className="h-3 w-3" />
            <span>{currentText.humidity}: {weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-blue-700">
            <Wind className="h-3 w-3" />
            <span>{currentText.wind}: {weather.windSpeed} km/h</span>
          </div>
        </div>

        <Badge variant="secondary" className="w-full bg-blue-100 text-blue-700 border-blue-200 text-xs">
          💡 {currentText.goodForWalk}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
