
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Phone, MapPin, Calendar, Heart, Edit, Save, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

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
      
      // Check if we need to show the info form (age and phone not set)
      const storedProfile = localStorage.getItem(`profile_${user.id}`);
      if (storedProfile) {
        const parsed = JSON.parse(storedProfile);
        setProfile(prev => ({ ...prev, ...parsed }));
      } else if (!profile.age || !profile.phone) {
        setShowInfoForm(true);
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
      noLocation: "No location set"
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
      noLocation: "ಯಾವುದೇ ಸ್ಥಳ ಸೆಟ್ ಆಗಿಲ್ಲ"
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

  const handleCancel = () => {
    setIsEditing(false);
  };

  // Show info collection form if needed
  if (showInfoForm) {
    return (
      <div className="space-y-4">
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
              <User className="h-5 w-5" />
              {currentText.setupProfile}
            </CardTitle>
            <p className="text-sm text-blue-600">
              {currentText.setupMessage}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-1">{currentText.ageLabel}</label>
              <Input
                type="number"
                value={profile.age || ''}
                onChange={(e) => setProfile({...profile, age: parseInt(e.target.value) || 0})}
                placeholder={language === "en" ? "Enter your age" : "ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ"}
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">{currentText.phoneLabel}</label>
              <Input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                placeholder={language === "en" ? "Enter your phone number" : "ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ"}
              />
            </div>
            <Button
              onClick={handleInfoSave}
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={!profile.age || !profile.phone}
            >
              <Save className="h-4 w-4 mr-1" />
              {currentText.saveInfo}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <User className="h-5 w-5" />
                {currentText.title}
              </CardTitle>
              <p className="text-sm text-blue-600">
                {language === "en" ? "Manage your health profile" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಿಸಿ"}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Edit className="h-4 w-4 mr-1" />
              {currentText.edit}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex items-center gap-2">
            <User className="h-4 w-4" />
            {currentText.personalInfo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">{currentText.name}</label>
              {isEditing ? (
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              ) : (
                <p className="text-sm text-gray-700 mt-1">{profile.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium">{currentText.age}</label>
              {isEditing ? (
                <Input
                  type="number"
                  value={profile.age}
                  onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
                />
              ) : (
                <p className="text-sm text-gray-700 mt-1">{profile.age} {language === "en" ? "years" : "ವರ್ಷಗಳು"}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">{currentText.phone}</label>
            {isEditing ? (
              <Input
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.phone}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium">{currentText.location}</label>
              <Button
                size="sm"
                variant="outline"
                onClick={getCurrentLocation}
                disabled={isGettingLocation}
                className="text-xs"
              >
                <Navigation className="h-3 w-3 mr-1" />
                {isGettingLocation ? currentText.gettingLocation : currentText.updateLocation}
              </Button>
            </div>
            {isEditing ? (
              <Input
                value={profile.location}
                onChange={(e) => setProfile({...profile, location: e.target.value})}
                placeholder={language === "en" ? "Enter location or use GPS" : "ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ ಅಥವಾ GPS ಬಳಸಿ"}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {profile.location || currentText.noLocation}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex items-center gap-2">
            <Heart className="h-4 w-4" />
            {currentText.medicalInfo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <label className="text-sm font-medium">{currentText.bloodGroup}</label>
            {isEditing ? (
              <Input
                value={profile.bloodGroup}
                onChange={(e) => setProfile({...profile, bloodGroup: e.target.value})}
              />
            ) : (
              <Badge variant="secondary" className="bg-red-100 text-red-700 mt-1">
                {profile.bloodGroup}
              </Badge>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">{currentText.allergies}</label>
            {isEditing ? (
              <Input
                value={profile.allergies}
                onChange={(e) => setProfile({...profile, allergies: e.target.value})}
                placeholder={language === "en" ? "e.g., Penicillin, Peanuts" : "ಉದಾ., ಪೆನಿಸಿಲಿನ್, ಕಡಲೆಕಾಯಿ"}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.allergies}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">{currentText.chronicConditions}</label>
            {isEditing ? (
              <Input
                value={profile.chronicConditions}
                onChange={(e) => setProfile({...profile, chronicConditions: e.target.value})}
                placeholder={language === "en" ? "e.g., Diabetes, Hypertension" : "ಉದಾ., ಮಧುಮೇಹ, ಅಧಿಕ ರಕ್ತದೊತ್ತಡ"}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.chronicConditions}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {currentText.emergencyContact}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <label className="text-sm font-medium">{currentText.phone}</label>
            {isEditing ? (
              <Input
                value={profile.emergencyContact}
                onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
                placeholder={language === "en" ? "Enter emergency contact number" : "ತುರ್ತು ಸಂಪರ್ಕ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ"}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.emergencyContact || (language === "en" ? "No emergency contact set" : "ತುರ್ತು ಸಂಪರ್ಕ ಸೆಟ್ ಆಗಿಲ್ಲ")}</p>
            )}
          </div>
        </CardContent>
      </Card>

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

      {/* Health ID Card */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-4">
          <div className="text-center">
            <h4 className="font-medium text-green-800 mb-2">
              {language === "en" ? "🆔 Health ID Card" : "🆔 ಆರೋಗ್ಯ ಐಡಿ ಕಾರ್ಡ್"}
            </h4>
            <div className="bg-white p-3 rounded border-2 border-dashed border-green-300">
              <p className="text-lg font-bold">{profile.name}</p>
              <p className="text-sm text-gray-600">{profile.bloodGroup} • {profile.age} {language === "en" ? "years" : "ವರ್ಷಗಳು"}</p>
              <p className="text-xs text-gray-500 mt-1">{profile.location}</p>
            </div>
            <p className="text-xs text-green-600 mt-2">
              {language === "en" ? "Show this to medical professionals" : "ಇದನ್ನು ವೈದ್ಯಕೀಯ ವೃತ್ತಿಪರರಿಗೆ ತೋರಿಸಿ"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
