
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Book, QrCode, Share2, Calendar, Heart, Thermometer, Activity, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ArogyaDiaryProps {
  language: string;
}

const ArogyaDiary = ({ language }: ArogyaDiaryProps) => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [newEntry, setNewEntry] = useState({
    type: "checkup",
    notes: "",
    date: new Date().toISOString().split('T')[0]
  });
  const [storedRecords, setStoredRecords] = useState([]);
  const { toast } = useToast();

  // Load records from localStorage
  useEffect(() => {
    const records = JSON.parse(localStorage.getItem('arogyaDiaryRecords') || '[]');
    setStoredRecords(records);
  }, []);

  const text = {
    en: {
      title: "Arogya Diary",
      subtitle: "Family Health Records",
      addEntry: "Add New Entry",
      shareQR: "Share via QR",
      syncOffline: "Sync Offline",
      checkup: "Medical Checkup",
      medicine: "Medicine",
      emergency: "Emergency",
      notes: "Notes",
      date: "Date",
      save: "Save Entry",
      recentEntries: "Recent Entries"
    },
    kn: {
      title: "ಆರೋಗ್ಯ ಡೈರಿ",
      subtitle: "ಕುಟುಂಬದ ಆರೋಗ್ಯ ದಾಖಲೆಗಳು",
      addEntry: "ಹೊಸ ನಮೂದು ಸೇರಿಸಿ",
      shareQR: "QR ಮೂಲಕ ಹಂಚಿಕೊಳ್ಳಿ",
      syncOffline: "ಆಫ್‌ಲೈನ್ ಸಿಂಕ್",
      checkup: "ವೈದ್ಯಕೀಯ ಪರೀಕ್ಷೆ",
      medicine: "ಔಷಧ",
      emergency: "ತುರ್ತು",
      notes: "ಟಿಪ್ಪಣಿಗಳು",
      date: "ದಿನಾಂಕ",
      save: "ನಮೂದು ಉಳಿಸಿ",
      recentEntries: "ಇತ್ತೀಚಿನ ನಮೂದುಗಳು"
    }
  };

  const currentText = text[language];

  const defaultHealthRecords = [
    {
      id: 1,
      type: "checkup",
      title: language === "en" ? "Blood Pressure Check" : "ರಕ್ತದೊತ್ತಡ ಪರೀಕ್ಷೆ",
      date: "2024-01-15",
      doctor: language === "en" ? "Dr. Ramesh, Hassan PHC" : "ಡಾ. ರಮೇಶ್, ಹಾಸನ್ PHC",
      values: "120/80 mmHg",
      status: "normal"
    },
    {
      id: 2,
      type: "medicine",
      title: language === "en" ? "Diabetes Medicine" : "ಮಧುಮೇಹ ಔಷಧ",
      date: "2024-01-10",
      medicine: "Metformin 500mg",
      dosage: language === "en" ? "Twice daily after meals" : "ಊಟದ ನಂತರ ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ",
      status: "ongoing"
    }
  ];

  // Combine stored records with default records
  const allHealthRecords = [...storedRecords, ...defaultHealthRecords];

  const handleSaveEntry = () => {
    const newRecord = {
      id: Date.now(),
      type: newEntry.type,
      title: language === "en" ? "Manual Entry" : "ಹಸ್ತಚಾಲಿತ ನಮೂದು",
      date: newEntry.date,
      notes: newEntry.notes,
      status: "recorded"
    };

    const updatedRecords = [newRecord, ...storedRecords];
    localStorage.setItem('arogyaDiaryRecords', JSON.stringify(updatedRecords));
    setStoredRecords(updatedRecords);

    // Reset form
    setNewEntry({
      type: "checkup",
      notes: "",
      date: new Date().toISOString().split('T')[0]
    });

    toast({
      title: language === "en" ? "✅ Entry Saved!" : "✅ ನಮೂದು ಉಳಿಸಲಾಗಿದೆ!",
      description: language === "en" 
        ? "Health record added to your diary" 
        : "ಆರೋಗ್ಯ ದಾಖಲೆ ನಿಮ್ಮ ಡೈರಿಗೆ ಸೇರಿಸಲಾಗಿದೆ"
    });
  };

  const handleShareQR = () => {
    toast({
      title: language === "en" ? "📱 QR Code Generated" : "📱 QR ಕೋಡ್ ಸೃಷ್ಟಿಸಲಾಗಿದೆ",
      description: language === "en" 
        ? "Show this to doctors for instant access" 
        : "ತಕ್ಷಣದ ಪ್ರವೇಶಕ್ಕಾಗಿ ಇದನ್ನು ವೈದ್ಯರಿಗೆ ತೋರಿಸಿ"
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "normal": return "bg-green-100 text-green-800";
      case "ongoing": return "bg-blue-100 text-blue-800";
      case "recovered": return "bg-purple-100 text-purple-800";
      case "recorded": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "checkup": return <Heart className="h-4 w-4" />;
      case "medicine": return <Calendar className="h-4 w-4" />;
      case "emergency": return <Thermometer className="h-4 w-4" />;
      case "vitals": return <Activity className="h-4 w-4" />;
      default: return <Book className="h-4 w-4" />;
    }
  };

  const renderVitalsData = (vitals) => {
    if (!vitals) return null;
    
    return (
      <div className="grid grid-cols-2 gap-2 mt-2">
        {vitals.bloodPressure && (
          <div className="flex items-center gap-1">
            <Heart className="h-3 w-3 text-red-500" />
            <span className="text-xs text-gray-600">BP: {vitals.bloodPressure}</span>
          </div>
        )}
        {vitals.heartRate && (
          <div className="flex items-center gap-1">
            <Activity className="h-3 w-3 text-blue-500" />
            <span className="text-xs text-gray-600">HR: {vitals.heartRate}</span>
          </div>
        )}
        {vitals.temperature && (
          <div className="flex items-center gap-1">
            <Thermometer className="h-3 w-3 text-orange-500" />
            <span className="text-xs text-gray-600">Temp: {vitals.temperature}</span>
          </div>
        )}
        {vitals.weight && (
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-green-500" />
            <span className="text-xs text-gray-600">Weight: {vitals.weight}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <Book className="h-5 w-5" />
                {currentText.title}
              </CardTitle>
              <p className="text-sm text-blue-600">{currentText.subtitle}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={handleShareQR}>
                <QrCode className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Add New Entry */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md">{currentText.addEntry}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <label className="text-sm font-medium">{currentText.date}</label>
            <Input 
              type="date" 
              value={newEntry.date}
              onChange={(e) => setNewEntry({...newEntry, date: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm font-medium">{currentText.notes}</label>
            <Textarea 
              placeholder={language === "en" ? "Describe your health condition..." : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಸ್ಥಿತಿಯನ್ನು ವಿವರಿಸಿ..."}
              value={newEntry.notes}
              onChange={(e) => setNewEntry({...newEntry, notes: e.target.value})}
            />
          </div>
          <Button onClick={handleSaveEntry} className="w-full bg-green-600 hover:bg-green-700">
            {currentText.save}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Entries */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">{currentText.recentEntries}</h3>
        <div className="space-y-3">
          {allHealthRecords.map((record) => (
            <Card key={record.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(record.type)}
                      <h4 className="font-medium text-gray-800">{record.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{record.date}</p>
                    
                    {record.doctor && (
                      <p className="text-sm text-blue-600">{record.doctor}</p>
                    )}
                    {record.values && (
                      <p className="text-sm font-medium text-gray-700">{record.values}</p>
                    )}
                    {record.medicine && (
                      <div>
                        <p className="text-sm font-medium text-gray-700">{record.medicine}</p>
                        <p className="text-xs text-gray-500">{record.dosage}</p>
                      </div>
                    )}
                    {record.temperature && (
                      <div>
                        <p className="text-sm font-medium text-red-600">{record.temperature}</p>
                        <p className="text-xs text-gray-500">{record.treatment}</p>
                      </div>
                    )}
                    {record.notes && (
                      <p className="text-sm text-gray-600 mt-1">{record.notes}</p>
                    )}
                    {record.vitals && renderVitalsData(record.vitals)}
                  </div>
                  <Badge className={getStatusColor(record.status)}>
                    {record.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Offline Sync Status */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700">
                {language === "en" ? "Offline backup active" : "ಆಫ್‌ಲೈನ್ ಬ್ಯಾಕಪ್ ಸಕ್ರಿಯ"}
              </span>
            </div>
            <Button size="sm" variant="ghost" className="text-green-700">
              {currentText.syncOffline}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArogyaDiary;
