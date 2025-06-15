
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

interface ProfileFormActionsProps {
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  text: {
    save: string;
    cancel: string;
  };
}

const ProfileFormActions = ({ isEditing, onSave, onCancel, text }: ProfileFormActionsProps) => {
  if (!isEditing) return null;

  return (
    <div className="flex gap-2">
      <Button
        onClick={onCancel}
        variant="outline"
        className="flex-1"
      >
        {text.cancel}
      </Button>
      <Button
        onClick={onSave}
        className="flex-1 bg-green-600 hover:bg-green-700"
      >
        <Save className="h-4 w-4 mr-1" />
        {text.save}
      </Button>
    </div>
  );
};

export default ProfileFormActions;
