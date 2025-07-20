
interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector = ({ language, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="mt-8 text-center">
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-4 py-2 rounded-full transition-colors mr-2 ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange("kn")}
        className={`px-4 py-2 rounded-full transition-colors ${
          language === "kn"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};

export default LanguageSelector;
