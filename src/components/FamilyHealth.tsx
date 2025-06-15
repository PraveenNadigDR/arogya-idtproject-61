
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, User, Heart, Calendar, Plus, Thermometer, X, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface FamilyHealthProps {
  language: string;
}

interface FamilyMember {
  id: number;
  name: string;
  age: number;
  relation: string;
  avatar: string;
  healthStatus: string;
  lastCheckup: string;
  medicines: number;
  upcomingAppointments: number;
  conditions: string[];
}

const FamilyHealth = ({ language }: FamilyHealthProps) => {
  const { user } = useAuth();
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    age: "",
    relation: "",
    conditions: ""
  });
  const { toast } = useToast();

  // Load family members from localStorage
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(() => {
    if (!user) return [];
    
    const stored = localStorage.getItem(`family_members_${user.id}`);
    const storedMembers = stored ? JSON.parse(stored) : [];
    
    // Always include the user as the first member
    const userProfile = {
      id: 0,
      name: language === "en" ? `${user.user_metadata?.full_name || user.email?.split('@')[0] || "You"} (You)` : `${user.user_metadata?.full_name || user.email?.split('@')[0] || "ನೀವು"} (ನೀವು)`,
      age: 19, // Default age, can be updated from profile
      relation: language === "en" ? "Self" : "ನೀವು",
      avatar: "👨‍💼",
      healthStatus: "normal",
      lastCheckup: "2024-01-15",
      medicines: 2,
      upcomingAppointments: 1,
      conditions: language === "en" ? ["Healthy"] : ["ಆರೋಗ್ಯವಾಗಿದೆ"]
    };

    return [userProfile, ...storedMembers];
  });

  const text = {
    en: {
      title: "Family Health",
      subtitle: "Manage Everyone's Health",
      addMember: "Add Family Member",
      viewHealth: "View Health",
      lastCheckup: "Last Checkup",
      medicines: "Medicines",
      alerts: "Health Alerts",
      upcoming: "Upcoming",
      normal: "Normal",
      attention: "Needs Attention",
      critical: "Critical",
      name: "Name",
      age: "Age",
      relation: "Relation",
      conditions: "Health Conditions",
      save: "Save Member",
      cancel: "Cancel",
      memberAdded: "✅ Family Member Added!",
      memberAddedDesc: "The family member has been added successfully",
      memberRemoved: "Family member removed",
      noMembers: "No family members added yet",
      addFirstMember: "Add your first family member to start tracking their health"
    },
    kn: {
      title: "ಕುಟುಂಬದ ಆರೋಗ್ಯ",
      subtitle: "ಎಲ್ಲರ ಆರೋಗ್ಯವನ್ನು ನಿರ್ವಹಿಸಿ",
      addMember: "ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ",
      viewHealth: "ಆರೋಗ್ಯವನ್ನು ನೋಡಿ",
      lastCheckup: "ಕೊನೆಯ ಪರೀಕ್ಷೆ",
      medicines: "ಔಷಧಗಳು",
      alerts: "ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆಗಳು",
      upcoming: "ಮುಂಬರುವ",
      normal: "ಸಾಮಾನ್ಯ",
      attention: "ಗಮನ ಅಗತ್ಯ",
      critical: "ಗಂಭೀರ",
      name: "ಹೆಸರು",
      age: "ವಯಸ್ಸು",
      relation: "ಸಂಬಂಧ",
      conditions: "ಆರೋಗ್ಯ ಸ್ಥಿತಿಗಳು",
      save: "ಸದಸ್ಯರನ್ನು ಉಳಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",
      memberAdded: "✅ ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಲಾಗಿದೆ!",
      memberAddedDesc: "ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ",
      memberRemoved: "ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
      noMembers: "ಇನ್ನೂ ಯಾವುದೇ ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ",
      addFirstMember: "ಅವರ ಆರೋಗ್ಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನಿಮ್ಮ ಮೊದಲ ಕುಟುಂಬದ ಸದಸ್ಯರನ್ನು ಸೇರಿಸಿ"
    }
  };

  const currentText = text[language];

  const avatars = ["👨", "👩", "👴", "👵", "👦", "👧", "🧑", "👶"];

  const handleAddMember = () => {
    if (!newMember.name || !newMember.age || !newMember.relation) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    const member: FamilyMember = {
      id: Date.now(),
      name: newMember.name,
      age: parseInt(newMember.age),
      relation: newMember.relation,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      healthStatus: "normal",
      lastCheckup: new Date().toISOString().split('T')[0],
      medicines: 0,
      upcomingAppointments: 0,
      conditions: newMember.conditions ? newMember.conditions.split(',').map(c => c.trim()) : [language === "en" ? "Healthy" : "ಆರೋಗ್ಯವಾಗಿದೆ"]
    };

    const updatedMembers = [...familyMembers, member];
    setFamilyMembers(updatedMembers);
    
    // Save to localStorage (excluding the user profile)
    if (user) {
      const membersToStore = updatedMembers.filter(m => m.id !== 0);
      localStorage.setItem(`family_members_${user.id}`, JSON.stringify(membersToStore));
    }

    setNewMember({ name: "", age: "", relation: "", conditions: "" });
    setShowAddForm(false);
    
    toast({
      title: currentText.memberAdded,
      description: currentText.memberAddedDesc
    });
  };

  const handleRemoveMember = (memberId: number) => {
    if (memberId === 0) return; // Can't remove self
    
    const updatedMembers = familyMembers.filter(m => m.id !== memberId);
    setFamilyMembers(updatedMembers);
    
    // Save to localStorage (excluding the user profile)
    if (user) {
      const membersToStore = updatedMembers.filter(m => m.id !== 0);
      localStorage.setItem(`family_members_${user.id}`, JSON.stringify(membersToStore));
    }
    
    toast({
      title: currentText.memberRemoved,
      description: ""
    });
  };

  const handleViewHealth = (member: any) => {
    toast({
      title: language === "en" ? `📋 Opening ${member.name}'s Health Profile` : `📋 ${member.name} ಅವರ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ತೆರೆಯುತ್ತಿದೆ`,
      description: language === "en" 
        ? "Loading health records and medicine schedule" 
        : "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಔಷಧ ವೇಳಾಪಟ್ಟಿ ಲೋಡ್ ಮಾಡುತ್ತಿದೆ"
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "normal": return "bg-green-100 text-green-800";
      case "attention": return "bg-yellow-100 text-yellow-800";
      case "critical": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "normal": return currentText.normal;
      case "attention": return currentText.attention;
      case "critical": return currentText.critical;
      default: return status;
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                {currentText.title}
              </CardTitle>
              <p className="text-sm text-blue-600">{currentText.subtitle}</p>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
              onClick={() => setShowAddForm(true)}
            >
              <Plus className="h-4 w-4 mr-1" />
              {currentText.addMember}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Add Member Form */}
      {showAddForm && (
        <Card className="border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-md text-green-800">
              {currentText.addMember}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">{currentText.name}</label>
                <Input
                  value={newMember.name}
                  onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                  placeholder={language === "en" ? "Enter name" : "ಹೆಸರು ನಮೂದಿಸಿ"}
                />
              </div>
              <div>
                <label className="text-sm font-medium">{currentText.age}</label>
                <Input
                  type="number"
                  value={newMember.age}
                  onChange={(e) => setNewMember({...newMember, age: e.target.value})}
                  placeholder={language === "en" ? "Enter age" : "ವಯಸ್ಸು ನಮೂದಿಸಿ"}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">{currentText.relation}</label>
              <Input
                value={newMember.relation}
                onChange={(e) => setNewMember({...newMember, relation: e.target.value})}
                placeholder={language === "en" ? "e.g., Father, Mother, Brother" : "ಉದಾ., ತಂದೆ, ತಾಯಿ, ಸಹೋದರ"}
              />
            </div>
            <div>
              <label className="text-sm font-medium">{currentText.conditions}</label>
              <Input
                value={newMember.conditions}
                onChange={(e) => setNewMember({...newMember, conditions: e.target.value})}
                placeholder={language === "en" ? "e.g., Diabetes, Hypertension (optional)" : "ಉದಾ., ಮಧುಮೇಹ, ಅಧಿಕ ರಕ್ತದೊತ್ತಡ (ಐಚ್ಛಿಕ)"}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleAddMember}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <Save className="h-4 w-4 mr-1" />
                {currentText.save}
              </Button>
              <Button
                onClick={() => setShowAddForm(false)}
                variant="outline"
                className="flex-1"
              >
                {currentText.cancel}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Family Members */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">
          {language === "en" ? "Family Members" : "ಕುಟುಂಬದ ಸದಸ್ಯರು"}
        </h3>
        
        {familyMembers.length === 1 ? (
          <Card className="border-dashed border-gray-300">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <h4 className="font-medium text-gray-600 mb-2">{currentText.noMembers}</h4>
              <p className="text-sm text-gray-500 mb-4">{currentText.addFirstMember}</p>
              <Button 
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-1" />
                {currentText.addMember}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {familyMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{member.avatar}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-800">{member.name}</h4>
                          {member.id !== 0 && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                              onClick={() => handleRemoveMember(member.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{member.age} {language === "en" ? "years" : "ವರ್ಷ"} • {member.relation}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(member.healthStatus)}>
                      {getStatusText(member.healthStatus)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">{member.medicines}</div>
                      <div className="text-xs text-gray-500">{currentText.medicines}</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{member.upcomingAppointments}</div>
                      <div className="text-xs text-gray-500">{currentText.upcoming}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">{member.lastCheckup}</div>
                      <div className="text-xs text-gray-500">{currentText.lastCheckup}</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {member.conditions.map((condition, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    size="sm" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleViewHealth(member)}
                  >
                    <User className="h-4 w-4 mr-1" />
                    {currentText.viewHealth}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      {familyMembers.length > 1 && (
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">{familyMembers.length}</div>
                <div className="text-xs text-green-700">
                  {language === "en" ? "Family Members" : "ಕುಟುಂಬದ ಸದಸ್ಯರು"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {familyMembers.reduce((sum, member) => sum + member.medicines, 0)}
                </div>
                <div className="text-xs text-blue-700">
                  {language === "en" ? "Total Medicines" : "ಒಟ್ಟು ಔಷಧಗಳು"}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {familyMembers.reduce((sum, member) => sum + member.upcomingAppointments, 0)}
                </div>
                <div className="text-xs text-purple-700">
                  {language === "en" ? "Upcoming Checkups" : "ಮುಂಬರುವ ಪರೀಕ್ಷೆಗಳು"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FamilyHealth;
