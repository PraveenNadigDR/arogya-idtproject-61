
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, MessageSquare, CheckCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface QuickAppointmentBookerProps {
  language: string;
}

const QuickAppointmentBooker = ({ language }: QuickAppointmentBookerProps) => {
  const [formData, setFormData] = useState({
    patientName: "",
    dateTime: "",
    doctorSpecialty: "",
    symptoms: "",
    urgency: "normal"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast.success(
        language === "en" 
          ? "Appointment booked successfully!" 
          : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಮಾಡಲಾಗಿದೆ!"
      );

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          patientName: "",
          dateTime: "",
          doctorSpecialty: "",
          symptoms: "",
          urgency: "normal"
        });
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            {language === "en" ? "Booking Confirmed!" : "ಬುಕಿಂಗ್ ದೃಢಪಡಿಸಲಾಗಿದೆ!"}
          </h3>
          <p className="text-green-600">
            {language === "en" 
              ? "Your appointment has been successfully scheduled." 
              : "ನಿಮ್ಮ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ."}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          {language === "en" ? "Quick Appointment" : "ತ್ವರಿತ ಅಪಾಯಿಂಟ್ಮೆಂಟ್"}
          <Sparkles className="h-4 w-4 text-yellow-500 ml-auto animate-pulse" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Patient Name */}
          <div className="space-y-2">
            <Label htmlFor="patientName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <User className="h-3 w-3" />
              {language === "en" ? "Patient Name" : "ರೋಗಿಯ ಹೆಸರು"}
            </Label>
            <Input
              id="patientName"
              type="text"
              value={formData.patientName}
              onChange={(e) => setFormData({...formData, patientName: e.target.value})}
              placeholder={language === "en" ? "Enter your name" : "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ"}
              className="bg-gray-50/50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="space-y-2">
            <Label htmlFor="dateTime" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Clock className="h-3 w-3" />
              {language === "en" ? "Preferred Date & Time" : "ಆದ್ಯತೆಯ ದಿನಾಂಕ ಮತ್ತು ಸಮಯ"}
            </Label>
            <Input
              id="dateTime"
              type="datetime-local"
              value={formData.dateTime}
              onChange={(e) => setFormData({...formData, dateTime: e.target.value})}
              className="bg-gray-50/50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
              required
            />
          </div>

          {/* Doctor Specialty */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">
              {language === "en" ? "Doctor Specialty" : "ವೈದ್ಯರ ವಿಶೇಷತೆ"}
            </Label>
            <Select 
              value={formData.doctorSpecialty} 
              onValueChange={(value) => setFormData({...formData, doctorSpecialty: value})}
            >
              <SelectTrigger className="bg-gray-50/50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300">
                <SelectValue placeholder={language === "en" ? "Select specialty" : "ವಿಶೇಷತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">{language === "en" ? "General Medicine" : "ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ"}</SelectItem>
                <SelectItem value="cardiology">{language === "en" ? "Cardiology" : "ಹೃದಯ ವಿಜ್ಞಾನ"}</SelectItem>
                <SelectItem value="dermatology">{language === "en" ? "Dermatology" : "ಚರ್ಮ ವಿಜ್ಞಾನ"}</SelectItem>
                <SelectItem value="pediatrics">{language === "en" ? "Pediatrics" : "ಮಕ್ಕಳ ವೈದ್ಯಕೀಯ"}</SelectItem>
                <SelectItem value="orthopedics">{language === "en" ? "Orthopedics" : "ಎಲುಬು ವೈದ್ಯಕೀಯ"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Symptoms */}
          <div className="space-y-2">
            <Label htmlFor="symptoms" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <MessageSquare className="h-3 w-3" />
              {language === "en" ? "Symptoms/Concerns" : "ಲಕ್ಷಣಗಳು/ಕಾಳಜಿಗಳು"}
            </Label>
            <Textarea
              id="symptoms"
              value={formData.symptoms}
              onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
              placeholder={language === "en" ? "Describe your symptoms..." : "ನಿಮ್ಮ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ..."}
              className="bg-gray-50/50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 min-h-[80px] resize-none"
              rows={3}
            />
          </div>

          {/* Urgency Level */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700">
              {language === "en" ? "Urgency Level" : "ತುರ್ತು ಮಟ್ಟ"}
            </Label>
            <Select 
              value={formData.urgency} 
              onValueChange={(value) => setFormData({...formData, urgency: value})}
            >
              <SelectTrigger className="bg-gray-50/50 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">{language === "en" ? "Low - Routine checkup" : "ಕಡಿಮೆ - ನಿಯಮಿತ ತಪಾಸಣೆ"}</SelectItem>
                <SelectItem value="normal">{language === "en" ? "Normal - General consultation" : "ಸಾಮಾನ್ಯ - ಸಾಮಾನ್ಯ ಸಮಾಲೋಚನೆ"}</SelectItem>
                <SelectItem value="high">{language === "en" ? "High - Need quick attention" : "ಹೆಚ್ಚು - ತ್ವರಿತ ಗಮನ ಅಗತ್ಯ"}</SelectItem>
                <SelectItem value="urgent">{language === "en" ? "Urgent - Immediate care needed" : "ತುರ್ತು - ತಕ್ಷಣದ ಆರೈಕೆ ಅಗತ್ಯ"}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {language === "en" ? "Booking..." : "ಬುಕ್ ಮಾಡಲಾಗುತ್ತಿದೆ..."}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {language === "en" ? "Book Appointment" : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"}
              </div>
            )}
          </Button>
        </form>

        {/* Quick Info */}
        <div className="pt-4 border-t border-gray-200/50">
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="h-2.5 w-2.5 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-700 mb-1">
                {language === "en" ? "Quick Booking Benefits:" : "ತ್ವರಿತ ಬುಕಿಂಗ್ ಪ್ರಯೋಜನಗಳು:"}
              </p>
              <ul className="text-xs space-y-1">
                <li>• {language === "en" ? "Instant confirmation" : "ತಕ್ಷಣದ ದೃಢೀಕರಣ"}</li>
                <li>• {language === "en" ? "SMS & email reminders" : "SMS ಮತ್ತು ಇಮೇಲ್ ರಿಮೈಂಡರ್‌ಗಳು"}</li>
                <li>• {language === "en" ? "24/7 online support" : "24/7 ಆನ್‌ಲೈನ್ ಬೆಂಬಲ"}</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAppointmentBooker;
