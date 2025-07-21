
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
      category: "home",
      title: language === "en" ? "Turmeric-Ginger Morning Drink" : "ಅರಿಶಿಣ-ಶುಂಠಿ ಬೆಳಗಿನ ಪಾನೀಯ",
      content: language === "en" 
        ? "Drink warm water with turmeric and ginger every morning. This Ayurvedic remedy boosts immunity and reduces inflammation for modern lifestyle stress."
        : "ಪ್ರತಿ ಬೆಳಿಗ್ಗೆ ಅರಿಶಿಣ ಮತ್ತು ಶುಂಠಿಯೊಂದಿಗೆ ಬೆಚ್ಚಗಿನ ನೀರನ್ನು ಕುಡಿಯಿರಿ. ಈ ಆಯುರ್ವೇದ ಔಷಧಿಯು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಆಧುನಿಕ ಜೀವನಶೈಲಿಯ ಒತ್ತಡಕ್ಕೆ ಉರಿಯೂತವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
      icon: "🟡",
      urgency: "high",
      likes: 412
    },
    {
      id: 2,
      category: "diet",
      title: language === "en" ? "Winter Warming Foods" : "ಚಳಿಗಾಲದ ಬೆಚ್ಚಗಾಗಿಸುವ ಆಹಾರಗಳು",
      content: language === "en" 
        ? "Include sesame seeds, jaggery, and dry fruits in winter diet. These provide warmth and energy according to seasonal Ayurvedic principles."
        : "ಚಳಿಗಾಲದ ಆಹಾರದಲ್ಲಿ ಎಳ್ಳು, ಗುಡ ಮತ್ತು ಒಣ ಹಣ್ಣುಗಳನ್ನು ಸೇರಿಸಿ. ಇವು ಋತುವಿನ ಆಯುರ್ವೇದ ತತ್ವಗಳ ಪ್ರಕಾರ ಬೆಚ್ಚಗೆ ಮತ್ತು ಶಕ್ತಿಯನ್ನು ಒದಗಿಸುತ್ತವೆ.",
      icon: "🔥",
      urgency: "high",
      likes: 324
    },
    {
      id: 3,
      category: "mental",
      title: language === "en" ? "Digital Detox with Pranayama" : "ಪ್ರಾಣಾಯಾಮದೊಂದಿಗೆ ಡಿಜಿಟಲ್ ಡೆಟಾಕ್ಸ್",
      content: language === "en" 
        ? "Practice Anulom-Vilom for 10 minutes after reducing screen time. This ancient breathing technique calms mind from modern digital stress."
        : "ಪರದೆಯ ಸಮಯವನ್ನು ಕಡಿಮೆ ಮಾಡಿದ ನಂತರ ೧೦ ನಿಮಿಷಗಳ ಕಾಲ ಅನುಲೋಮ-ವಿಲೋಮವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ. ಈ ಪ್ರಾಚೀನ ಉಸಿರಾಟದ ತಂತ್ರವು ಆಧುನಿಕ ಡಿಜಿಟಲ್ ಒತ್ತಡದಿಂದ ಮನಸ್ಸನ್ನು ಶಾಂತಗೊಳಿಸುತ್ತದೆ.",
      icon: "📱",
      urgency: "high",
      likes: 289
    },
    {
      id: 4,
      category: "home",
      title: language === "en" ? "Triphala for Modern Digestion" : "ಆಧುನಿಕ ಜೀರ್ಣಕ್ರಿಯೆಗೆ ತ್ರಿಫಲಾ",
      content: language === "en" 
        ? "Take 1 tsp Triphala powder with warm water before sleep. Perfect for busy professionals with irregular eating habits."
        : "ನಿದ್ರೆಗೆ ಮುನ್ನ ಬೆಚ್ಚಗಿನ ನೀರಿನೊಂದಿಗೆ ೧ ಚಮಚ ತ್ರಿಫಲಾ ಪುಡಿ ತೆಗೆದುಕೊಳ್ಳಿ. ಅನಿಯಮಿತ ತಿನ್ನುವ ಅಭ್ಯಾಸಗಳನ್ನು ಹೊಂದಿರುವ ಕಾರ್ಯನಿರತ ವೃತ್ತಿಪರರಿಗೆ ಪರಿಪೂರ್ಣ.",
      icon: "🌿",
      urgency: "medium",
      likes: 267
    },
    {
      id: 5,
      category: "seasonal",
      title: language === "en" ? "Monsoon Immunity Booster" : "ಮಾನ್ಸೂನ್ ರೋಗನಿರೋಧಕ ಬೂಸ್ಟರ್",
      content: language === "en" 
        ? "Drink kadha made with tulsi, ginger, and honey during monsoons. Prevents seasonal flu and strengthens immunity against infections."
        : "ಮಾನ್ಸೂನ್ ಸಮಯದಲ್ಲಿ ತುಳಸಿ, ಶುಂಠಿ ಮತ್ತು ಜೇನಿನಿಂದ ಮಾಡಿದ ಕಷಾಯವನ್ನು ಕುಡಿಯಿರಿ. ಋತುವಿನ ಜ್ವರವನ್ನು ತಡೆಯುತ್ತದೆ ಮತ್ತು ಸೋಂಕುಗಳ ವಿರುದ್ಧ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಬಲಪಡಿಸುತ್ತದೆ.",
      icon: "🌧️",
      urgency: "medium",
      likes: 201
    },
    {
      id: 6,
      category: "diet",
      title: language === "en" ? "Office Snack Ayurveda" : "ಕಛೇರಿ ಲಘು ಆಹಾರ ಆಯುರ್ವೇದ",
      content: language === "en" 
        ? "Replace processed snacks with roasted makhana and almonds. These sattvic foods maintain energy without causing lethargy."
        : "ಸಂಸ್ಕರಿಸಿದ ಲಘು ಆಹಾರಗಳನ್ನು ಹುರಿದ ಮಖಾನಾ ಮತ್ತು ಬಾದಾಮಿಗಳಿಂದ ಬದಲಿಸಿ. ಈ ಸಾತ್ವಿಕ ಆಹಾರಗಳು ಆಲಸ್ಯವನ್ನು ಉಂಟುಮಾಡದೆ ಶಕ್ತಿಯನ್ನು ಕಾಪಾಡುತ್ತವೆ.",
      icon: "🥜",
      urgency: "medium",
      likes: 186
    },
    {
      id: 7,
      category: "exercise",
      title: language === "en" ? "Desk Yoga for IT Professionals" : "ಐಟಿ ವೃತ್ತಿಪರರಿಗೆ ಮೇಜಿನ ಯೋಗ",
      content: language === "en" 
        ? "Practice neck rotations and shoulder stretches every hour. Simple asanas to counter prolonged sitting and computer work."
        : "ಪ್ರತಿ ಗಂಟೆಗೆ ಕುತ್ತಿಗೆ ತಿರುಗಿಸುವಿಕೆ ಮತ್ತು ಭುಜದ ಹಿಗ್ಗಿಸುವಿಕೆಯನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ. ದೀರ್ಘಕಾಲ ಕುಳಿತುಕೊಳ್ಳುವುದು ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಕೆಲಸವನ್ನು ಎದುರಿಸಲು ಸರಳ ಆಸನಗಳು.",
      icon: "🧘‍♀️",
      urgency: "medium",
      likes: 156
    },
    {
      id: 8,
      category: "home",
      title: language === "en" ? "Golden Milk for Better Sleep" : "ಉತ್ತಮ ನಿದ್ರೆಗಾಗಿ ಚಿನ್ನದ ಹಾಲು",
      content: language === "en" 
        ? "Drink warm milk with turmeric and cardamom before bed. This traditional recipe promotes deep sleep and recovery from daily stress."
        : "ಮಲಗುವ ಮುನ್ನ ಅರಿಶಿಣ ಮತ್ತು ಏಲಕ್ಕಿಯೊಂದಿಗೆ ಬೆಚ್ಚಗಿನ ಹಾಲನ್ನು ಕುಡಿಯಿರಿ. ಈ ಸಾಂಪ್ರದಾಯಿಕ ಪಾಕವಿಧಾನವು ಆಳವಾದ ನಿದ್ರೆ ಮತ್ತು ದೈನಂದಿನ ಒತ್ತಡದಿಂದ ಚೇತರಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ.",
      icon: "🥛",
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
