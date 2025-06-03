
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, Clock, CheckCircle, Plus, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MedicineReminderProps {
  language: string;
}

const MedicineReminder = ({ language }: MedicineReminderProps) => {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol",
      dosage: "500mg",
      time: "08:00 AM",
      taken: false,
      frequency: "Twice daily"
    },
    {
      id: 2,
      name: "Vitamin D",
      dosage: "1000 IU",
      time: "12:00 PM",
      taken: true,
      frequency: "Once daily"
    },
    {
      id: 3,
      name: "Iron Tablets",
      dosage: "65mg",
      time: "08:00 PM",
      taken: false,
      frequency: "Once daily"
    }
  ]);

  const { toast } = useToast();

  const text = {
    en: {
      title: "Medicine Reminder",
      takeMedicine: "Take Medicine",
      taken: "Taken",
      pending: "Pending",
      addMedicine: "Add Medicine",
      medicineTaken: "Medicine Taken!",
      medicineMarked: "Marked as taken for today"
    },
    kn: {
      title: "ಔಷಧ ಜ್ಞಾಪನೆ",
      takeMedicine: "ಔಷಧ ತೆಗೆದುಕೊಳ್ಳಿ",
      taken: "ತೆಗೆದುಕೊಂಡಿದೆ",
      pending: "ಬಾಕಿ",
      addMedicine: "ಔಷಧ ಸೇರಿಸಿ",
      medicineTaken: "ಔಷಧ ತೆಗೆದುಕೊಂಡಿದೆ!",
      medicineMarked: "ಇಂದಿಗೆ ತೆಗೆದುಕೊಂಡಂತೆ ಗುರುತಿಸಲಾಗಿದೆ"
    }
  };

  const currentText = text[language];

  const handleTakeMedicine = (id: number) => {
    setMedicines(medicines.map(med => 
      med.id === id ? { ...med, taken: true } : med
    ));
    
    toast({
      title: currentText.medicineTaken,
      description: currentText.medicineMarked
    });
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-purple-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between text-purple-800">
          <div className="flex items-center gap-2">
            <Pill className="h-5 w-5" />
            {currentText.title}
          </div>
          <Bell className="h-4 w-4 text-purple-600" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="bg-white/60 rounded-lg p-3 border border-purple-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-purple-800">{medicine.name}</h4>
                  <Badge 
                    variant={medicine.taken ? "default" : "secondary"}
                    className={`text-xs ${
                      medicine.taken 
                        ? "bg-green-100 text-green-700" 
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {medicine.taken ? currentText.taken : currentText.pending}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs text-purple-600">
                  <span>{medicine.dosage}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{medicine.time}</span>
                  </div>
                </div>
                <p className="text-xs text-purple-500 mt-1">{medicine.frequency}</p>
              </div>
              
              <div className="ml-3">
                {medicine.taken ? (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                ) : (
                  <Button
                    size="sm"
                    onClick={() => handleTakeMedicine(medicine.id)}
                    className="h-8 px-3 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-xs"
                  >
                    <Pill className="h-3 w-3 mr-1" />
                    {currentText.takeMedicine}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          className="w-full border-purple-300 text-purple-700 hover:bg-purple-50 mt-3"
        >
          <Plus className="h-4 w-4 mr-2" />
          {currentText.addMedicine}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MedicineReminder;
