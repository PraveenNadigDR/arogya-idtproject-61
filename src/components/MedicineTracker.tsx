
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Camera, Bell, Clock, Calendar, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MedicineTrackerProps {
  language: string;
}

const MedicineTracker = ({ language }: MedicineTrackerProps) => {
  const [scanning, setScanning] = useState(false);
  const { toast } = useToast();

  const text = {
    en: {
      title: "Medicine Tracker",
      subtitle: "Scan, Track & Remember",
      scanMedicine: "Scan Medicine",
      addReminder: "Add Reminder",
      todaysReminders: "Today's Reminders",
      upcoming: "Upcoming",
      taken: "Taken",
      missed: "Missed",
      dosage: "Dosage",
      frequency: "Frequency",
      beforeMeals: "Before meals",
      afterMeals: "After meals",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      night: "Night"
    },
    kn: {
      title: "ಔಷಧ ಟ್ರ್ಯಾಕರ್",
      subtitle: "ಸ್ಕ್ಯಾನ್, ಟ್ರ್ಯಾಕ್ ಮತ್ತು ನೆನಪಿಸಿಕೊಳ್ಳಿ",
      scanMedicine: "ಔಷಧ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
      addReminder: "ಜ್ಞಾಪನೆ ಸೇರಿಸಿ",
      todaysReminders: "ಇಂದಿನ ಜ್ಞಾಪನೆಗಳು",
      upcoming: "ಮುಂಬರುವ",
      taken: "ತೆಗೆದುಕೊಂಡಿದೆ",
      missed: "ತಪ್ಪಿಸಿಕೊಂಡಿದೆ",
      dosage: "ಪ್ರಮಾಣ",
      frequency: "ಆವರ್ತನ",
      beforeMeals: "ಊಟದ ಮೊದಲು",
      afterMeals: "ಊಟದ ನಂತರ",
      morning: "ಬೆಳಿಗ್ಗೆ",
      afternoon: "ಮಧ್ಯಾಹ್ನ",
      evening: "ಸಂಜೆ",
      night: "ರಾತ್ರಿ"
    }
  };

  const currentText = text[language];

  const todaysMedicines = [
    {
      id: 1,
      name: "Metformin 500mg",
      time: "08:00 AM",
      dosage: "1 tablet",
      timing: language === "en" ? "After breakfast" : "ಬೆಳಿಗ್ಗಿನ ಊಟದ ನಂತರ",
      status: "taken",
      takenAt: "08:15 AM"
    },
    {
      id: 2,
      name: "Vitamin D3",
      time: "01:00 PM",
      dosage: "1 capsule",
      timing: language === "en" ? "After lunch" : "ಮಧ್ಯಾಹ್ನದ ಊಟದ ನಂತರ",
      status: "upcoming",
      takenAt: null
    },
    {
      id: 3,
      name: "Blood Pressure Medicine",
      time: "08:00 PM",
      dosage: "1/2 tablet",
      timing: language === "en" ? "After dinner" : "ರಾತ್ರಿಯ ಊಟದ ನಂತರ",
      status: "upcoming",
      takenAt: null
    },
    {
      id: 4,
      name: "Calcium",
      time: "09:00 AM",
      dosage: "1 tablet",
      timing: language === "en" ? "Before breakfast" : "ಬೆಳಿಗ್ಗಿನ ಊಟದ ಮೊದಲು",
      status: "missed",
      takenAt: null
    }
  ];

  const handleScanMedicine = () => {
    setScanning(true);
    toast({
      title: language === "en" ? "📷 Scanning Medicine..." : "📷 ಔಷಧವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡುತ್ತಿದೆ...",
      description: language === "en" 
        ? "Point camera at medicine package" 
        : "ಔಷಧದ ಪ್ಯಾಕೇಜ್‌ನ ಮೇಲೆ ಕ್ಯಾಮೆರಾವನ್ನು ತೋರಿಸಿ"
    });

    // Simulate scanning
    setTimeout(() => {
      setScanning(false);
      toast({
        title: language === "en" ? "✅ Medicine Recognized!" : "✅ ಔಷಧವನ್ನು ಗುರುತಿಸಲಾಗಿದೆ!",
        description: language === "en" 
          ? "Paracetamol 650mg - Added to your tracker" 
          : "ಪ್ಯಾರಾಸಿಟಮಾಲ್ 650mg - ನಿಮ್ಮ ಟ್ರ್ಯಾಕರ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ"
      });
    }, 3000);
  };

  const handleMedicineTaken = (medicineId: number) => {
    toast({
      title: language === "en" ? "✅ Medicine Taken!" : "✅ ಔಷಧ ತೆಗೆದುಕೊಂಡಿದೆ!",
      description: language === "en" 
        ? "Recorded in your health diary" 
        : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಡೈರಿಯಲ್ಲಿ ದಾಖಲಿಸಲಾಗಿದೆ"
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "taken": return "bg-green-100 text-green-800";
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "missed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "taken": return currentText.taken;
      case "upcoming": return currentText.upcoming;
      case "missed": return currentText.missed;
      default: return status;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
            <Pill className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-purple-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Scan Medicine */}
      <div className="grid grid-cols-2 gap-3">
        <Button 
          onClick={handleScanMedicine}
          disabled={scanning}
          className={`h-16 flex-col bg-blue-600 hover:bg-blue-700 ${scanning ? 'animate-pulse' : ''}`}
        >
          <Camera className="h-6 w-6 mb-1" />
          <span className="text-sm">{currentText.scanMedicine}</span>
        </Button>
        
        <Button 
          variant="outline"
          className="h-16 flex-col border-green-300 text-green-700 hover:bg-green-50"
        >
          <Bell className="h-6 w-6 mb-1" />
          <span className="text-sm">{currentText.addReminder}</span>
        </Button>
      </div>

      {/* Today's Reminders */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {currentText.todaysReminders}
        </h3>
        
        <div className="space-y-3">
          {todaysMedicines.map((medicine) => (
            <Card key={medicine.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{medicine.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{medicine.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {medicine.dosage} • {medicine.timing}
                    </p>
                    {medicine.takenAt && (
                      <p className="text-xs text-green-600 mt-1">
                        {language === "en" ? "Taken at" : "ತೆಗೆದುಕೊಂಡ ಸಮಯ"}: {medicine.takenAt}
                      </p>
                    )}
                  </div>
                  <Badge className={getStatusColor(medicine.status)}>
                    {getStatusText(medicine.status)}
                  </Badge>
                </div>

                {medicine.status === "upcoming" && (
                  <Button 
                    size="sm" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleMedicineTaken(medicine.id)}
                  >
                    {language === "en" ? "Mark as Taken" : "ತೆಗೆದುಕೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ"}
                  </Button>
                )}

                {medicine.status === "missed" && (
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={() => handleMedicineTaken(medicine.id)}
                    >
                      {language === "en" ? "Take Now" : "ಈಗ ತೆಗೆದುಕೊಳ್ಳಿ"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                    >
                      {language === "en" ? "Skip" : "ಬಿಟ್ಟುಬಿಡಿ"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Medicine Recognition Feature */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Camera className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-green-800">
                {language === "en" ? "🔍 Smart Medicine Recognition" : "🔍 ಸ್ಮಾರ್ಟ್ ಔಷಧ ಗುರುತಿಸುವಿಕೆ"}
              </h4>
              <p className="text-sm text-green-600">
                {language === "en" 
                  ? "Scan any medicine to get dosage instructions in Kannada" 
                  : "ಕನ್ನಡದಲ್ಲಿ ಪ್ರಮಾಣದ ಸೂಚನೆಗಳನ್ನು ಪಡೆಯಲು ಯಾವುದೇ ಔಷಧವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ"
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicineTracker;
