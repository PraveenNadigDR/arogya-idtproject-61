
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import AppointmentBooking from "@/components/AppointmentBooking";
import DoctorHeader from "@/components/DoctorHeader";
import DoctorSearch from "@/components/DoctorSearch";
import DoctorCard from "@/components/DoctorCard";
import DoctorOnWheelsAlert from "@/components/DoctorOnWheelsAlert";
import { useLocationTracker } from "@/hooks/useLocationTracker";
import { DoctorFinderProps, Doctor } from "@/types/doctor";
import { getDoctors } from "@/data/doctors";
import { getSpecialties } from "@/data/specialties";
import { getDoctorFinderTexts } from "@/utils/textTranslations";

const DoctorFinder = ({ language }: DoctorFinderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const { toast } = useToast();

  const { location, isLoadingLocation, locationError, getCurrentLocation } = useLocationTracker(language);

  const texts = getDoctorFinderTexts(language);
  const specialties = getSpecialties(language);
  const doctors = getDoctors(language);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowBooking(true);
  };

  const handleCall = (doctor: Doctor) => {
    toast({
      title: language === "en" ? "📞 Calling..." : "📞 ಕರೆ ಮಾಡುತ್ತಿದೆ...",
      description: language === "en" 
        ? `Calling ${doctor.name}` 
        : `${doctor.name} ಅವರಿಗೆ ಕರೆ ಮಾಡುತ್ತಿದೆ`
    });
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = searchQuery === "" || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === "all" || doctor.category === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="space-y-4">
      <DoctorHeader
        language={language}
        texts={texts}
        location={location}
        isLoadingLocation={isLoadingLocation}
        locationError={locationError}
        filteredDoctorsCount={filteredDoctors.length}
        onGetLocation={getCurrentLocation}
      />

      <DoctorSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedSpecialty={selectedSpecialty}
        onSpecialtyChange={setSelectedSpecialty}
        specialties={specialties}
        texts={texts}
      />

      {/* Doctors List */}
      <div className="space-y-3">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            texts={texts}
            onBookAppointment={handleBookAppointment}
            onCall={handleCall}
          />
        ))}
      </div>

      {/* No results message */}
      {filteredDoctors.length === 0 && (
        <Card className="text-center p-6">
          <p className="text-muted-foreground">
            {language === "en" ? "No doctors found. Try adjusting your search." : "ವೈದ್ಯರು ಸಿಗಲಿಲ್ಲ. ನಿಮ್ಮ ಹುಡುಕಾಟ ಬದಲಾಯಿಸಿ ಪ್ರಯತ್ನಿಸಿ."}
          </p>
        </Card>
      )}

      <DoctorOnWheelsAlert language={language} />

      {/* Appointment Booking Dialog */}
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="max-w-md bg-background border border-border sm:max-w-md overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Book Appointment</DialogTitle>
          </DialogHeader>
          {selectedDoctor && (
            <div className="p-0 -m-6">
              <AppointmentBooking
                doctor={selectedDoctor}
                language={language}
                onClose={() => setShowBooking(false)}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DoctorFinder;
