
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, User, Phone } from "lucide-react";

interface BookedAppointmentsProps {
  language: string;
}

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  type: 'in-person' | 'video';
  status: 'confirmed' | 'pending' | 'completed';
}

const BookedAppointments = ({ language }: BookedAppointmentsProps) => {
  // Mock data - in a real app, this would come from your backend/localStorage
  const appointments: Appointment[] = [
    {
      id: "1",
      doctorName: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      date: "2024-06-20",
      time: "10:00 AM",
      location: "Apollo Hospital, Bangalore",
      type: "in-person",
      status: "confirmed"
    },
    {
      id: "2",
      doctorName: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      date: "2024-06-25",
      time: "2:30 PM",
      location: "Video Consultation",
      type: "video",
      status: "pending"
    }
  ];

  const text = {
    en: {
      title: "Booked Appointments",
      noAppointments: "No appointments booked yet",
      bookFirst: "Book your first appointment to see it here",
      confirmed: "Confirmed",
      pending: "Pending",
      completed: "Completed",
      inPerson: "In-Person",
      video: "Video Call",
      date: "Date",
      time: "Time",
      location: "Location"
    },
    kn: {
      title: "ಬುಕ್ ಮಾಡಿದ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
      noAppointments: "ಇನ್ನೂ ಯಾವುದೇ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿಲ್ಲ",
      bookFirst: "ಇಲ್ಲಿ ನೋಡಲು ನಿಮ್ಮ ಮೊದಲ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      confirmed: "ದೃಢೀಕರಿಸಲಾಗಿದೆ",
      pending: "ಬಾಕಿ ಇದೆ",
      completed: "ಪೂರ್ಣಗೊಂಡಿದೆ",
      inPerson: "ವೈಯಕ್ತಿಕವಾಗಿ",
      video: "ವಿಡಿಯೋ ಕಾಲ್",
      date: "ದಿನಾಂಕ",
      time: "ಸಮಯ",
      location: "ಸ್ಥಳ"
    }
  };

  const currentText = text[language as keyof typeof text] || text.en;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return currentText.confirmed;
      case 'pending': return currentText.pending;
      case 'completed': return currentText.completed;
      default: return status;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-green-50/80 via-emerald-50/80 to-teal-50/80 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-xl ring-1 ring-green-200/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-green-800 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          {currentText.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {appointments.length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="h-16 w-16 text-green-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              {currentText.noAppointments}
            </h3>
            <p className="text-green-600 text-sm">
              {currentText.bookFirst}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 text-lg">
                        {appointment.doctorName}
                      </h4>
                      <p className="text-green-600 text-sm">
                        {appointment.specialty}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                    {getStatusText(appointment.status)}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <Calendar className="h-4 w-4" />
                    <div>
                      <p className="text-xs text-green-600">{currentText.date}</p>
                      <p className="font-medium">{appointment.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-700">
                    <Clock className="h-4 w-4" />
                    <div>
                      <p className="text-xs text-green-600">{currentText.time}</p>
                      <p className="font-medium">{appointment.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-700">
                    {appointment.type === 'video' ? <Phone className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                    <div>
                      <p className="text-xs text-green-600">{currentText.location}</p>
                      <p className="font-medium text-sm">{appointment.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-200/50">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    appointment.type === 'video' 
                      ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                      : 'bg-purple-100 text-purple-800 border border-purple-200'
                  }`}>
                    {appointment.type === 'video' ? <Phone className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                    {appointment.type === 'video' ? currentText.video : currentText.inPerson}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookedAppointments;
