
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, User, Heart, Calendar, Plus, Thermometer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FamilyHealthProps {
  language: string;
}

const FamilyHealth = ({ language }: FamilyHealthProps) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const { toast } = useToast();

  const text = {
    en: {
      title: "Family Health",
      subtitle: "Manage Everyone's Health",
      addMember: "Add Family Member",
      viewHealth: "View Health",
      lastCheckup: "Last Checkup",
      medicines: "Medicines",
      alerts: "Health Alerts",
      upcoming: "Upcoming",
      normal: "Normal",
      attention: "Needs Attention",
      critical: "Critical"
    },
    kn: {
      title: "ಕುಟುಂಬದ ಆರೋಗ್ಯ",
      subtitle: "ಎಲ್ಲರ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ",
      addMember: "ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ",
      viewHealth: "ಆರೋಗ್ಯವನ್ನು ನೋಡಿ",
      lastCheckup: "ಕೊನೆಯ ಪರೀಕ್ಷೆ",
      medicines: "ಔಷಧಗಳು",
      alerts: "ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆಗಳು",
      upcoming: "ಮುಂಬರುವ",
      normal: "ಸಾಮಾನ್ಯ",
      attention: "ಗಮನ ಅಗತ್ಯ",
      critical: "ಗಂಭೀರ"
    }
  };

  const currentText = text[language];

  const familyMembers = [
    {
      id: 1,
      name: language === "en" ? "Shreyas (You)" : "ಶ್ರೇಯಸ್ (ನೀವು)",
      age: 19,
      relation: language === "en" ? "Self" : "ನೀವು",
      avatar: "👨‍💼",
      healthStatus: "normal",
      lastCheckup: "2024-01-15",
      medicines: 2,
      upcomingAppointments: 1,
      conditions: language === "en" ? ["Healthy"] : ["ಆರೋಗ್ಯವಾಗಿದೆ"]
    },
    {
      id: 2,
      name: language === "en" ? "Rajesh (Father)" : "ರಾಜೇಶ್ (ತಂದೆ)",
      age: 52,
      relation: language === "en" ? "Father" : "ತಂದೆ",
      avatar: "👨",
      healthStatus: "attention",
      lastCheckup: "2024-01-10",
      medicines: 3,
      upcomingAppointments: 0,
      conditions: language === "en" ? ["Diabetes", "High BP"] : ["ಮಧುಮೇಹ", "ಅಧಿಕ ರಕ್ತದೊತ್ತಡ"]
    },
    {
      id: 3,
      name: language === "en" ? "Lakshmi (Mother)" : "ಲಕ್ಷ್ಮೀ (ತಾಯಿ)",
      age: 47,
      relation: language === "en" ? "Mother" : "ತಾಯಿ",
      avatar: "👩",
      healthStatus: "normal",
      lastCheckup: "2024-01-12",
      medicines: 1,
      upcomingAppointments: 1,
      conditions: language === "en" ? ["Thyroid (controlled)"] : ["ಥೈರಾಯ್ಡ್ (ನಿಯಂತ್ರಣದಲ್ಲಿ)"]
    },
    {
      id: 4,
      name: language === "en" ? "Grandmother" : "ಅಜ್ಜಿ",
      age: 75,
      relation: language === "en" ? "Grandmother" : "ಅಜ್ಜಿ",
      avatar: "👵",
      healthStatus: "attention",
      lastCheckup: "2024-01-08",
      medicines: 4,
      upcomingAppointments: 2,
      conditions: language === "en" ? ["Arthritis", "Heart condition"] : ["ಸಂಧಿವಾತ", "ಹೃದಯ ಸಮಸ್ಯೆ"]
    }
  ];

  const healthAlerts = [
    {
      id: 1,
      type: "medicine",
      message: language === "en" 
        ? "Father's diabetes medicine due in 30 minutes" 
        : "ತಂದೆಯ ಮಧುಮೇಹ ಔಷಧ ೩೦ ನಿಮಿಷದಲ್ಲಿ ಬರಬೇಕು",
      urgency: "high",
      member: language === "en" ? "Father" : "ತಂದೆ"
    },
    {
      id: 2,
      type: "checkup",
      message: language === "en" 
        ? "Grandmother's heart checkup tomorrow" 
        : "ಅಜ್ಜಿಯ ಹೃದಯ ಪರೀಕ್ಷೆ ನಾಳೆ",
      urgency: "medium",
      member: language === "en" ? "Grandmother" : "ಅಜ್ಜಿ"
    },
    {
      id: 3,
      type: "seasonal",
      message: language === "en" 
        ? "Dengue alert in Hassan - keep premises clean" 
        : "ಹಾಸನ್‌ನಲ್ಲಿ ಡೆಂಗ್ಯೂ ಎಚ್ಚರಿಕೆ - ಸುತ್ತಲಿನ ಪ್ರದೇಶವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ",
      urgency: "medium",
      member: language === "en" ? "All family" : "ಎಲ್ಲಾ ಕುಟುಂಬ"
    }
  ];

  const handleViewHealth = (member: any) => {
    toast({
      title: language === "en" ? `📋 Opening ${member.name}'s Health Profile` : `📋 ${member.name} ಅವರ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ತೆರೆಯುತ್ತಿದೆ`,
      description: language === "en" 
        ? "Loading health records and medicine schedule" 
        : "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಔಷಧ ವೇಳಾಪಟ್ಟಿ ಲೋಡ್ ಮಾಡುತ್ತಿದೆ"
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "normal": return "bg-green-100 text-green-800";
      case "attention": return "bg-yellow-100 text-yellow-800";
      case "critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "normal": return currentText.normal;
      case "attention": return currentText.attention;
      case "critical": return currentText.critical;
      default: return status;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch(urgency) {
      case "high": return "border-l-red-500 bg-red-50";
      case "medium": return "border-l-yellow-500 bg-yellow-50";
      case "low": return "border-l-green-500 bg-green-50";
      default: return "border-l-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                {currentText.title}
              </CardTitle>
              <p className="text-sm text-blue-600">{currentText.subtitle}</p>
            </div>
            <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              <Plus className="h-4 w-4 mr-1" />
              {currentText.addMember}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Health Alerts */}
      <Card className="border-orange-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-md text-orange-800 flex items-center gap-2">
            <Thermometer className="h-4 w-4" />
            {currentText.alerts}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            {healthAlerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-3 border-l-4 rounded-r ${getUrgencyColor(alert.urgency)}`}
              >
                <p className="text-sm font-medium text-gray-800">{alert.message}</p>
                <p className="text-xs text-gray-600 mt-1">{alert.member}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Family Members */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          {language === "en" ? "Family Members" : "ಕುಟುಂಬದ ಸದಸ್ಯರು"}
        </h3>
        
        <div className="space-y-3">
          {familyMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{member.avatar}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.age} {language === "en" ? "years" : "ವರ್ಷ"} • {member.relation}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(member.healthStatus)}>
                    {getStatusText(member.healthStatus)}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">{member.medicines}</div>
                    <div className="text-xs text-gray-500">{currentText.medicines}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">{member.upcomingAppointments}</div>
                    <div className="text-xs text-gray-500">{currentText.upcoming}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600">{member.lastCheckup}</div>
                    <div className="text-xs text-gray-500">{currentText.lastCheckup}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {member.conditions.map((condition, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  size="sm" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleViewHealth(member)}
                >
                  <User className="h-4 w-4 mr-1" />
                  {currentText.viewHealth}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-xs text-green-700">
                {language === "en" ? "Family Members" : "ಕುಟುಂಬದ ಸದಸ್ಯರು"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">10</div>
              <div className="text-xs text-blue-700">
                {language === "en" ? "Total Medicines" : "ಒಟ್ಟು ಔಷಧಗಳು"}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-xs text-purple-700">
                {language === "en" ? "Upcoming Checkups" : "ಮುಂಬರುವ ಪರೀಕ್ಷೆಗಳು"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyHealth;
