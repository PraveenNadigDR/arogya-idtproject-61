
interface LanguageSelectorProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector = ({ language, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="mt-8 text-center">
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-4 py-2 rounded-full ${
          language === "en"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } mr-2`}
      >
        English
      </button>
      <button
        onClick={() => onLanguageChange("kn")}
        className={`px-4 py-2 rounded-full ${
          language === "kn"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};

export default LanguageSelector;
