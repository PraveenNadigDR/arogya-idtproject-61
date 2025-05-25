
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Clock, 
  Camera, 
  Plus,
  MessageCircle,
  Bell,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MedicineTrackerProps {
  language: string;
  onNavigateToChat?: () => void;
}

const MedicineTracker = ({ language, onNavigateToChat }: MedicineTrackerProps) => {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol 650mg",
      dosage: "1 tablet",
      frequency: "Every 8 hours",
      timesTaken: [true, true, false],
      nextDose: "6:00 PM",
      daysLeft: 3
    },
    {
      id: 2,
      name: "Vitamin D3",
      dosage: "1 capsule",
      frequency: "Once daily",
      timesTaken: [true],
      nextDose: "Morning",
      daysLeft: 27
    }
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: "",
    dosage: "",
    frequency: ""
  });

  const { toast } = useToast();

  const text = {
    en: {
      title: "Medicine Tracker",
      subtitle: "Track your daily medications",
      todaySchedule: "Today's Schedule",
      nextDose: "Next dose",
      daysLeft: "days left",
      taken: "Taken",
      pending: "Pending",
      addMedicine: "Add New Medicine",
      medicineName: "Medicine Name",
      dosage: "Dosage",
      frequency: "Frequency",
      add: "Add Medicine",
      markTaken: "Mark as Taken",
      askAI: "Ask AI about Medicine",
      scanMedicine: "Ask AI to identify medicine",
      allDone: "All Done! ✅"
    },
    kn: {
      title: "ಔಷಧ ಟ್ರ್ಯಾಕರ್",
      subtitle: "ನಿಮ್ಮ ದೈನಂದಿನ ಔಷಧಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
      todaySchedule: "ಇಂದಿನ ವೇಳಾಪಟ್ಟಿ",
      nextDose: "ಮುಂದಿನ ಡೋಸ್",
      daysLeft: "ದಿನಗಳು ಬಾಕಿ",
      taken: "ತೆಗೆದುಕೊಂಡಿದ್ದೇನೆ",
      pending: "ಬಾಕಿ ಇದೆ",
      addMedicine: "ಹೊಸ ಔಷಧ ಸೇರಿಸಿ",
      medicineName: "ಔಷಧದ ಹೆಸರು",
      dosage: "ಪ್ರಮಾಣ",
      frequency: "ಆವರ್ತನ",
      add: "ಔಷಧ ಸೇರಿಸಿ",
      markTaken: "ತೆಗೆದುಕೊಂಡಿದ್ದೇನೆ ಎಂದು ಗುರುತಿಸಿ",
      askAI: "ಔಷಧದ ಬಗ್ಗೆ AI ಯಿಂದ ಕೇಳಿ",
      scanMedicine: "ಔಷಧವನ್ನು ಗುರುತಿಸಲು AI ಯಿಂದ ಕೇಳಿ",
      allDone: "ಎಲ್ಲಾ ಮುಗಿಯಿತು! ✅"
    }
  };

  const currentText = text[language];

  const handleAddMedicine = () => {
    if (newMedicine.name && newMedicine.dosage && newMedicine.frequency) {
      const medicine = {
        id: Date.now(),
        name: newMedicine.name,
        dosage: newMedicine.dosage,
        frequency: newMedicine.frequency,
        timesTaken: [false],
        nextDose: "As prescribed",
        daysLeft: 30
      };
      
      setMedicines([...medicines, medicine]);
      setNewMedicine({ name: "", dosage: "", frequency: "" });
      
      toast({
        title: language === "en" ? "✅ Medicine Added" : "✅ ಔಷಧ ಸೇರಿಸಲಾಗಿದೆ",
        description: language === "en" 
          ? `${medicine.name} added to your tracker` 
          : `${medicine.name} ನಿಮ್ಮ ಟ್ರ್ಯಾಕರ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ`
      });
    }
  };

  const markAsTaken = (medicineId: number, doseIndex: number) => {
    setMedicines(medicines.map(med => {
      if (med.id === medicineId) {
        const newTimesTaken = [...med.timesTaken];
        newTimesTaken[doseIndex] = true;
        return { ...med, timesTaken: newTimesTaken };
      }
      return med;
    }));

    toast({
      title: language === "en" ? "✅ Dose Recorded" : "✅ ಡೋಸ್ ದಾಖಲಿಸಲಾಗಿದೆ",
      description: language === "en" ? "Keep up the good work!" : "ಒಳ್ಳೆಯ ಕೆಲಸ ಮುಂದುವರಿಸಿ!"
    });
  };

  const handleAskAI = () => {
    if (onNavigateToChat) {
      onNavigateToChat();
      toast({
        title: language === "en" ? "💬 Navigating to AI Assistant" : "💬 AI ಸಹಾಯಕಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ",
        description: language === "en" 
          ? "Ask any questions about your medicines" 
          : "ನಿಮ್ಮ ಔಷಧಗಳ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ"
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Pill className="h-6 w-6 text-purple-600" />
            <div>
              <CardTitle className="text-lg text-purple-800">{currentText.title}</CardTitle>
              <p className="text-sm text-purple-600">{currentText.subtitle}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* AI Assistant Button */}
      <Button
        onClick={handleAskAI}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        <MessageCircle className="h-4 w-4 mr-2" />
        {currentText.askAI}
      </Button>

      {/* Today's Medicine Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            {currentText.todaySchedule}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{medicine.name}</h3>
                  <p className="text-sm text-gray-600">{medicine.dosage} • {medicine.frequency}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    {currentText.nextDose}: {medicine.nextDose}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {medicine.daysLeft} {currentText.daysLeft}
                </Badge>
              </div>

              {/* Dose tracking */}
              <div className="flex gap-2">
                {medicine.timesTaken.map((taken, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant={taken ? "default" : "outline"}
                    onClick={() => !taken && markAsTaken(medicine.id, index)}
                    disabled={taken}
                    className={`flex-1 ${
                      taken 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "border-green-300 text-green-700 hover:bg-green-50"
                    }`}
                  >
                    {taken ? (
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                    ) : (
                      <Clock className="h-4 w-4 mr-1" />
                    )}
                    {taken ? currentText.taken : currentText.pending}
                  </Button>
                ))}
              </div>

              {medicine.timesTaken.every(taken => taken) && (
                <div className="text-center text-green-600 font-medium text-sm">
                  {currentText.allDone}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Add New Medicine */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Plus className="h-5 w-5 text-green-600" />
            {currentText.addMedicine}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder={currentText.medicineName}
            value={newMedicine.name}
            onChange={(e) => setNewMedicine({...newMedicine, name: e.target.value})}
          />
          <Input
            placeholder={currentText.dosage}
            value={newMedicine.dosage}
            onChange={(e) => setNewMedicine({...newMedicine, dosage: e.target.value})}
          />
          <Input
            placeholder={currentText.frequency}
            value={newMedicine.frequency}
            onChange={(e) => setNewMedicine({...newMedicine, frequency: e.target.value})}
          />
          <Button
            onClick={handleAddMedicine}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={!newMedicine.name || !newMedicine.dosage || !newMedicine.frequency}
          >
            <Plus className="h-4 w-4 mr-2" />
            {currentText.add}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicineTracker;
