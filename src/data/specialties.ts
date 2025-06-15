
export const getSpecialties = (language: string) => [
  { id: "all", name: language === "en" ? "All" : "ಎಲ್ಲಾ" },
  { id: "general", name: language === "en" ? "General" : "ಸಾಮಾನ್ಯ" },
  { id: "pediatric", name: language === "en" ? "Child Care" : "ಮಕ್ಕಳ ಆರೈಕೆ" },
  { id: "diabetes", name: language === "en" ? "Diabetes" : "ಮಧುಮೇಹ" },
  { id: "heart", name: language === "en" ? "Heart" : "ಹೃದಯ" },
  { id: "orthopedic", name: language === "en" ? "Bone & Joint" : "ಮೂಳೆ ಮತ್ತು ಕೀಲು" },
  { id: "gynecology", name: language === "en" ? "Women's Health" : "ಮಹಿಳೆಯರ ಆರೋಗ್ಯ" },
  { id: "dermatology", name: language === "en" ? "Skin" : "ಚರ್ಮ" },
  { id: "ent", name: language === "en" ? "ENT" : "ಇಎನ್‌ಟಿ" }
];
