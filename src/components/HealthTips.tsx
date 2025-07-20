
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
      category: "exercise",
      title: language === "en" ? "Heart-Healthy Walking for Hassan Residents" : "ಹಾಸನ್ ನಿವಾಸಿಗಳಿಗೆ ಹೃದಯ-ಆರೋಗ್ಯಕರ ನಡಿಗೆ",
      content: language === "en" 
        ? "Walk 30 minutes daily in Hassan's parks like Gorur Dam area. Early morning walking strengthens heart muscles and reduces heart attack risk."
        : "ಗೋರೂರ್ ಅಣೆಕಟ್ಟು ಪ್ರದೇಶದಂತಹ ಹಾಸನ್‌ನ ಉದ್ಯಾನವನಗಳಲ್ಲಿ ದಿನಕ್ಕೆ ೩೦ ನಿಮಿಷ ನಡೆಯಿರಿ. ಬೆಳಗಿನ ನಡಿಗೆ ಹೃದಯ ಸ್ನಾಯುಗಳನ್ನು ಬಲಪಡಿಸುತ್ತದೆ ಮತ್ತು ಹೃದಯಾಘಾತದ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
      icon: "💓",
      urgency: "high",
      likes: 412
    },
    {
      id: 2,
      category: "diet",
      title: language === "en" ? "Hassan-Special Heart Diet" : "ಹಾಸನ್-ವಿಶೇಷ ಹೃದಯ ಆಹಾರ",
      content: language === "en" 
        ? "Include local ragi, jowar, and green leafy vegetables. Limit oil to 3 tsp/day. Avoid processed foods and excess salt."
        : "ಸ್ಥಳೀಯ ರಾಗಿ, ಜೋಳ ಮತ್ತು ಹಸಿರು ಎಲೆಕೋಸು ತರಕಾರಿಗಳನ್ನು ಸೇರಿಸಿ. ಎಣ್ಣೆಯನ್ನು ದಿನಕ್ಕೆ ೩ ಚಮಚಕ್ಕೆ ಸೀಮಿತಗೊಳಿಸಿ. ಸಂಸ್ಕರಿಸಿದ ಆಹಾರ ಮತ್ತು ಅಧಿಕ ಉಪ್ಪನ್ನು ತಪ್ಪಿಸಿ.",
      icon: "🍃",
      urgency: "high",
      likes: 324
    },
    {
      id: 3,
      category: "mental",
      title: language === "en" ? "Stress Management for Heart Health" : "ಹೃದಯ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಒತ್ತಡ ನಿರ್ವಹಣೆ",
      content: language === "en" 
        ? "Practice pranayama 15 minutes daily. Avoid anger and sudden stress. Take breaks during work to reduce heart strain."
        : "ದಿನಕ್ಕೆ ೧೫ ನಿಮಿಷ ಪ್ರಾಣಾಯಾಮ ಅಭ್ಯಾಸ ಮಾಡಿ. ಕೋಪ ಮತ್ತು ಹಠಾತ್ ಒತ್ತಡವನ್ನು ತಪ್ಪಿಸಿ. ಹೃದಯದ ಒತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ವಿರಾಮ ತೆಗೆದುಕೊಳ್ಳಿ.",
      icon: "🧘‍♂️",
      urgency: "high",
      likes: 289
    },
    {
      id: 4,
      category: "home",
      title: language === "en" ? "Garlic-Honey Heart Remedy" : "ಬೆಳ್ಳುಳ್ಳಿ-ಜೇನು ಹೃದಯ ಔಷಧ",
      content: language === "en" 
        ? "Consume 2 cloves of raw garlic with honey on empty stomach daily. This helps reduce cholesterol and strengthens heart."
        : "ದಿನಕ್ಕೆ ಖಾಲಿ ಹೊಟ್ಟೆಯಲ್ಲಿ ಜೇನಿನೊಂದಿಗೆ ೨ ಬೆಳ್ಳುಳ್ಳಿ ಗಿಣ್ಣುಗಳನ್ನು ಸೇವಿಸಿ. ಇದು ಕೊಲೆಸ್ಟ್ರಾಲ್ ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ಹೃದಯವನ್ನು ಬಲಪಡಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      icon: "🧄",
      urgency: "medium",
      likes: 267
    },
    {
      id: 5,
      category: "seasonal",
      title: language === "en" ? "Monsoon Heart Care in Hassan" : "ಹಾಸನ್‌ನಲ್ಲಿ ಮಾನ್ಸೂನ್ ಹೃದಯ ಆರೈಕೆ",
      content: language === "en" 
        ? "During monsoons, maintain regular exercise indoors. Keep blood pressure medications dry. Avoid heavy meals that strain the heart."
        : "ಮಾನ್ಸೂನ್ ಸಮಯದಲ್ಲಿ, ಮನೆಯೊಳಗೆ ನಿಯಮಿತ ವ್ಯಾಯಾಮವನ್ನು ಮುಂದುವರಿಸಿ. ರಕ್ತದೊತ್ತಡದ ಔಷಧಿಗಳನ್ನು ಒಣವಾಗಿಡಿ. ಹೃದಯಕ್ಕೆ ಒತ್ತಡ ಉಂಟುಮಾಡುವ ಭಾರೀ ಊಟವನ್ನು ತಪ್ಪಿಸಿ.",
      icon: "🌧️",
      urgency: "medium",
      likes: 201
    },
    {
      id: 6,
      category: "diet",
      title: language === "en" ? "Omega-3 Rich Foods for Heart" : "ಹೃದಯಕ್ಕಾಗಿ ಒಮೆಗಾ-೩ ಸಮೃದ್ಧ ಆಹಾರಗಳು",
      content: language === "en" 
        ? "Include walnuts, flax seeds, and fish in your diet. These provide omega-3 fatty acids that protect against heart disease."
        : "ನಿಮ್ಮ ಆಹಾರದಲ್ಲಿ ಅಕ್ರೋಡು, ಅಗಸೆ ಬೀಜಗಳು ಮತ್ತು ಮೀನನ್ನು ಸೇರಿಸಿ. ಇವು ಹೃದಯ ರೋಗದಿಂದ ರಕ್ಷಿಸುವ ಒಮೆಗಾ-೩ ಕೊಬ್ಬಿನಾಮ್ಲಗಳನ್ನು ಒದಗಿಸುತ್ತವೆ.",
      icon: "🐟",
      urgency: "medium",
      likes: 186
    },
    {
      id: 7,
      category: "exercise",
      title: language === "en" ? "Yoga for Heart Strength" : "ಹೃದಯ ಬಲಕ್ಕಾಗಿ ಯೋಗ",
      content: language === "en" 
        ? "Practice gentle yoga poses like Sukhasana and Bhujangasana. These improve heart circulation and reduce blood pressure."
        : "ಸುಖಾಸನ ಮತ್ತು ಭುಜಂಗಾಸನದಂತಹ ಸೌಮ್ಯ ಯೋಗಾಸನಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ. ಇವು ಹೃದಯ ಪರಿಚಲನೆಯನ್ನು ಸುಧಾರಿಸುತ್ತವೆ ಮತ್ತು ರಕ್ತದೊತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.",
      icon: "🧘‍♀️",
      urgency: "medium",
      likes: 156
    },
    {
      id: 8,
      category: "home",
      title: language === "en" ? "Tulsi for Heart Health" : "ಹೃದಯ ಆರೋಗ್ಯಕ್ಕಾಗಿ ತುಳಸಿ",
      content: language === "en" 
        ? "Chew 5-7 fresh tulsi leaves every morning. Tulsi helps reduce cholesterol and strengthens heart muscles naturally."
        : "ಪ್ರತಿ ಬೆಳಿಗ್ಗೆ ೫-೭ ತಾಜಾ ತುಳಸಿ ಎಲೆಗಳನ್ನು ಅಗಿಯಿರಿ. ತುಳಸಿ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ಹೃದಯ ಸ್ನಾಯುಗಳನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಬಲಪಡಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      icon: "🌿",
      urgency: "low",
      likes: 234
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

      {/* Today's Special Tip - Hassan Heart Health Focus */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-md text-red-800 flex items-center gap-2">
            <Heart className="h-5 w-5" />
            💓 {currentText.todaysTip} - {language === "en" ? "Hassan District" : "ಹಾಸನ್ ಜಿಲ್ಲೆ"}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-xl">⚠️</div>
              <span className="font-semibold text-red-800">
                {language === "en" 
                  ? "Health Alert for Hassan District"
                  : "ಹಾಸನ್ ಜಿಲ್ಲೆಗೆ ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆ"
                }
              </span>
            </div>
            <p className="text-sm text-red-700">
              {language === "en" 
                ? "Heart attack cases are increasing in Hassan district. Follow these preventive measures daily."
                : "ಹಾಸನ್ ಜಿಲ್ಲೆಯಲ್ಲಿ ಹೃದಯಾಘಾತದ ಪ್ರಕರಣಗಳು ಹೆಚ್ಚುತ್ತಿವೆ. ಈ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ದಿನನಿತ್ಯ ಅನುಸರಿಸಿ."
              }
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🚶‍♂️</div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {language === "en" 
                    ? "Daily 30-Minute Walk"
                    : "ದಿನಕ್ಕೆ ೩೦ ನಿಮಿಷಗಳ ನಡಿಗೆ"
                  }
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "en" 
                    ? "Walk for 30 minutes daily, preferably early morning. This strengthens your heart and improves circulation."
                    : "ದಿನಕ್ಕೆ ೩೦ ನಿಮಿಷಗಳ ಕಾಲ, ಆದ್ಯತೆ ಬೆಳಗಿನ ಜಾವದಲ್ಲಿ ನಡೆಯಿರಿ. ಇದು ನಿಮ್ಮ ಹೃದಯವನ್ನು ಬಲಪಡಿಸುತ್ತದೆ ಮತ್ತು ರಕ್ತ ಪರಿಚಲನೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ."
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">🥗</div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {language === "en" 
                    ? "Heart-Healthy Diet"
                    : "ಹೃದಯ-ಆರೋಗ್ಯಕರ ಆಹಾರ"
                  }
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "en" 
                    ? "Include ragi, jowar, green leafy vegetables, and fruits. Reduce oil, salt, and sugar intake."
                    : "ರಾಗಿ, ಜೋಳ, ಹಸಿರು ಎಲೆಕೋಸು ತರಕಾರಿಗಳು ಮತ್ತು ಹಣ್ಣುಗಳನ್ನು ಸೇರಿಸಿ. ಎಣ್ಣೆ, ಉಪ್ಪು ಮತ್ತು ಸಕ್ಕರೆ ಸೇವನೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ."
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="text-2xl">🧘‍♀️</div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {language === "en" 
                    ? "Stress Management"
                    : "ಒತ್ತಡ ನಿರ್ವಹಣೆ"
                  }
                </h4>
                <p className="text-sm text-gray-600">
                  {language === "en" 
                    ? "Practice pranayama (breathing exercises) and meditation for 15 minutes daily. Avoid smoking and excessive alcohol."
                    : "ದಿನಕ್ಕೆ ೧೫ ನಿಮಿಷಗಳ ಕಾಲ ಪ್ರಾಣಾಯಾಮ (ಉಸಿರಾಟದ ವ್ಯಾಯಾಮ) ಮತ್ತು ಧ್ಯಾನವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ. ಧೂಮಪಾನ ಮತ್ತು ಅಧಿಕ ಮದ್ಯಪಾನವನ್ನು ತಪ್ಪಿಸಿ."
                  }
                </p>
              </div>
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
