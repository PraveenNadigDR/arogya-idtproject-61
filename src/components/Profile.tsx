
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import MedicineReminder from "@/components/MedicineReminder";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfoForm from "@/components/profile/ProfileInfoForm";
import PersonalInfoCard from "@/components/profile/PersonalInfoCard";
import MedicalInfoCard from "@/components/profile/MedicalInfoCard";
import EmergencyContactCard from "@/components/profile/EmergencyContactCard";
import HealthIDCard from "@/components/profile/HealthIDCard";
import BookedAppointments from "@/components/profile/BookedAppointments";

interface ProfileProps {
  language: string;
}

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

const Profile = ({ language }: ProfileProps) => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showInfoForm, setShowInfoForm] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
    phone: "",
    location: "",
    bloodGroup: "B+",
    emergencyContact: "",
    allergies: "None",
    chronicConditions: "Diabetes"
  });
  const { toast } = useToast();

  // Update profile name when user data is available
  useEffect(() => {
    if (user) {
      setProfile(prev => ({
        ...prev,
        name: user.user_metadata?.full_name || user.email?.split('@')[0] || "User"
      }));
      
      // Check if we have stored profile data
      const storedProfile = localStorage.getItem(`profile_${user.id}`);
      if (storedProfile) {
        const parsed = JSON.parse(storedProfile);
        setProfile(prev => ({ ...prev, ...parsed }));
        setShowInfoForm(false); // Don't show form if we have stored data
      } else {
        // Only show info form if we don't have age AND phone
        setShowInfoForm(!profile.age || !profile.phone);
      }
    }
  }, [user]);

  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<string> => {
    try {
      // Try Nominatim first as it's free and reliable
      const nominatimResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${language === 'kn' ? 'kn' : 'en'}`
      );
      
      if (nominatimResponse.ok) {
        const data = await nominatimResponse.json();
        return data.display_name || "Address not found";
      }
      
      throw new Error('Geocoding failed');
    } catch (error) {
      console.log('Geocoding error:', error);
      return "Address not found";
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by this browser",
        variant: "destructive"
      });
      return;
    }

    setIsGettingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        
        // Get address
        const address = await getAddressFromCoordinates(locationData.latitude, locationData.longitude);
        locationData.address = address;
        
        setCurrentLocation(locationData);
        setProfile(prev => ({ ...prev, location: address }));
        setIsGettingLocation(false);
        
        toast({
          title: "Location Updated",
          description: "Your location has been updated from GPS"
        });
      },
      (error) => {
        setIsGettingLocation(false);
        toast({
          title: "Location Error",
          description: "Unable to get your location",
          variant: "destructive"
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const text = {
    en: {
      title: "My Profile",
      edit: "Edit Profile",
      save: "Save Changes",
      cancel: "Cancel",
      personalInfo: "Personal Information",
      medicalInfo: "Medical Information",
      emergencyContact: "Emergency Contact",
      name: "Name",
      age: "Age",
      phone: "Phone Number",
      location: "Location",
      bloodGroup: "Blood Group",
      allergies: "Allergies",
      chronicConditions: "Chronic Conditions",
      profileUpdated: "✅ Profile Updated!",
      changesSaved: "Your changes have been saved",
      setupProfile: "Complete Your Profile",
      setupMessage: "Please provide your age and phone number to complete your profile",
      ageLabel: "Your Age",
      phoneLabel: "Your Phone Number",
      saveInfo: "Save Information",
      updateLocation: "Update from GPS",
      gettingLocation: "Getting location...",
      noLocation: "No location set",
      skipSetup: "Skip for now",
      signOut: "Sign Out",
      signOutConfirm: "Are you sure you want to sign out?"
    },
    kn: {
      title: "ನನ್ನ ಪ್ರೊಫೈಲ್",
      edit: "ಪ್ರೊಫೈಲ್ ಎಡಿಟ್ ಮಾಡಿ",
      save: "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",
      personalInfo: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
      medicalInfo: "ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ",
      emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",
      name: "ಹೆಸರು",
      age: "ವಯಸ್ಸು",
      phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
      location: "ಸ್ಥಳ",
      bloodGroup: "ರಕ್ತದ ಗುಂಪು",
      allergies: "ಅಲರ್ಜಿಗಳು",
      chronicConditions: "ದೀರ್ಘಕಾಲಿಕ ಸ್ಥಿತಿಗಳು",
      profileUpdated: "✅ ಪ್ರೊಫೈಲ್ ಅಪ್‌ಡೇಟ್ ಆಗಿದೆ!",
      changesSaved: "ನಿಮ್ಮ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ",
      setupProfile: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸಿ",
      setupMessage: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಪೂರ್ಣಗೊಳಿಸಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಯಸ್ಸು ಮತ್ತು ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನೀಡಿ",
      ageLabel: "ನಿಮ್ಮ ವಯಸ್ಸು",
      phoneLabel: "ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ",
      saveInfo: "ಮಾಹಿತಿಯನ್ನು ಉಳಿಸಿ",
      updateLocation: "GPS ನಿಂದ ಅಪ್‌ಡೇಟ್ ಮಾಡಿ",
      gettingLocation: "ಸ್ಥಳವನ್ನು ಪಡೆಯುತ್ತಿದೆ...",
      noLocation: "ಯಾವುದೇ ಸ್ಥಳ ಸೆಟ್ ಆಗಿಲ್ಲ",
      skipSetup: "ಸದ್ಯಕ್ಕೆ ಬಿಟ್ಟುಬಿಡಿ",
      signOut: "ಸೈನ್ ಔಟ್",
      signOutConfirm: "ನೀವು ಸೈನ್ ಔಟ್ ಮಾಡಲು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?"
    }
  };

  const currentText = text[language];

  const handleSave = () => {
    setIsEditing(false);
    if (user) {
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(profile));
    }
    toast({
      title: currentText.profileUpdated,
      description: currentText.changesSaved
    });
  };

  const handleInfoSave = () => {
    if (profile.age && profile.phone) {
      setShowInfoForm(false);
      if (user) {
        localStorage.setItem(`profile_${user.id}`, JSON.stringify(profile));
      }
      toast({
        title: currentText.profileUpdated,
        description: currentText.changesSaved
      });
    }
  };

  const handleSkipSetup = () => {
    setShowInfoForm(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Show info collection form if needed
  if (showInfoForm) {
    return (
      <div className="space-y-4">
        <ProfileInfoForm
          language={language}
          profile={profile}
          setProfile={setProfile}
          onSave={handleInfoSave}
          onSkip={handleSkipSetup}
          text={currentText}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ProfileHeader
        language={language}
        isEditing={isEditing}
        onEditToggle={handleEditToggle}
        text={currentText}
      />

      <MedicineReminder language={language} />

      <BookedAppointments language={language} />

      <PersonalInfoCard
        language={language}
        profile={profile}
        setProfile={setProfile}
        isEditing={isEditing}
        text={currentText}
        onGetLocation={getCurrentLocation}
        isGettingLocation={isGettingLocation}
      />

      <MedicalInfoCard
        language={language}
        profile={profile}
        setProfile={setProfile}
        isEditing={isEditing}
        text={currentText}
      />

      <EmergencyContactCard
        language={language}
        profile={profile}
        setProfile={setProfile}
        isEditing={isEditing}
        text={currentText}
      />

      {/* Save/Cancel Buttons */}
      {isEditing && (
        <div className="flex gap-2">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="flex-1"
          >
            {currentText.cancel}
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <Save className="h-4 w-4 mr-1" />
            {currentText.save}
          </Button>
        </div>
      )}

      <HealthIDCard language={language} profile={profile} />
    </div>
  );
};

export default Profile;
