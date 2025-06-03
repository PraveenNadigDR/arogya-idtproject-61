
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AppointmentBookingProps {
  doctor: any;
  language: string;
  onClose: () => void;
}

const AppointmentBooking = ({ doctor, language, onClose }: AppointmentBookingProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const { toast } = useToast();

  const text = {
    en: {
      title: "Book Appointment",
      selectDate: "Select Date",
      selectTime: "Select Time",
      patientName: "Patient Name",
      phoneNumber: "Phone Number",
      symptoms: "Symptoms/Reason for Visit",
      bookAppointment: "Confirm Booking",
      cancel: "Cancel",
      appointmentBooked: "Appointment Booked!",
      bookingConfirmed: "Your appointment has been confirmed"
    },
    kn: {
      title: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      selectDate: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
      selectTime: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
      patientName: "ರೋಗಿಯ ಹೆಸರು",
      phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
      symptoms: "ಲಕ್ಷಣಗಳು/ಭೇಟಿಯ ಕಾರಣ",
      bookAppointment: "ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",
      appointmentBooked: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಆಗಿದೆ!",
      bookingConfirmed: "ನಿಮ್ಮ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ"
    }
  };

  const currentText = text[language];

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !patientName || !phone) {
      toast({
        title: language === "en" ? "Missing Information" : "ಮಾಹಿತಿ ಕೊರತೆ",
        description: language === "en" ? "Please fill all required fields" : "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ"
      });
      return;
    }

    toast({
      title: currentText.appointmentBooked,
      description: `${currentText.bookingConfirmed} - ${selectedDate} ${selectedTime}`
    });
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          {currentText.title}
        </CardTitle>
        <div className="text-sm text-gray-600">
          <p className="font-medium">{doctor.name}</p>
          <p>{doctor.specialty}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">{currentText.selectDate}</label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <label className="text-sm font-medium">{currentText.selectTime}</label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTime(time)}
                className={selectedTime === time ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">{currentText.patientName}</label>
          <Input
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            placeholder={language === "en" ? "Enter patient name" : "ರೋಗಿಯ ಹೆಸರು ನಮೂದಿಸಿ"}
          />
        </div>

        <div>
          <label className="text-sm font-medium">{currentText.phoneNumber}</label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 9876543210"
            type="tel"
          />
        </div>

        <div>
          <label className="text-sm font-medium">{currentText.symptoms}</label>
          <Textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder={language === "en" ? "Describe symptoms or reason for visit" : "ಲಕ್ಷಣಗಳು ಅಥವಾ ಭೇಟಿಯ ಕಾರಣವನ್ನು ವಿವರಿಸಿ"}
            rows={3}
          />
        </div>

        <div className="flex gap-2">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            {currentText.cancel}
          </Button>
          <Button
            onClick={handleBooking}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            {currentText.bookAppointment}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentBooking;
