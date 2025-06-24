import { useToast } from "@/hooks/use-toast";
import MedicineReminder from "@/components/MedicineReminder";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfoForm from "@/components/profile/ProfileInfoForm";
import PersonalInfoCard from "@/components/profile/PersonalInfoCard";
import MedicalInfoCard from "@/components/profile/MedicalInfoCard";
import EmergencyContactCard from "@/components/profile/EmergencyContactCard";
import HealthIDCard from "@/components/profile/HealthIDCard";
import BookedAppointments from "@/components/profile/BookedAppointments";
import ProfileFormActions from "@/components/profile/ProfileFormActions";
import ProfileEditManager from "@/components/profile/ProfileEditManager";
import NotificationManager from "@/components/NotificationManager";
import { useProfileState } from "@/hooks/useProfileState";
import { useNotifications } from "@/hooks/useNotifications";

interface ProfileProps {
  language: string;
}

const Profile = ({ language }: ProfileProps) => {
  const { profile, setProfile, showInfoForm, setShowInfoForm, saveProfile } = useProfileState();
  const { toast } = useToast();
  
  // Initialize notifications
  useNotifications(language);

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

  const currentText = text[language as keyof typeof text] || text.en;

  const handleInfoSave = () => {
    if (profile.age && profile.phone) {
      setShowInfoForm(false);
      saveProfile();
      toast({
        title: currentText.profileUpdated,
        description: currentText.changesSaved
      });
    }
  };

  const handleSkipSetup = () => {
    setShowInfoForm(false);
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
    <ProfileEditManager
      language={language}
      profile={profile}
      setProfile={setProfile}
      onSave={saveProfile}
    >
      {({ isEditing, onEditToggle, onCancel, onGetLocation, isGettingLocation }) => (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <ProfileHeader
              language={language}
              isEditing={isEditing}
              onEditToggle={onEditToggle}
              text={currentText}
            />
            <NotificationManager language={language} />
          </div>

          <MedicineReminder language={language} />

          <BookedAppointments language={language} />

          <PersonalInfoCard
            language={language}
            profile={profile}
            setProfile={setProfile}
            isEditing={isEditing}
            text={currentText}
            onGetLocation={onGetLocation}
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

          <ProfileFormActions
            isEditing={isEditing}
            onSave={saveProfile}
            onCancel={onCancel}
            text={currentText}
          />

          <HealthIDCard language={language} profile={profile} />
        </div>
      )}
    </ProfileEditManager>
  );
};

export default Profile;
