
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ProfileData } from "@/hooks/useProfileState";
import { useProfileLocation } from "@/hooks/useProfileLocation";

interface ProfileEditManagerProps {
  language: string;
  profile: ProfileData;
  setProfile: (profile: ProfileData) => void;
  onSave: () => void;
  children: (props: {
    isEditing: boolean;
    onEditToggle: () => void;
    onCancel: () => void;
    onGetLocation: () => void;
    isGettingLocation: boolean;
  }) => React.ReactNode;
}

const ProfileEditManager = ({ 
  language, 
  profile, 
  setProfile, 
  onSave, 
  children 
}: ProfileEditManagerProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  const { isGettingLocation, getCurrentLocation } = useProfileLocation(language);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave();
    
    const text = {
      en: {
        profileUpdated: "✅ Profile Updated!",
        changesSaved: "Your changes have been saved"
      },
      kn: {
        profileUpdated: "✅ ಪ್ರೊಫೈಲ್ ಅಪ್‌ಡೇಟ್ ಆಗಿದೆ!",
        changesSaved: "ನಿಮ್ಮ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ"
      }
    };
    
    const currentText = text[language as keyof typeof text] || text.en;
    
    toast({
      title: currentText.profileUpdated,
      description: currentText.changesSaved
    });
  };

  const handleGetLocation = async () => {
    const address = await getCurrentLocation();
    if (address) {
      setProfile({ ...profile, location: address });
    }
  };

  return (
    <>
      {children({
        isEditing,
        onEditToggle: handleEditToggle,
        onCancel: handleCancel,
        onGetLocation: handleGetLocation,
        isGettingLocation
      })}
    </>
  );
};

export default ProfileEditManager;
