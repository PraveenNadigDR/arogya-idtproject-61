
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, MapPin, Phone, Star, TrendingUp, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { appointmentService, Appointment } from "@/services/appointmentService";
import { useEffect, useState } from "react";

interface BookedAppointmentsCardProps {
  language: string;
}

const BookedAppointmentsCard = ({ language }: BookedAppointmentsCardProps) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    if (user) {
      const userAppointments = appointmentService.getAppointments(user.id);
      setAppointments(userAppointments);
    }
  }, [user]);

  const text = {
    en: {
      title: "Booked Appointments",
      noAppointments: "No appointments booked",
      upcoming: "Upcoming",
      completed: "Completed",
      cancelled: "Cancelled",
      consultationFee: "Consultation Fee",
      duration: "Duration",
      rating: "Rating"
    },
    kn: {
      title: "ಬುಕ್ ಮಾಡಿದ ಅಪಾಯಿಂಟ್ಮೆಂಟ್‌ಗಳು",
      noAppointments: "ಯಾವುದೇ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಆಗಿಲ್ಲ",
      upcoming: "ಮುಂಬರುವ",
      completed: "ಪೂರ್ಣಗೊಂಡ",
      cancelled: "ರದ್ದುಮಾಡಲಾಗಿದೆ",
      consultationFee: "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ",
      duration: "ಅವಧಿ",
      rating: "ರೇಟಿಂಗ್"
    }
  };

  const currentText = text[language];

  // Don't render the card if there are no appointments
  if (appointments.length === 0) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 shadow-lg shadow-green-500/10';
      case 'completed':
        return 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200 shadow-lg shadow-blue-500/10';
      case 'cancelled':
        return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200 shadow-lg shadow-red-500/10';
      default:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200 shadow-lg shadow-gray-500/10';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="bg-gradient-to-br from-green-50/90 via-emerald-50/90 to-teal-50/90 border-0 shadow-2xl ring-1 ring-green-200/40 hover:shadow-3xl hover:ring-green-200/60 transition-all duration-700 backdrop-blur-sm group hover:scale-[1.01] leaf-texture organic-border">
      <CardHeader className="pb-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700"></div>
        
        <CardTitle className="text-2xl text-green-800 flex items-center gap-4 relative z-10">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 organic-border flex items-center justify-center shadow-xl shadow-green-500/30 group-hover:shadow-2xl group-hover:shadow-emerald-500/40 transition-all duration-500 group-hover:scale-110">
              <Calendar className="h-6 w-6 text-white drop-shadow-sm" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50">
              <Leaf className="h-2 w-2 text-white m-1" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight">{currentText.title}</span>
            <span className="text-sm font-normal text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {appointments.length} {language === "en" ? "appointments" : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ಗಳು"}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-6">
          {appointments.map((appointment, index) => (
            <div
              key={appointment.id}
              className="bg-white/80 backdrop-blur-sm organic-border p-6 shadow-xl border border-green-100/50 hover:shadow-2xl hover:border-green-200/60 transition-all duration-500 hover:scale-[1.02] group/card relative overflow-hidden animate-fade-in-up leaf-texture"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Card background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-xl transform translate-x-4 -translate-y-4 group-hover/card:scale-125 transition-transform duration-700"></div>
              
              {/* Header with Doctor Info and Status */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 organic-border flex items-center justify-center shadow-lg shadow-green-500/25 group-hover/card:shadow-xl group-hover/card:shadow-emerald-500/30 transition-all duration-500 group-hover/card:scale-110">
                      <User className="h-7 w-7 text-white drop-shadow-sm" />
                    </div>
                    {appointment.rating && (
                      <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1 shadow-lg shadow-yellow-400/30">
                        <Star className="h-3 w-3 text-white fill-current" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-xl tracking-tight">{appointment.doctorName}</h3>
                    <p className="text-green-600 text-sm font-semibold">{appointment.specialty}</p>
                    {appointment.rating && (
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs text-yellow-600 font-medium">{currentText.rating}: {appointment.rating}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(appointment.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Badge className={`${getStatusColor(appointment.status)} font-semibold px-4 py-2 text-sm organic-border border-2 hover:scale-105 transition-transform duration-300`}>
                  {currentText[appointment.status]}
                </Badge>
              </div>

              {/* Appointment Details Grid with enhanced styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date & Time */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 organic-border p-4 border border-green-100/50 hover:border-green-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                  <div className="flex items-center gap-3 text-green-700 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 organic-border flex items-center justify-center shadow-lg shadow-green-500/20">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-sm">Date & Time</span>
                  </div>
                  <p className="text-gray-800 font-bold text-lg">{formatDate(appointment.date)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium">{appointment.time}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 organic-border p-4 border border-emerald-100/50 hover:border-emerald-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                  <div className="flex items-center gap-3 text-emerald-700 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 organic-border flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-sm">Location</span>
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed font-medium">{appointment.location}</p>
                </div>

                {/* Patient Info */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 organic-border p-4 border border-teal-100/50 hover:border-teal-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                  <div className="flex items-center gap-3 text-teal-700 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 organic-border flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-sm">Patient</span>
                  </div>
                  <p className="text-gray-800 font-bold">{appointment.patientName}</p>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 organic-border p-4 border border-yellow-100/50 hover:border-yellow-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                  <div className="flex items-center gap-3 text-yellow-700 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 organic-border flex items-center justify-center shadow-lg shadow-yellow-500/20">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-sm">Contact</span>
                  </div>
                  <p className="text-gray-800 font-mono text-sm font-medium">{appointment.phone}</p>
                </div>
              </div>

              {/* Enhanced Additional Info */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-green-200/50">
                <div className="flex items-center gap-6 text-sm">
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 organic-border font-semibold border border-green-200/50 shadow-lg shadow-green-500/10 hover:scale-105 transition-transform duration-300">
                    {currentText.consultationFee}: ₹{appointment.consultationFee}
                  </span>
                  <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 organic-border font-semibold border border-emerald-200/50 shadow-lg shadow-emerald-500/10 hover:scale-105 transition-transform duration-300">
                    {currentText.duration}: {appointment.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookedAppointmentsCard;
