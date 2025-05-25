
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Sun, Droplets, Apple, Moon, Thermometer } from "lucide-react";

interface HealthTipsProps {
  language: string;
}

const HealthTips = ({ language }: HealthTipsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const text = {
    en: {
      title: "Health Tips",
      subtitle: "Traditional Wisdom & Modern Care",
      categories: {
        all: "All Tips",
        seasonal: "Seasonal",
        diet: "Diet & Nutrition",
        home: "Home Remedies",
        exercise: "Exercise",
        mental: "Mental Health"
      },
      todaysTip: "Today's Special Tip",
      popularTips: "Popular in Your Area",
      seasonalAlert: "Seasonal Health Alert"
    },
    kn: {
      title: "ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
      subtitle: "ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಞಾನ ಮತ್ತು ಆಧುನಿಕ ಆರೈಕೆ",
      categories: {
        all: "ಎಲ್ಲಾ ಸಲಹೆಗಳು",
        seasonal: "ಋತುವಿನ ಪ್ರಕಾರ",
        diet: "ಆಹಾರ ಮತ್ತು ಪೋಷಣೆ",
        home: "ಮನೆಯ ಔಷಧಗಳು",
        exercise: "ವ್ಯಾಯಾಮ",
        mental: "ಮಾನಸಿಕ ಆರೋಗ್ಯ"
      },
      todaysTip: "ಇಂದಿನ ವಿಶೇಷ ಸಲಹೆ",
      popularTips: "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಜನಪ್ರಿಯ",
      seasonalAlert: "ಋತುವಿನ ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆ"
    }
  };

  const currentText = text[language];

  const categories = [
    { id: "all", name: currentText.categories.all, icon: Heart },
    { id: "seasonal", name: currentText.categories.seasonal, icon: Sun },
    { id: "diet", name: currentText.categories.diet, icon: Apple },
    { id: "home", name: currentText.categories.home, icon: Droplets },
    { id: "exercise", name: currentText.categories.exercise, icon: Heart },
    { id: "mental", name: currentText.categories.mental, icon: Moon }
  ];

  const healthTips = [
    {
      id: 1,
      category: "seasonal",
      title: language === "en" ? "Monsoon Health Care" : "ಮಾನ್ಸೂನ್ ಆರೋಗ್ಯ ಆರೈಕೆ",
      content: language === "en" 
        ? "Drink turmeric milk before bed to boost immunity. Keep mosquito breeding areas clean."
        : "ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸಲು ಮಲಗುವ ಮೊದಲು ಅರಿಶಿನ ಹಾಲು ಕುಡಿಯಿರಿ. ಸೊಳ್ಳೆ ಸಾಕಣೆ ಪ್ರದೇಶಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ.",
      icon: "🌧️",
      urgency: "high",
      likes: 245
    },
    {
      id: 2,
      category: "diet",
      title: language === "en" ? "Ragi for Diabetes" : "ಮಧುಮೇಹಕ್ಕೆ ರಾಗಿ",
      content: language === "en" 
        ? "Include ragi (finger millet) in your diet. It helps control blood sugar naturally."
        : "ನಿಮ್ಮ ಆಹಾರದಲ್ಲಿ ರಾಗಿಯನ್ನು ಸೇರಿಸಿ. ಇದು ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ನಿಯಂತ್ರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      icon: "🌾",
      urgency: "medium",
      likes: 189
    },
    {
      id: 3,
      category: "home",
      title: language === "en" ? "Tulsi for Cough" : "ಕೆಮ್ಮಿಗೆ ತುಳಸಿ",
      content: language === "en" 
        ? "Boil tulsi leaves with ginger and honey. Drink warm for cough relief."
        : "ತುಳಸಿ ಎಲೆಗಳನ್ನು ಶುಂಠಿ ಮತ್ತು ಜೇನಿನೊಂದಿಗೆ ಕುದಿಸಿ. ಕೆಮ್ಮು ಪರಿಹಾರಕ್ಕಾಗಿ ಬೆಚ್ಚಗಿನ ಅಂದದಲ್ಲಿ ಕುಡಿಯಿರಿ.",
      icon: "🌿",
      urgency: "low",
      likes: 312
    },
    {
      id: 4,
      category: "exercise",
      title: language === "en" ? "Morning Walk Benefits" : "ಬೆಳಗಿನ ನಡಿಗೆಯ ಪ್ರಯೋಜನಗಳು",
      content: language === "en" 
        ? "20 minutes morning walk improves heart health and controls blood pressure."
        : "೨೦ ನಿಮಿಷಗಳ ಬೆಳಗಿನ ನಡಿಗೆ ಹೃದಯದ ಆರೋಗ್ಯವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ರಕ್ತದೊತ್ತಡವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ.",
      icon: "🚶‍♂️",
      urgency: "medium",
      likes: 156
    },
    {
      id: 5,
      category: "mental",
      title: language === "en" ? "Stress Relief with Pranayama" : "ಪ್ರಾಣಾಯಾಮದೊಂದಿಗೆ ಒತ್ತಡ ಪರಿಹಾರ",
      content: language === "en" 
        ? "Practice deep breathing (pranayama) for 10 minutes daily to reduce stress and anxiety."
        : "ಒತ್ತಡ ಮತ್ತು ಆತಂಕವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ದಿನಕ್ಕೆ ೧೦ ನಿಮಿಷಗಳ ಕಾಲ ಆಳವಾದ ಉಸಿರಾಟ (ಪ್ರಾಣಾಯಾಮ) ಅಭ್ಯಾಸ ಮಾಡಿ.",
      icon: "🧘‍♀️",
      urgency: "medium",
      likes: 198
    },
    {
      id: 6,
      category: "seasonal",
      title: language === "en" ? "Summer Hydration" : "ಬೇಸಿಗೆಯ ನೀರಸಿಕೆ",
      content: language === "en" 
        ? "Drink tender coconut water and buttermilk to stay hydrated in summer."
        : "ಬೇಸಿಗೆಯಲ್ಲಿ ನೀರಸಿಕೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ಎಳೆ ತೆಂಗಿನ ನೀರು ಮತ್ತು ಮಜ್ಜಿಗೆ ಕುಡಿಯಿರಿ.",
      icon: "🥥",
      urgency: "high",
      likes: 267
    }
  ];

  const filteredTips = selectedCategory === "all" 
    ? healthTips 
    : healthTips.filter(tip => tip.category === selectedCategory);

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-green-800 flex items-center gap-2">
            <Heart className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-green-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Seasonal Alert */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <Thermometer className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-orange-800">
                {currentText.seasonalAlert}
              </h4>
              <p className="text-sm text-orange-600">
                {language === "en" 
                  ? "🦟 Dengue cases rising in Hassan. Use mosquito nets and keep water containers covered."
                  : "🦟 ಹಾಸನ್‌ನಲ್ಲಿ ಡೆಂಗ್ಯೂ ಪ್ರಕರಣಗಳು ಹೆಚ್ಚುತ್ತಿವೆ. ಸೊಳ್ಳೆ ಬಲೆಗಳನ್ನು ಬಳಸಿ ಮತ್ತು ನೀರಿನ ಪಾತ್ರೆಗಳನ್ನು ಮುಚ್ಚಿಡಿ."
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={`whitespace-nowrap flex items-center gap-2 ${
              selectedCategory === category.id 
                ? "bg-green-600 hover:bg-green-700" 
                : "border-green-300 text-green-700 hover:bg-green-50"
            }`}
          >
            <category.icon className="h-3 w-3" />
            {category.name}
          </Button>
        ))}
      </div>

      {/* Today's Special Tip */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-md text-blue-800">
            ⭐ {currentText.todaysTip}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🌟</div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                {language === "en" 
                  ? "Start your day with warm lemon honey water"
                  : "ಬೆಚ್ಚಗಿನ ನಿಂಬೆ ಜೇನು ನೀರಿನೊಂದಿಗೆ ನಿಮ್ಮ ದಿನವನ್ನು ಪ್ರಾರಂಭಿಸಿ"
                }
              </h4>
              <p className="text-sm text-gray-600">
                {language === "en" 
                  ? "This traditional remedy improves digestion, boosts immunity, and helps detoxify your body naturally."
                  : "ಈ ಸಾಂಪ್ರದಾಯಿಕ ಔಷಧವು ಜೀರಣಕ್ರಿಯೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ, ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ದೇಹವನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ವಿಷಮುಕ್ತಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Health Tips List */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          {selectedCategory === "all" ? currentText.popularTips : categories.find(c => c.id === selectedCategory)?.name}
        </h3>
        
        <div className="space-y-3">
          {filteredTips.map((tip) => (
            <Card key={tip.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{tip.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{tip.title}</h4>
                      <Badge className={getUrgencyColor(tip.urgency)}>
                        {tip.urgency}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{tip.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Heart className="h-3 w-3" />
                        <span>{tip.likes} {language === "en" ? "likes" : "ಇಷ್ಟಗಳು"}</span>
                      </div>
                      <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                        {language === "en" ? "Save Tip" : "ಸಲಹೆ ಉಳಿಸಿ"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Health Quote */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-4 text-center">
          <div className="text-3xl mb-2">🙏</div>
          <p className="text-purple-800 font-medium italic">
            {language === "en" 
              ? "\"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.\""
              : "\"ಆರೋಗ್ಯವೇ ದೊಡ್ಡ ಸಂಪತ್ತು, ಸಂತೃಪ್ತಿಯೇ ದೊಡ್ಡ ಐಶ್ವರ್ಯ, ನಂಬಿಕೆಯೇ ಅತ್ತ್ಯುತ್ತಮ ಸಂಬಂಧ.\""
            }
          </p>
          <p className="text-sm text-purple-600 mt-2">- Buddha</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthTips;
