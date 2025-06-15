
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export interface ProfileData {
  name: string;
  age: number;
  phone: string;
  location: string;
  bloodGroup: string;
  emergencyContact: string;
  allergies: string;
  chronicConditions: string;
}

export const useProfileState = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    age: 0,
    phone: "",
    location: "",
    bloodGroup: "B+",
    emergencyContact: "",
    allergies: "None",
    chronicConditions: "Diabetes"
  });
  const [showInfoForm, setShowInfoForm] = useState(false);

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
        setShowInfoForm(false);
      } else {
        // Only show info form if we don't have age AND phone
        setShowInfoForm(!profile.age || !profile.phone);
      }
    }
  }, [user]);

  const saveProfile = () => {
    if (user) {
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(profile));
    }
  };

  return {
    profile,
    setProfile,
    showInfoForm,
    setShowInfoForm,
    saveProfile,
    user
  };
};
