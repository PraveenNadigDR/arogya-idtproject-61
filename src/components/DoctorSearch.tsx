
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface DoctorSearchProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedSpecialty: string;
  onSpecialtyChange: (value: string) => void;
  specialties: Array<{ id: string; name: string }>;
  texts: any;
}

const DoctorSearch = ({
  searchQuery,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  specialties,
  texts
}: DoctorSearchProps) => {
  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder={texts.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Specialty Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {specialties.map((specialty) => (
          <Button
            key={specialty.id}
            variant={selectedSpecialty === specialty.id ? "default" : "outline"}
            size="sm"
            onClick={() => onSpecialtyChange(specialty.id)}
            className={`whitespace-nowrap ${
              selectedSpecialty === specialty.id 
                ? "bg-green-600 hover:bg-green-700" 
                : "border-green-300 text-green-700 hover:bg-green-50"
            }`}
          >
            {specialty.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;
